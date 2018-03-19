import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model(params) {
    return this.store.find('bestuurseenheid-classificatie-code', params.id );
  },
  actions: {
    cancel(changeset, model) {
      changeset.rollback();
      this.transitionTo("bestuurseenheid-classificatie-codes.show", model);
    },
    save(changeset, model) {
      var self = this;
      // TODO changeset gets applied even when server gives 500
      changeset.save().then( function() {
        self.transitionTo("bestuurseenheid-classificatie-codes.show", model);
      }).catch( function() {
        alert("Could not save bestuurseenheid-classificatie-code");
      });
    },
    delete(changeset, model) {
      var self = this;
      model.deleteRecord();
      return model.save().then( function() {
        self.transitionTo( "bestuurseenheid-classificatie-codes");
      }).catch( function() {
        alert("Deletion of bestuurseenheid-classificatie-code failed");
      });
    }
  }
});
