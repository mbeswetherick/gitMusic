// js/models/todo.js

  var app = app || {};


  var User = Backbone.Model.extend({

    initialize: function(){
      console.log("making User");

    },


    // Toggle the `completed` state of this todo item.
    toggle: function() {
      this.save({
        completed: !this.get('completed')
      });
    },

    url:"/api/signup",

    postLogin: function() {
      var self = this;
      console.log(this.attributes.email);
      $.post("/api/signup", {name: this.attributes.userName, password: this.attributes.password, email: this.attributes.email}, function(data) {
        self.set(data);
        console.log(data);// data should be in JSON and contain model of this user
      }, 'json').error(
        console.log("error posting user")// our custom event
      );
    }
    
  });


