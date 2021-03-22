const amean = (a, b) => (a + b)/2;
const gmean = (a, b) => Math.sqrt(a * b).toFixed(1);
const hypotenuse = (a, b) => Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)).toFixed(1);
const surface = (a,b,c) => 2*(a * b + a * c + b * c );
const volume = (a,b,c) => a * b *c;
const sqrt_not_nulll = (a) => Math.sqrt(a);
const mul_4_numbs = (a,b,c,d) => a * b * c * d;
const divrem = (a,b) => a % b;
const div = (a,b) => a / b;
const sum3 = (a,b,c) => a + b + c;

QUnit.module('amean', function() {
    QUnit.test('Should calculate arithmetic mean.', function(assert) {
      assert.equal(amean(4, 7), 5.5, ' (4 + 7)/2 = 5.5');
      assert.equal(amean(22, 3), 12.5, ' (22 + 3)/2 = 12.5');
      assert.equal(amean(44, 8), 26, ' (44 + 8)/2 = 26');
      assert.equal(amean(5, 3), 4, ' (5 + 3)/2 = 4');
      assert.equal(amean(16, 7), 11.5, ' (16 + 7)/2 = 11.5');
    });
  });

  QUnit.module('gmean', function() {
  QUnit.test('Should calculate geometric mean.', function(assert) {
    assert.equal(gmean(1, 2), 1.4, ' √(1 * 2) = 1.4');
    assert.equal(gmean(22, 10), 14.8, ' √(22 * 10) = 14.8');
    assert.equal(gmean(55, 8), 21, ' √(55 * 8) = 21');
    assert.equal(gmean(8, 16), 11.3, ' √(8 * 16) = 11.3');
    assert.equal(gmean(26, 33), 29.3, ' √(26 * 33) = 29.3');
  });
});

QUnit.module('hypotenuse', function() {
  QUnit.test('Should calculate the hypotenuse of right-angled triangle.', function(assert) {
    assert.equal(hypotenuse(3, 5), 5.8, ' √((3*3) + (5*5)) = 5.8');
    assert.equal(hypotenuse(13, 3), 13.3, ' √((13*13) + (3*3)) = 13.3');
    assert.equal(hypotenuse(21, 4), 21.4, ' √((21*21) + (4*4)) = 21.4');
    assert.equal(hypotenuse(6, 7), 9.2, ' √((6*6) + (7*7)) = 9.2');
    assert.equal(hypotenuse(33, 8), 34, ' √((33*33) + (8*8)) = 34');
  });
});

QUnit.module('surface', function() {
  QUnit.test('Should calculate the surface of brick body.', function(assert) {
    assert.equal(surface(3, 5, 7), 142, ' 2*(3*5 + 3*7 + 5*7)) = 142');
    assert.equal(surface(13, 3, 8), 334, ' 2*(13*3 + 13*8 + 3*8)) = 334');
    assert.equal(surface(22, 99, 22), 9680, ' 2*(22*99 + 22*22 + 99*22)) = 9680');
    assert.equal(surface(66, 5, 7), 1654, ' 2*(66*5 + 66*7 + 5*7)) = 1654');
    assert.equal(surface(43, 48, 2), 4492, ' 2*(43*48 + 43*2 + 48*2)) = 4492');
  });
});

QUnit.module('volume', function() {
  QUnit.test('Should calculate the volume of brick body.', function(assert) {
    assert.equal(volume(6, 2, 7), 84, ' 6 * 2 * 7 = 84');
    assert.equal(volume(16, 22, 2), 704, ' 16 * 22 * 2 = 704');
    assert.equal(volume(33, 6, 8), 1584, ' 33 * 6 * 8 = 1584');
    assert.equal(volume(5, 99, 227), 112365, ' 5 * 99 * 227 = 112365');
    assert.equal(volume(9, 21, 71), 13419, ' 9 * 21 * 71 = 13419');
  });
});

QUnit.module('sqrt_not_nulll', function() {
  QUnit.test('Square root of a number not zero !', function(assert) {
    assert.notEqual(sqrt_not_nulll(16), 0, ' √16 != 0');
    assert.notEqual(sqrt_not_nulll(7), 0, ' √16 != 0');
    assert.notEqual(sqrt_not_nulll(22), 0, ' √16 != 0');
    assert.notEqual(sqrt_not_nulll(166), 0, ' √16 != 0');
    assert.notEqual(sqrt_not_nulll(115), 0, ' √16 != 0');
  });
});

QUnit.module('mul_4_numbs', function() {
  QUnit.test('Multiplication of four numbers is not null !', function(assert) {
    assert.notEqual(mul_4_numbs(5,7,8,9), 0, ' 5 * 7 * 8 * 9 != 0');
    assert.notEqual(mul_4_numbs(15,71,89,9), 0, ' 15 * 71 * 89 * 9 != 0');
    assert.notEqual(mul_4_numbs(33,13,88,999), 0, ' 33 * 13 * 88 * 999 != 0');
    assert.notEqual(mul_4_numbs(47,200,66,44), 0, ' 47 * 200 * 66 * 44 != 0');
    assert.notEqual(mul_4_numbs(2,73,48,59), 0, ' 2 * 73 * 48 * 59 != 0');
  });
});

QUnit.module('divrem', function() {
  QUnit.test('Divide by 2 remainder is not 1 !', function(assert) {
    assert.notEqual(divrem(4,2), 1, ' 4 % 2 != 1');
    assert.notEqual(divrem(8,2), 1, ' 8 % 2 != 1');
    assert.notEqual(divrem(22,2), 1, ' 22 % 2 != 1');
    assert.notEqual(divrem(32,2), 1, ' 32 % 2 != 1');
    assert.notEqual(divrem(48,2), 1, ' 48 % 2 != 1');
  });
});

QUnit.module('div', function() {
  QUnit.test('Divide is not 0 !', function(assert) {
    assert.notEqual(div(4,2), 0, ' 4 / 2 != 0');
    assert.notEqual(div(14,4), 0, ' 14 / 4 != 0');
    assert.notEqual(div(43,3), 0, ' 43 / 3 != 0');
    assert.notEqual(div(5,5), 0, ' 5 / 5 != 0');
    assert.notEqual(div(9,7), 0, ' 9 / 7 != 0');
  });
});

QUnit.module('sum3', function() {
  QUnit.test('The sum of three numbers is not 0 !', function(assert) {
    assert.notEqual(sum3(4,2,22), 0, ' 4 + 2 + 22 != 0');
    assert.notEqual(sum3(14,22,2), 0, ' 14 + 22 + 2 != 0');
    assert.notEqual(sum3(44,46,22), 0, ' 44 + 46 + 22 != 0');
    assert.notEqual(sum3(66,999,2), 0, ' 66 + 999 + 2 != 0');
    assert.notEqual(sum3(80,200,36), 0, ' 80 + 200 + 36 != 0');
  });
});
