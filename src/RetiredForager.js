var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
};

RetiredForagerBee.prototype.job = 'gamble';
RetiredForagerBee.prototype.canFly = false;
RetiredForagerBee.prototype.color = 'grey';
RetiredForagerBee.prototype.forage = function () { return 'I am too old, let me play cards instead' };
RetiredForagerBee.prototype.food = Grub.prototype.food;
RetiredForagerBee.prototype.eat = Grub.prototype.eat;
RetiredForagerBee.prototype.treasureChest = [];
RetiredForagerBee.prototype.gamble = function () { this.treasureChest.push('treasure'); }