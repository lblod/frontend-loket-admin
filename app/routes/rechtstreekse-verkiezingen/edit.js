import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model(params) {
    return this.store.find('rechtstreekse-verkiezing', params.id );
  },
  actions: {
    cancel(changeset, model) {
      changeset.rollback();
      this.transitionTo("rechtstreekse-verkiezingen.show", model);
    },
    save(changeset, model) {
      var self = this;
      // TODO changeset gets applied even when server gives 500
      changeset.save().then( function() {
        self.transitionTo("rechtstreekse-verkiezingen.show", model);
      }).catch( function() {
        alert("Could not save rechtstreekse-verkiezing");
      });
    },
    delete(changeset, model) {
      var self = this;
      model.deleteRecord();
      return model.save().then( function() {
        self.transitionTo( "rechtstreekse-verkiezingen");
      }).catch( function() {
        alert("Deletion of rechtstreekse-verkiezing failed");
      });
    }
  }
});
