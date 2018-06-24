import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model(params) {
    return this.store.find('toezicht-document-authenticity-type', params.id );
  },
  actions: {
    cancel(changeset, model) {
      changeset.rollback();
      this.transitionTo("toezicht-document-authenticity-types.show", model);
    },
    save(changeset, model) {
      var self = this;
      // TODO changeset gets applied even when server gives 500
      changeset.save().then( function() {
        self.transitionTo("toezicht-document-authenticity-types.show", model);
      }).catch( function() {
        alert("Could not save toezicht-document-authenticity-type");
      });
    },
    delete(changeset, model) {
      var self = this;
      model.deleteRecord();
      return model.save().then( function() {
        self.transitionTo( "toezicht-document-authenticity-types");
      }).catch( function() {
        alert("Deletion of toezicht-document-authenticity-type failed");
      });
    }
  }
});
