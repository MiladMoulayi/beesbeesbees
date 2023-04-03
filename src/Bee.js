var Bee = function() {
  Grub.call(this);
  this.age = 5;
};

Bee.prototype.color = 'yellow';
Bee.prototype.job = 'keep on growing';
Bee.prototype.food = Grub.prototype.food;
Bee.prototype.eat = Grub.prototype.eat;

