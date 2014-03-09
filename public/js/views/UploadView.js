  var app = app || {};

  app.UploadView = Backbone.View.extend({

    el: '#shitHolder',

    // Re-renders the titles of the todo item.
    render: function() {
    	this.$el.empty();
      var template = _.template($('#upload-template').html());
      this.$el.html(template);
      console.log('up on the horse');
    }
  
});