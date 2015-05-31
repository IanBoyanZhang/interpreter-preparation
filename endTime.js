var melody1_mus = { tag: 'note', pitch: 'a4', dur: 125};
var melody2_mus = 
    { tag: 'seq',
      left:
        { tag: 'seq',
          left: { tag: 'note', pitch: 'a4', dur: 250 },
          right: { tag: 'note', pitch: 'b4', dur: 250} },
      right:
        { tag: 'seq',
          left: { tag: 'note', pitch: 'c4', dur: 500 },
          right: { tag: 'note', pitch: 'd4', dur: 500} } };

var endTime = function (time, expr) {
  var timeSum = 0;
  // iterate through all leaves
  var walk_through = function(tree) {
    if (tree.tag === 'seq') {
      // find children
      walk_through(tree.left);
      walk_through(tree.right);
    } else {
      timeSum += tree.dur;
    }
  };
  walk_through(expr);
  return timeSum + time;
};

console.log(endTime(0, melody2_mus));
