// js/app.js

var app = app || {};
var ENTER_KEY = 13;

$(function() {

  // Kick things off by creating the **App**.
  new app.AppView();

});

app.AppView = Backbone.View.extend({

    // Instead of generating a new element, bind to the existing skeleton of
    // the App already present in the HTML.
    el: '#holder',

    // Our template for the line of statistics at the bottom of the app.
    //statsTemplate: _.template( $('#hello_template').html() ),

    // At initialization we bind to the relevant events on the `Todos`
    // collection, when items are added or changed.
    initialize: function() {

      this.listenTo(app.Users, 'add', this.addOne);
      
    },

    // Add a single todo item to the list by creating a view for it, and
    // appending its element to the `<ul>`.
    addOne: function( todo ) {
      var view = new app.UserView({ model: User });
      $('#list').append( view.render().el );
    },

    // Add all items in the **Todos** collection at once.
    addAll: function() {
      this.$('#list').html('');
      app.Todos.each(this.addOne, this);
    }

});