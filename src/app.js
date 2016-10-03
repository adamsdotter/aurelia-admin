export class App {
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'units'], name: 'units',     moduleId: 'pages/units/units' },
      { route: 'unittypes',   name: 'unittypes', moduleId: 'pages/unittypes/unittypes',   nav: true },
      { route: 'changelog',   name: 'changelog', moduleId: 'pages/changelog/changelog' }
    ]);
  }
}
