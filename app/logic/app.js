import Reflux from 'reflux';

const AppActions = Reflux.createActions([
    'alertSuccess',
    'alertError',
    'alertInfo',
    'alertWarning',
    'message'
    ]
);

const AppStore = Reflux.createStore({
    listenables: [AppActions],

    current:null,

    onAlertSuccess:function (message) {
        this.trigger('alertSuccess', message);
    },
    onAlertError:function (message) {
        this.trigger('alertError', message);
    },
    onAlertInfo:function (message) {
        this.trigger('alertInfo', message);
    },
    onAlertWarning:function (message) {
        this.trigger('alertWarning', message);
    },
    onMessage:function (message) {
        this.trigger('message',message);
    },

});


exports.AppActions = AppActions; 
exports.AppStore = AppStore;
