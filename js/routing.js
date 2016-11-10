 var app = {}; // create namespace for our app

    //--------------
    // Models
    //--------------
    app.Todo = Backbone.Model.extend({
      defaults: {
        title: '',
        completed: false
    },
    toggle: function(){
        this.save({ completed: !this.get('completed')});
    }
});
//     //--------------
//     // Collections
//     //--------------
//     app.TodoList = Backbone.Collection.extend({
//       model: app.Todo,
//       localStorage: new Store("backbone-todo"),
//       completed: function() {
//         return this.filter(function( todo ) {
//           return todo.get('completed');
//         });
//       },
//       remaining: function() {
//         return this.without.apply( this, this.completed() );
//       }      
//     });
//     // instance of the Collection
//     app.todoList = new app.TodoList();


// var Books = Backbone.Collection.extend({
//   url: '/urls'
// });


//--------------
    // Routers
    //--------------
    
    app.Router = Backbone.Router.extend({
      routes: {
        'vr' : 'vr',
        'production' : 'production'
    },
    vr: function() {
        new app.vr();
    },
    production: function() {
        new app.production();
    }
      // setFilter: function(params) {
      //   console.log('app.router.params = ' + params);
      //   window.filter = params.trim() || '';
      //   app.todoList.trigger('reset');
      // }
  }); 


initializeRouter = function() {
  Backbone.history.start({ pushState: true });
  $(document).on('click', 'a:not([data-bypass])', function (evt) {

    var href = $(this).attr('href');
    var protocol = this.protocol + '//';

    if (href.slice(protocol.length) !== protocol) {
      evt.preventDefault();
      app.router.navigate(href, true);
      console.log("a clicked, default prevented");
  }
});
}

//--------------
    // Initializers
    //--------------   
    app.router = new app.Router();
    Backbone.history.start();    
    // app.appView = new app.AppView(); 


//--------------
    // test if page reloaded
    //--
    if (window.performance) {
        if(performance.navigation.type  == 1 )
        {
            console.log('page reloaded');
        } else {
            console.log('NOT reloaded');
        }
    }

// vr = Backbone.View.extend({
//   events: {
//     "click .some a": "clicked"
//   },

//   clicked: function(e){
//     e.preventDefault();
//     // do your stuff here

//   }
// });

// production = Backbone.View.extend({
//   events: {
//     "click .some a": "clicked"
//   },

//   clicked: function(e){
//     e.preventDefault();
//     // do your stuff here
//   }
// });







