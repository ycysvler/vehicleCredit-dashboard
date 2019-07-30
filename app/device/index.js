import React from 'react';
import {Map, Marker} from 'react-bmap';
import {Layout} from 'antd';
import {LeftMenu} from "./leftmenu";
import MapInit from './mapinit';
import ParkMarker from './marker';
import {DeviceActions, DeviceStore} from '../logic/device';
import './index.less';

export class Device extends React.Component {
    constructor(props) {
        super(props);

        this.unsubscribe_device = DeviceStore.listen(this.onStatusChange.bind(this));

        this.state = {
            center: {lng: 116.306857, lat: 40.012762},
            question: {show: true, items: []},
            car: {show: true, items: []},
            insurance: {show: true, items: []},
            alert: {show: true, items: []},
            coffee: {show: true, items: []},
            sound: {show: true, items: []},
            service: {show: true, items: []},
            youtube: {show: true, items: []},
            laptop: {show: true, items: []},
            wc: {show: true, items: []},
            project: {show: true, items: []},
            wifi: {show: true, items: []},
            shop: {show: true, items: []},
            idcard: {show: true, items: []}
        };

    }

    componentWillUnmount() {
        this.unsubscribe_device();
    }

    componentWillMount() {
        DeviceActions.getDevices();
    }

    onStatusChange = (type, data) => {
        switch (type) {
            case "getDevices":
            case "showDevice":
                this.setState({...data.data});
                break;
        }
    };

    render() {
        let self = this;
        return (<Layout className="home">
                <Map style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}
                     center={{lng: self.state.center.lng, lat: self.state.center.lat}} zoom="17">
                    <MapInit/>
                    {
                        // 游客服务中心
                        this.state.question.show ? this.state.question.items.map((item) => {
                                return <Marker key={item.id}
                                               position={{lng: item.lng, lat: item.lat}}>
                                    <ParkMarker type="question"/>
                                </Marker>
                            }) : null
                    }
                    {
                        // 停車場
                        this.state.car.show ? this.state.car.items.map((item) => {
                                return <Marker key={item.id}
                                               position={{lng: item.lng, lat: item.lat}}>
                                    <ParkMarker type="car"/>
                                </Marker>
                            }) : null
                    }
                    {
                        // 保安
                        this.state.insurance.show ? this.state.insurance.items.map((item) => {
                                return <Marker key={item.id}
                                               position={{lng: item.lng, lat: item.lat}}>
                                    <ParkMarker type="insurance"/>
                                </Marker>
                            }) : null
                    }
                    {
                        // 報警
                        this.state.alert.show ? this.state.alert.items.map((item) => {
                                return <Marker key={item.id}
                                               position={{lng: item.lng, lat: item.lat}}>
                                    <ParkMarker type="alert"/>
                                </Marker>
                            }) : null
                    }

                    {
                        // wifi
                        this.state.wifi.show ? this.state.wifi.items.map((item) => {
                                return <Marker key={item.id}
                                               position={{lng: item.lng, lat: item.lat}}>
                                    <ParkMarker type="wifi"/>
                                </Marker>
                            }) : null
                    }
                    {
                        // 茶室/咖啡
                        this.state.coffee.show ? this.state.coffee.items.map((item) => {
                                return <Marker key={item.id}
                                               position={{lng: item.lng, lat: item.lat}}>
                                    <ParkMarker type="coffee"/>
                                </Marker>
                            }) : null
                    }
                    {
                        // 智能广播
                        this.state.sound.show ? this.state.sound.items.map((item) => {
                                return <Marker key={item.id}
                                               position={{lng: item.lng, lat: item.lat}}>
                                    <ParkMarker type="sound"/>
                                </Marker>
                            }) : null
                    }
                    {
                        // 语音导游
                        this.state.service.show ? this.state.service.items.map((item) => {
                                return <Marker key={item.id}
                                               position={{lng: item.lng, lat: item.lat}}>
                                    <ParkMarker type="service"/>
                                </Marker>
                            }) : null
                    }
                    {
                        // 大屏导览
                        this.state.youtube.show ? this.state.youtube.items.map((item) => {
                                return <Marker key={item.id}
                                               position={{lng: item.lng, lat: item.lat}}>
                                    <ParkMarker type="youtube"/>
                                </Marker>
                            }) : null
                    }
                    {
                        // 互动屏幕
                        this.state.laptop.show ? this.state.laptop.items.map((item) => {
                                return <Marker key={item.id}
                                               position={{lng: item.lng, lat: item.lat}}>
                                    <ParkMarker type="laptop"/>
                                </Marker>
                            }) : null
                    }
                    {
                        // 卫生间
                        this.state.wc.show ? this.state.wc.items.map((item) => {
                                return <Marker key={item.id}
                                               position={{lng: item.lng, lat: item.lat}}>
                                    <ParkMarker type="wc"/>
                                </Marker>
                            }) : null
                    }
                    {
                        // 景区管道
                        this.state.project.show ? this.state.project.items.map((item) => {
                                return <Marker key={item.id}
                                               position={{lng: item.lng, lat: item.lat}}>
                                    <ParkMarker type="project"/>
                                </Marker>
                            }) : null
                    }
                    {
                        // 商店
                        this.state.shop.show ? this.state.shop.items.map((item) => {
                                return <Marker key={item.id}
                                               position={{lng: item.lng, lat: item.lat}}>
                                    <ParkMarker type="shop"/>
                                </Marker>
                            }) : null
                    }
                    {
                        // 票务服务
                        this.state.idcard.show ? this.state.idcard.items.map((item) => {
                                return <Marker key={item.id}
                                               position={{lng: item.lng, lat: item.lat}}>
                                    <ParkMarker type="idcard"/>
                                </Marker>
                            }) : null
                    }
                </Map>

                <LeftMenu />

            </Layout>
        );
    }
}
