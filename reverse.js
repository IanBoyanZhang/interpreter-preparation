// The function shouldn't modify the input, it should just return a new reversed expression
var melody1 = { tag: 'note', pitch: 'a4', dur: 125 };
var melody2 = 
    { tag: 'seq',
      left:
        { tag: 'seq',
          left: { tag: 'note', pitch: 'a4', dur: 250 },
          right: { tag: 'note', pitch: 'b4', dur: 250} },
      right:
        { tag: 'seq',
          left: { tag: 'note', pitch: 'c4', dur: 500 },
          right: { tag: 'note', pitch: 'd4', dur: 500} } };

var melody3 = 
    { tag: 'seq',
      left:
        { tag: 'seq',
          left: { tag: 'note', pitch: 'd4', dur: 250 },
          right: { tag: 'note', pitch: 'c4', dur: 250} },
      right:
        { tag: 'seq',
          left: { tag: 'note', pitch: 'b4', dur: 500 },
          right: { tag: 'note', pitch: 'a4', dur: 500} } };

var reverse = function(expr) {
  // recursive way
  var tree = expr;
  var recursive_rev = function(tree) {
    if (tree.left === undefined && tree.right === undefined) {
      return;
    }
    recursive_rev(tree.right);
    recursive_rev(tree.left);
    var temp = tree.left;
    tree.left = tree.right;
    tree.right = temp;
  };

  recursive_rev(tree);
  return tree;
};

// Improvement
var reverse = function(expr) {
  if (expr.tag === "note") {
    return expr;
  } else {
    return {tag: 'seq', left: reverse(expr.right),
            right: reverse(expr.left)}
  }
};

//console.log(reverse(melody1));
//console.log(melody2);
console.log(reverse(melody2));
console.log((melody3));
console.log(melody3 === reverse(melody2));
