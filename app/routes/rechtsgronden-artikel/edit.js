import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model(params) {
    return this.store.find('rechtsgrond-artikel', params.id );
  },
  actions: {
    cancel(changeset, model) {
      changeset.rollback();
      this.transitionTo("rechtsgronden-artikel.show", model);
    },
    save(changeset, model) {
      var self = this;
      // TODO changeset gets applied even when server gives 500
      changeset.save().then( function() {
        self.transitionTo("rechtsgronden-artikel.show", model);
      }).catch( function() {
        alert("Could not save rechtsgrond-artikel");
      });
    },
    delete(changeset, model) {
      var self = this;
      model.deleteRecord();
      return model.save().then( function() {
        self.transitionTo( "rechtsgronden-artikel");
      }).catch( function() {
        alert("Deletion of rechtsgrond-artikel failed");
      });
    }
  }
});
