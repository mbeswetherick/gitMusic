  var app = app || {};

  app.LoginView = Backbone.View.extend({

    el: '#holder',


    // Re-renders the titles of the todo item.
    render: function() {
    	this.$el.empty();
      $p = $("<p>ass eater</p>");
      console.log('horse seekers');
      this.$el.append($p);
    }
  
});