var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
};

HoneyMakerBee.prototype.job = 'make honey';
HoneyMakerBee.prototype.color = Bee.prototype.color;
HoneyMakerBee.prototype.food = Grub.prototype.food;
HoneyMakerBee.prototype.eat = Grub.prototype.eat;
HoneyMakerBee.prototype.honeyPot = 0;
HoneyMakerBee.prototype.makeHoney = function () { this.honeyPot++; };
HoneyMakerBee.prototype.giveHoney = function () { this.honeyPot--; };
