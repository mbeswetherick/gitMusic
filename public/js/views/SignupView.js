var app = app || {};

console.log("Singup working yet?");
// app.SignupView = Backbone.View.extend({

//   el: '#holder',
//   //emplate: _.template($('#signup-template').html());

//   // Re-renders the titles of the todo item.
//   render: function() {
//     this.$el.empty();
//     console.log("in the render function");
//   }
  
// });

app.SignupView = Backbone.View.extend({

    el: '#holder',

    // Re-renders the titles of the todo item.
    render: function() {
      this.$el.empty();
      $p = $("<p>ass eater</p>");
      var template = _.template($('#signup-template').html());
      console.log("horse");
      this.$el.html(template);
    }
  
});