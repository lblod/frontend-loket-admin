import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model(params) {
    return this.store.find('rechtsgrond-beeindiging', params.id );
  },
  actions: {
    cancel(changeset, model) {
      changeset.rollback();
      this.transitionTo("rechtsgronden-beeindiging.show", model);
    },
    save(changeset, model) {
      var self = this;
      // TODO changeset gets applied even when server gives 500
      changeset.save().then( function() {
        self.transitionTo("rechtsgronden-beeindiging.show", model);
      }).catch( function() {
        alert("Could not save rechtsgrond-beeindiging");
      });
    },
    delete(changeset, model) {
      var self = this;
      model.deleteRecord();
      return model.save().then( function() {
        self.transitionTo( "rechtsgronden-beeindiging");
      }).catch( function() {
        alert("Deletion of rechtsgrond-beeindiging failed");
      });
    }
  }
});
