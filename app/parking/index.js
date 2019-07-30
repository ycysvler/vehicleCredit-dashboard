import React from 'react';
import {Layout, Menu, Icon,Divider } from 'antd';
const {Header, Sider, Content} = Layout;
import {Map, Marker} from 'react-bmap';
import ParkMarker from './marker';
import MapInit from './mapinit';
export class Parking extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            parking: {
                center: {lng: 116.319159, lat: 40.006307},
                cars:[]
            }
        };
    }

    componentDidMount(){
        let self = this;
        setTimeout(()=> {
            self.setState({parking: this.parkings[1]});
        }, 300 );

    }

    parkings = [
        {
            center: {lng: 116.319159, lat: 40.006307},
            cars: [
                {
                    id: '01',
                    show: true,
                    position: {lng: 116.319513, lat: 40.006918},
                    deg: '-10',
                    color: "#000000"
                },
                {
                    id: '02',
                    show: true,
                    position: {lng: 116.319513, lat: 40.006918},
                    deg: '-10',
                    color: "#A24182"
                },
                {
                    id: '03',
                    show: true,
                    position: {lng: 116.319143, lat: 40.006225},
                    deg: '-10',
                    color: "#000000"
                },
                {
                    id: '04',
                    show: true,
                    position: {lng: 116.319453, lat: 40.006265},
                    deg: '-10',
                    color: "#1d9ed7"
                },
                {
                    id: '05',
                    show: true,
                    position: {lng: 116.319493, lat: 40.006272},
                    deg: '-10',
                    color: "#000000"
                },
                {
                    id: '06',
                    show: true,
                    position: {lng: 116.319535, lat: 40.006279},
                    deg: '-10',
                    color: "#000000"
                }
            ]
        },
        {
            center: {lng: 116.313886, lat: 40.005668},
            cars: [
                {
                    id: '01',
                    show: true,
                    position: {lng: 116.313790, lat: 40.006345},
                    deg: '75',
                    color: "#000000"
                },
                {
                    id: '02',
                    show: true,
                    position: {lng: 116.313780, lat: 40.006380},
                    deg: '75',
                    color: "#A24182"
                },
                {
                    id: '03',
                    show: true,
                    position: {lng: 116.313770, lat: 40.006420},
                    deg: '75',
                    color: "#000000"
                },
                {
                    id: '04',
                    show: true,
                    position: {lng: 116.313760, lat: 40.006460},
                    deg: '75',
                    color: "#1d9ed7"
                },
                {
                    id: '05',
                    show: true,
                    position: {lng: 116.313750, lat: 40.006500},
                    deg: '75',
                    color: "#000000"
                },
                {
                    id: '11',
                    show: true,
                    position: {lng: 116.313660, lat: 40.006325},
                    deg: '75',
                    color: "#000000"
                }
                ,
                {
                    id: '12',
                    show: true,
                    position: {lng: 116.313650, lat: 40.006360},
                    deg: '75',
                    color: "#000000"
                },
                {
                    id: '13',
                    show: true,
                    position: {lng: 116.313640, lat: 40.006400},
                    deg: '75',
                    color: "#1d9ed7"
                },
                {
                    id: '14',
                    show: true,
                    position: {lng: 116.313630, lat: 40.006440},
                    deg: '75',
                    color: "#1d9ed7"
                },
                {
                    id: '05',
                    show: true,
                    position: {lng: 116.313620, lat: 40.006480},
                    deg: '75',
                    color: "#000000"
                }
            ]
        }
    ];

    handleClick = (e) => {
        let index = e.key * 1;
        this.setState({parking: this.parkings[index]});
    }

    render() {
        return (
            <Layout>
                <Sider
                    width="300"
                    style={{background: '#fff', borderRight: 'solid 1px #e8e8e8'}}
                    trigger={null}
                >
                    <div className="logo"/>

                    <Menu mode="inline" defaultSelectedKeys={['1']}
                          onClick={this.handleClick}
                          style={{borderRight: '0px'}}>
                        <Menu.Item key="0">
                            <Icon type="bank" />
                            <span>西南门停车场（空 <b>119</b> / 共 124）</span>
                        </Menu.Item>
                        <Menu.Item key="1">
                            <Icon type="reconciliation" />
                            <span>北门停车场  （空 <b>99</b> / 共 109）</span>
                        </Menu.Item>
                    </Menu>

                </Sider>
                <Layout>
                    <Content style={{position: 'relative'}}>
                        <Map style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}
                             center={{lng: this.state.parking.center.lng, lat: this.state.parking.center.lat}}
                             zoom="19">
                            <MapInit/>
                            {
                                this.state.parking.cars.map((item) => {
                                    return <Marker key={item.id}
                                                   position={item.position}>
                                        <ParkMarker deg={item.deg} color={item.color} type="car"/>
                                    </Marker>
                                })
                            }
                        </Map>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}