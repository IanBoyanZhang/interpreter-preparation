var add_elem = function(tree, value) {
  if(tree === null) {
    return {
      data: value,
      left: null,
      right: null
    };
  }
  if (value <= tree.data) {
    return {
      data: tree.data,
      left: add_elem(tree.left, value),
      right: tree.right
    };
  } else {
    return {
      data: tree.data,
      left: tree.left,
      right: add_elem(tree.right, value),
    };
  }
};

// create a tree from a list of elements
var create_tree = function(lst) {
  var i;
  var curr = null;
  for (var i = 0; i < lst.length; i ++) {
    curr = add_elem(curr, lst[i]);
  }
  return curr;
};

var contain = function(tree, value) {
  var location = tree;      // start at top of tree
  while(location !== null) {
    if (value === location.data) {
      return true;
    } else {
      if (value < location.data) {
        location = location.left;
      } else {
        location = location.right;
      }
    }
  }
  return false;
};

var contain = function(tree, value) {
  var location = tree;
  if (tree === null) {
    return false;
  }

  if (value === location.data) {
    return tree;
  }
  
  if (value < location.data) {
    return contain(location.left, value);
  } else {
    return contain(location.right, value);
  }
}

var count = function(tree) {
  // your code here
  var counter = 0;
  var nodeStack = [];
  var location = tree;

  // backtrace
  while(location !== null) {
    counter++;
    if (location.left !== null) {
      // keep tracking 
      nodeStack.push(location);
    }

    if (location.right !== null) {
      location = location.right;
    } else if(nodeStack.length) {
      location = nodeStack.pop();
      location = location.left;
    } else {
       return counter;
    }
  }
  return counter;
};

console.log(count(null));
var bst = create_tree(['b', 'a']);
console.log(count((bst)));
bst = create_tree(['b', 'a', 'd', 'e', 'c']);
//bst = create_tree([10, 5, 2, 3, 4, 1, 6, 7, 8, 9]);
console.log(count(bst));
