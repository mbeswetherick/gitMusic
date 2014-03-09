  var app = app || {};

  app.LoginView = Backbone.View.extend({

    el: '#shitHolder',

    // Re-renders the titles of the todo item.
    render: function() {
    	this.$el.empty();
      var template = _.template($('#login-template').html());
      this.$el.html(template);
      console.log('Horse vs Log');
    }
  
});