var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
};

ForagerBee.prototype.job = 'find pollen';
ForagerBee.prototype.color = Bee.prototype.color;
ForagerBee.prototype.food = Grub.prototype.food;
ForagerBee.prototype.eat = Grub.prototype.eat;
ForagerBee.prototype.canFly = true;
ForagerBee.prototype.treasureChest = [];
ForagerBee.prototype.forage = function (treasure) { this.treasureChest.push(treasure); }
