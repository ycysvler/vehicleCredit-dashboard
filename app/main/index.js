import React from 'react';
import {Layout, Menu, Button,Icon,Avatar} from 'antd';
import {HashRouter as Router,Link, Switch, Route} from 'react-router-dom';
import NotFound from '../notfound';
import './main.less';
import {Device} from '../device/index';
import {Tourist} from '../tourist/index';
import {Monitor} from '../monitor/index';
import {Parking} from '../parking/index';

const SubMenu = Menu.SubMenu;
const {Header, Content, Sider} = Layout;

export default class CentrePlatform extends React.Component {
    constructor(props) {
        super(props);
        let selectKey = "";
        if(window.location.href.indexOf('device') > -1){
            selectKey = 'device';
        }
        if(window.location.href.indexOf('tourist') > -1){
            selectKey = 'tourist';
        }
        if(window.location.href.indexOf('monitor') > -1){
            selectKey = 'monitor';
        }
        if(window.location.href.indexOf('parking') > -1){
            selectKey = 'parking';
        }

        this.state = {selectKey:selectKey};
    }
    componentWillUnmount() {
    }

    render=()=> {
        return (
            <Layout className="main-root">
                <Header style={{height:64}} className="header">

                    <div className="logo">
                        <Avatar style={{marginRight: 16}} size={60}
                                                   src="./icons/icon_logo.png"/>智慧园区管理平台</div>
                    <div style={{float: 'right'}}>
                        <Layout >
                            <Content style={{background:'#001529'}}>
                                <Menu
                                    defaultSelectedKeys={[this.state.selectKey]}
                                    theme="dark"
                                    style={{flexGrow: 1, lineHeight:'62px'}}
                                    mode="horizontal"
                                >
                                    {/*<Menu.Item key="app">*/}
                                        {/*<Link to='/main/home'>景点游玩</Link>*/}
                                    {/*</Menu.Item>*/}
                                    <Menu.Item key="device">
                                        <Link to='/main/device'>景区设施</Link>
                                    </Menu.Item>
                                    <Menu.Item key="monitor">
                                        <Link to='/main/monitor'>视频监控</Link>
                                    </Menu.Item>
                                    <Menu.Item key="parking">
                                        <Link to='/main/parking'>停车场</Link>
                                    </Menu.Item>
                                    <Menu.Item key="04">
                                        <Link to='/main/business'>环境监控</Link>
                                    </Menu.Item>
                                    <Menu.Item key="tourist">
                                        <Link to='/main/tourist'>客流分析</Link>
                                    </Menu.Item>
                                    <Menu.Item key="business">
                                        <Link to='/main/business'>基础数据</Link>
                                    </Menu.Item>
                                    <Menu.Item key="07">
                                        <Link to='/main/system'>系统设置</Link>

                                    </Menu.Item>
                                </Menu>
                            </Content>
                            <Sider width={160} className="box"
                                   style={{ height: '64px', justifyContent: 'flex-end'}}>
                                <Button style={{"background": "#1890ff", "border": "none", "color":"rgba(255, 255, 255, 0.65)"}} icon="question-circle-o"
                                        size="small" className="header-help">帮助</Button>
                            </Sider>
                        </Layout>
                    </div>
                </Header>
                <Layout >
                    <Router>
                        <Switch>
                            <Route exact path="/main" component={Device}/>
                            <Route strict path="/main/device" component={Device}/>
                            <Route strict path="/main/tourist" component={Tourist}/>
                            <Route strict path="/main/monitor" component={Monitor}/>
                            <Route strict path="/main/parking" component={Parking}/>

                            <Route component={NotFound}/>
                        </Switch>
                    </Router>
                </Layout>
            </Layout>
        );
    }
}

