var ViewModel = function() {
  this.name = ko.observable('Tabby');
  this.nicknames = ko.observableArray([
    'T',
    'im not creative',
    'help',
    'why'
  ]);
  this.clickCounter = ko.observable(0);
  this.imgSrc = 'img/434164568_fea0ad4013_z.jpg';
  this.incrementCounter = function() {
    this.clickCounter(this.clickCounter() + 1);
  };
  this.level = ko.computed(function() {
    var count = this.clickCounter();
    switch(true) {
      case count >= 10:
        return 'Infant';
      case count >= 100:
        return 'Teen';
      default:
        return 'Newborn';
    }
  }, this);
};
ko.applyBindings(new ViewModel());