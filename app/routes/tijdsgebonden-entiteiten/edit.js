import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model(params) {
    return this.store.find('tijdsgebonden-entiteit', params.id );
  },
  actions: {
    cancel(changeset, model) {
      changeset.rollback();
      this.transitionTo("tijdsgebonden-entiteiten.show", model);
    },
    save(changeset, model) {
      var self = this;
      // TODO changeset gets applied even when server gives 500
      changeset.save().then( function() {
        self.transitionTo("tijdsgebonden-entiteiten.show", model);
      }).catch( function() {
        alert("Could not save tijdsgebonden-entiteit");
      });
    },
    delete(changeset, model) {
      var self = this;
      model.deleteRecord();
      return model.save().then( function() {
        self.transitionTo( "tijdsgebonden-entiteiten");
      }).catch( function() {
        alert("Deletion of tijdsgebonden-entiteit failed");
      });
    }
  }
});
