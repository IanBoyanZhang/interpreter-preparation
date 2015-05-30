// MUS made-up language

// { tag: 'note', pitch: 'c4', dur: 500}
// { tag: 'seq',
//   left: { tag: 'note', pitch: 'e4', dur: 500}}
// three rows in a row
// { tag: 'seq',
//   left: { tag: 'note', pitch: 'e4', dur: 250 }
//           left: { tag: 'note', pitch: 'e4', dur: 250},
//           right: { tag: 'note', pitch: 'g4', dur: 500} } }

// write a function prelude that takes a music expression expr 
var prelude = function(expr) {
  // walk through the tree
  var rtnMelody = { tag: 'seq', left: null, right: null };
  rtnMelody.right = expr;
  rtnMelody.left = { tag: 'note', pitch: 'd4', dur: 500 };
  return rtnMelody;
};

var melody1 = { tag: 'note', pitch: 'c4', dur: 250 };
var melody2 = 
    { tag: 'seq',
      left: { tag: 'note', pitch: 'd4', dur: 500 },
      right: { tag: 'note', pitch: 'c4', dur: 250 } };

console.log(prelude(melody1));
console.log(prelude(melody2));
