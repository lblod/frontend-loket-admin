import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model(params) {
    return this.store.find('verkiezingsresultaat-gevolg-code', params.id );
  },
  actions: {
    cancel(changeset, model) {
      changeset.rollback();
      this.transitionTo("verkiezingsresultaat-gevolg-codes.show", model);
    },
    save(changeset, model) {
      var self = this;
      // TODO changeset gets applied even when server gives 500
      changeset.save().then( function() {
        self.transitionTo("verkiezingsresultaat-gevolg-codes.show", model);
      }).catch( function() {
        alert("Could not save verkiezingsresultaat-gevolg-code");
      });
    },
    delete(changeset, model) {
      var self = this;
      model.deleteRecord();
      return model.save().then( function() {
        self.transitionTo( "verkiezingsresultaat-gevolg-codes");
      }).catch( function() {
        alert("Deletion of verkiezingsresultaat-gevolg-code failed");
      });
    }
  }
});
