import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model(params) {
    return this.store.find('lidmaatschap', params.id );
  },
  actions: {
    cancel(changeset, model) {
      changeset.rollback();
      this.transitionTo("lidmaatschappen.show", model);
    },
    save(changeset, model) {
      var self = this;
      // TODO changeset gets applied even when server gives 500
      changeset.save().then( function() {
        self.transitionTo("lidmaatschappen.show", model);
      }).catch( function() {
        alert("Could not save lidmaatschap");
      });
    },
    delete(changeset, model) {
      var self = this;
      model.deleteRecord();
      return model.save().then( function() {
        self.transitionTo( "lidmaatschappen");
      }).catch( function() {
        alert("Deletion of lidmaatschap failed");
      });
    }
  }
});
