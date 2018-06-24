import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('route-not-found', {
    path: '/*wildcard'
  });
  this.route('bestuurseenheden', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('bestuurseenheid-classificatie-codes', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('bestuursorganen', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('bestuursorgaan-classificatie-codes', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('entiteiten', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('fracties', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('geboortes', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('lijsttypes', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('kandidatenlijsten', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('lidmaatschappen', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('mandaten', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('bestuursfunctie-codes', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('mandatarissen', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('mandataris-status-codes', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('beleidsdomein-codes', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('personen', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('geslacht-codes', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('identificatoren', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('rechtsgronden-aanstelling', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('rechtsgronden-beeindiging', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('rechtstreekse-verkiezingen', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('tijdsgebonden-entiteiten', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('tijdsintervallen', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('verkiezingsresultaten', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('verkiezingsresultaat-gevolg-codes', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('werkingsgebieden', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('rechtsgronden', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('vestigingen', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('contact-punten', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('posities', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('rollen', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('organisaties', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('gebruikers', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('accounts', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('validation-executions', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('validations', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('validation-errors', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('document-statuses', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('files', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('bbcdr-reports', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('agendas', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('agendapunten', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('artikels', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('behandelingen-van-agendapunten', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('besluiten', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('rechtsgronden-besluit', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('rechtsgronden-artikel', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('stemmingen', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('zittingen', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('form-nodes', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('form-inputten', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('dynamic-subformen', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('toezicht-inzending-types', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('besluit-types', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('tax-rates', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('fractietypes', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('inzendingen-voor-toezicht', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('toezicht-tax-types', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('toezicht-nomenclatures', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('toezicht-fiscal-periods', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('toezicht-delivery-report-types', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('toezicht-account-acceptance-statuses', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('toezicht-document-authenticity-types', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
  this.route('form-solutions', function() {
    this.route('show', {
      path: ':id'
    });
    this.route('new');

    this.route('edit', {
      path: ':id/edit'
    });
  });
});

export default Router;
