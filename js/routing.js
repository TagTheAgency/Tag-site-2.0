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
    //--------------
    // Collections
    //--------------
    app.TodoList = Backbone.Collection.extend({
      model: app.Todo,
      localStorage: new Store("backbone-todo"),
      completed: function() {
        return this.filter(function( todo ) {
          return todo.get('completed');
        });
      },
      remaining: function() {
        return this.without.apply( this, this.completed() );
      }      
    });
    // instance of the Collection
    app.todoList = new app.TodoList();


//--------------
    // Routers
    //--------------
    
    app.Router = Backbone.Router.extend({
      routes: {
        '*filter' : 'setFilter'
      },
      setFilter: function(params) {
        console.log('app.router.params = ' + params);
        window.filter = params.trim() || '';
        app.todoList.trigger('reset');
      }
    }); 
//--------------
    // Initializers
    //--------------   
    app.router = new app.Router();
    Backbone.history.start();    
    app.appView = new app.AppView(); 