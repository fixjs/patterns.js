/*
 * You can read the article here:
 * http://ejohn.org/blog/javascript-method-overloading/
 */
// addMethod - By John Resig (MIT Licensed)
function addMethod(object, name, fn) {
  var old = object[name];
  object[name] = function () {
    if (fn.length == arguments.length)
      return fn.apply(this, arguments);
    else if (typeof old == 'function')
      return old.apply(this, arguments);
  };
}

function Users() {
  addMethod(this, "find", function () {
    // Find all users...
  });
  addMethod(this, "find", function (name) {
    // Find a user by name
  });
  addMethod(this, "find", function (first, last) {
    // Find a user by first and last name
  });
}

function Users() {}
addMethod(Users.prototype, "find", function () {
  // Find all users...
});
addMethod(Users.prototype, "find", function (name) {
  // Find a user by name
});
addMethod(Users.prototype, "find", function (first, last) {
  // Find a user by first and last name
});

var users = new Users();
users.find(); // Finds all
users.find("John"); // Finds users by name
users.find("John", "Resig"); // Finds users by first and last name
users.find("John", "E", "Resig"); // Does nothing

// addMethod - By John Resig (MIT Licensed)
function addMethod(object, name, fn) {
  var old = object[name];
  if (old)
    object[name] = function () {
      if (fn.length == arguments.length)
        return fn.apply(this, arguments);
      else if (typeof old == 'function')
        return old.apply(this, arguments);
    };
  else
    object[name] = fn;
}

var users = new Users();
users.find(); // Finds all
users.find("John"); // Finds users by name
users.find("John", "Resig"); // Finds users by first and last name
users.find("John", "E", "Resig"); // Finds all
