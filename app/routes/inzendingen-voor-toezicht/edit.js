import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model(params) {
    return this.store.find('inzending-voor-toezicht', params.id );
  },
  actions: {
    cancel(changeset, model) {
      changeset.rollback();
      this.transitionTo("inzendingen-voor-toezicht.show", model);
    },
    save(changeset, model) {
      var self = this;
      // TODO changeset gets applied even when server gives 500
      changeset.save().then( function() {
        self.transitionTo("inzendingen-voor-toezicht.show", model);
      }).catch( function() {
        alert("Could not save inzending-voor-toezicht");
      });
    },
    delete(changeset, model) {
      var self = this;
      model.deleteRecord();
      return model.save().then( function() {
        self.transitionTo( "inzendingen-voor-toezicht");
      }).catch( function() {
        alert("Deletion of inzending-voor-toezicht failed");
      });
    }
  }
});
