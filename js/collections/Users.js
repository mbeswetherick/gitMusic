// js/collections/todos.js

  var app = app || {};

  // Todo Collection
  // ---------------

  // The collection of todos is backed by *localStorage* instead of a remote
  // server.


  var Users = Backbone.Collection.extend({
    // Reference to this collection's model.
    model: User,

    // Save all of the todo items under the `"todos-backbone"` namespace.

    completed: function() {
      return this.filter(function( todo ) {
        return todo.get('completed');
      });
    },
   

    // Filter down the list of all todo items that are finished.
    completed: function() {
      return this.filter(function( todo ) {
        return todo.get('completed');
      });
    }
    
  });

  // Create our global collection of **Todos**.
  app.Users = new Users();