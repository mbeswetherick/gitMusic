// js/models/todo.js

  var app = app || {};

  // Todo Model
  // ----------
  // Our basic **Todo** model has `title`, `order`, and `completed` attributes.

  var User = Backbone.Model.extend({

    // Default attributes ensure that each todo created has `title` and `completed` keys.
    defaults: {
      name: '',
      completed: false
    },

    initialize: function(){
      console.log('fuck wit me');
    },

    // Toggle the `completed` state of this todo item.
    toggle: function() {
      this.save({
        completed: !this.get('completed')
      });
    }
  });

  var UserSignup = Backbone.Model.extend({
    defaults: {
        username: "",
        password: "",
        email: ""
    },
    url:"api/signup",
    postlogin: function(name, password, email) {
      var self = this;
      console.log(name, password, email);
      $.post("api/signup", {name: name, password: password, email: email}, function(data) {
        self.set(data);
        console.log(data);// data should be in JSON and contain model of this user
        }, 'json').error(
      console.log("error posting user")// our custom event
      );
    }
  });

app.User = new User();
app.UserSignup = new UserSignup();