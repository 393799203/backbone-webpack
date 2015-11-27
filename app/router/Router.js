var Backbone = require('backbone');

var Router = Backbone.Router.extend({
    routes: {
        '': 'home',
        'stat/*query': 'stat'
    },

    initialize: function() {
        S.main = null;
    },

    startRout: function(View, Model) {
        S.main && S.main.destroy && S.main.destroy();
        S.main = new View({model: new Model()});
        S.main.render(typeof query == 'undefined' ? '' : query);
    },

    home: function(query) {
        var me = this;
        require.ensure([], function(require) {
            var View = require('../view/home/Home'),
                Model = require('../model/home/Home');
            me.startRout(View, Model);
        }, 'Home');
    },
    
    stat: function(query) {
        var me = this;
        require.ensure([], function(require) {
            var View = require('../view/stat/Stat'),
                Model = require('../model/stat/Stat');
            me.startRout(View, Model);
        }, 'Stat');
    }
});

module.exports = Router;
