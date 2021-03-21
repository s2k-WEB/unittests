const amean = (a, b) => (a + b)/2;
const gmean = (a, b) => Math.sqrt(a * b).toFixed(1);
const hypotenuse = (a, b) => Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)).toFixed(1);
const surface = (a,b,c) => 2*(a * b + a * c + b * c );
const volume = (a,b,c) => a * b *c;
const sqrt_not_nulll = (a) => Math.sqrt(a);
const mul_4_numbs = (a,b,c,d) => a * b * c * d;

QUnit.module('amean', function() {
    QUnit.test('Should calculate arithmetic mean.', function(assert) {
      assert.equal(amean(4, 7), 5.5, '(4 + 7)/2 = 5.5');
    });
  });

  QUnit.module('gmean', function() {
  QUnit.test('Should calculate geometric mean.', function(assert) {
    assert.equal(gmean(1, 2), 1.4, '√(1 * 2) = 1.4');
  });
});

QUnit.module('hypotenuse', function() {
  QUnit.test('Should calculate the hypotenuse of right-angled triangle.', function(assert) {
    assert.equal(hypotenuse(3, 5), 5.8, '√((3*3) + (5*5)) = 5.8');
  });
});

QUnit.module('surface', function() {
  QUnit.test('Should calculate the surface of brick body.', function(assert) {
    assert.equal(surface(3, 5, 7), 142, '2*(3*5 + 3*7 + 5*7)) = 142');
  });
});

QUnit.module('volume', function() {
  QUnit.test('Should calculate the volume of brick body.', function(assert) {
    assert.equal(volume(6, 2, 7), 84, '6 * 2 * 7 = 84');
  });
});

QUnit.module('sqrt_not_nulll', function() {
  QUnit.test('Square root of a number not zero !', function(assert) {
    assert.notEqual(sqrt_not_nulll(16), 0, '√16 != 0');
  });
});

QUnit.module('mul_4_numbs', function() {
  QUnit.test('Multiplication of four numbers is not null !', function(assert) {
    assert.notEqual(mul_4_numbs(5,7,8,9), 0, '5 * 7 * 8 * 9 != 0');
  });
});
