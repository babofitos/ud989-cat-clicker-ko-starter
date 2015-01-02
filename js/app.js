var initialCats = [
  {
    name: 'Tabby',
    nicknames: [
      'T',
      'im not creative',
      'help',
      'why'
    ],
    clickCounter: 0,
    imgSrc: 'img/434164568_fea0ad4013_z.jpg'
  },
  {
    name: 'cat2',
    nicknames: [
      'cat_two'
    ],
    clickCounter: 0,
    imgSrc: 'img/22252709_010df3379e_z.jpg'
  }
];

var Cat = function(data) {
  this.name = ko.observable(data.name);
  this.nicknames = ko.observableArray(data.nicknames);
  this.clickCounter = ko.observable(data.clickCounter);
  this.imgSrc = data.imgSrc;
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

var ViewModel = function() {
  var self = this;
  this.catList = ko.observableArray([]);
  initialCats.forEach(function(cat) {
    self.catList.push(new Cat(cat));
  });
  this.currentCat = ko.observable(this.catList()[0]);
  this.incrementCounter = function() {
    self.currentCat().clickCounter(self.currentCat().clickCounter() + 1);
  };
  this.setCurrentCat = function(cat) {
    self.currentCat(cat);
  };
};
ko.applyBindings(new ViewModel());