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
    //template: _.template($('#signup-template').html())


    // Re-renders the titles of the todo item.
    render: function() {
      this.$el.empty();
      $p = $("<p>ass eater</p>");
      console.log("horse");
      this.$el.append($p);
    }
  
});