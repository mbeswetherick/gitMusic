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
      $.ajax({
        type: "POST",
        url: "http://localhost:3033/api/signup",
        data: {username: this.attributes.userName, 
                password: this.attributes.password, 
                email: this.attributes.email
              },
        success: function(data){
          self.set(data);
          console.log(data);// data should be in JSON and contain model of this user
        },
        error: function(){
          console.log("error posting user")// our custom event
        }
      });

        
    }

  });


