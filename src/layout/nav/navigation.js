export class Navigation {
  constructor(router) {
    this.router = router;
    this.links = [
      {
        'text': 'Manage units',
        'link': '/#/'
      },
      {
        'text': 'Manage unit types',
        'link': '/#/unittypes'
      },
      {
        'text': 'Change log',
        'link': '/#/changelog'
      }
    ];
  }

  console.log('router', router);
}
