import Reflux from 'reflux';
import Config from 'config';
import propx from '../http/proxy';

const DeviceActions = Reflux.createActions([
        'getDevices',
        'showDevice'
    ]
);

const DeviceStore = Reflux.createStore({
    listenables: [DeviceActions],

    state : {
        center: {lng: 116.306857, lat: 40.012762},
        question:{
            show:true,
            items:[{id:'question_001', lng: 116.318283, lat: 40.006255},{id:'question_002', lng: 116.321732, lat: 40.012293}]
        },
        car:{
            show:true,
            items:[{id:'car_001', lng: 116.31045, lat: 40.006573},{id:'car_002', lng: 116.315031, lat: 40.005495},{id:'car_003', lng: 116.320044, lat: 40.007056}]
        },
        insurance:{
            show:true,
            items:[{id:'insurance_001', lng: 116.303066, lat: 40.010552},{id:'insurance_002', lng: 116.323385, lat: 40.008272},{id:'insurance_003', lng: 116.307306, lat: 40.008383}]
        },
        alert:{
            show:true,
            items:[{id:'alert_001', lng: 116.312444, lat: 40.008977}]
        },
        coffee:{
            show:true,
            items:[{id:'coffee_001', lng: 116.316989, lat: 40.018026}]
        },
        sound:{
            show:true,
            items:[{id:'sound_001', lng: 116.307827, lat: 40.013591}]
        },
        service:{
            show:true,
            items:[{id:'service_001', lng: 116.306946, lat: 40.01268}]
        },
        youtube:{
            show:true,
            items:[{id:'youtube_001', lng: 116.314456, lat: 40.01739}]
        },
        laptop:{
            show:true,
            items:[{id:'laptop_001', lng: 116.315696, lat: 40.012666}]
        },
        wc:{
            show:true,
            items:[{id:'wc_001', lng: 116.317061, lat: 40.011022}]
        },
        project:{
            show:true,
            items:[{id:'wc_001', lng: 116.302994, lat: 40.01337}]
        },
        wifi:{
            show:true,
            items:[{id:'alert_001', lng: 116.320205, lat: 40.010939}]
        },
        shop:{
            show:true,
            items:[{id:'shop_001', lng: 116.308348, lat: 40.0104},{id:'shop_002', lng: 116.323385, lat: 40.008272},{id:'shop_003', lng: 116.307306, lat: 40.008383}]
        },
        idcard:{
            show:true,
            items:[{id:'idcard_001', lng: 116.307647, lat: 40.011215},{id:'idcard_002', lng: 116.315929, lat: 40.00555}]
        }
    },

    //获取设备列表
    onGetDevices: function () {
        let param = {};

        this.trigger('getDevices', {data: this.state, param: param});
    },

    onShowDevice:function(type, visibility){
        console.log('showDevice', type, visibility);
        this.state[type]["show"] = visibility;
        this.trigger('showDevice', {data: this.state});
    }

});


exports.DeviceActions = DeviceActions;
exports.DeviceStore = DeviceStore;
