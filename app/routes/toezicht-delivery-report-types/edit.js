import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model(params) {
    return this.store.find('toezicht-delivery-report-type', params.id );
  },
  actions: {
    cancel(changeset, model) {
      changeset.rollback();
      this.transitionTo("toezicht-delivery-report-types.show", model);
    },
    save(changeset, model) {
      var self = this;
      // TODO changeset gets applied even when server gives 500
      changeset.save().then( function() {
        self.transitionTo("toezicht-delivery-report-types.show", model);
      }).catch( function() {
        alert("Could not save toezicht-delivery-report-type");
      });
    },
    delete(changeset, model) {
      var self = this;
      model.deleteRecord();
      return model.save().then( function() {
        self.transitionTo( "toezicht-delivery-report-types");
      }).catch( function() {
        alert("Deletion of toezicht-delivery-report-type failed");
      });
    }
  }
});
