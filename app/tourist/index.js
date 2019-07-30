import React from 'react';
import {Tag} from 'antd';
import {Map, Marker} from 'react-bmap';
import MapInit from './mapinit';
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
import  'echarts/lib/chart/line';
import  'echarts/lib/chart/pie';

// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import './index.less';

export class Tourist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            center: {lng: 116.306857, lat: 40.012762}
        }
    }

    componentWillUnmount() {
    }

    componentDidMount() {
        this.todayOfTourist();
        this.weekOfTourist();
        this.ticketProportion();
        this.weekOfTicket();
        this.weekOfMoney();
        this.todayOfMoney();
    }

    todayOfTourist() {
        let chart = this.refs.todaytourist;
        let myChart = echarts.init(chart);

        // 绘制图表
        myChart.setOption({
            backgroundColor: '#2c343c',
            title: {
                text: '实时客流统计', textStyle: {
                    color: '#ccc'
                }
            },
            xAxis: {
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)',
                    },
                },
                axisLabel: {
                    color: 'rgba(255, 255, 255, 0.3)',
                },
                type: 'category',
                boundaryGap: false,
                data: ['8:00', '9:00', '9:00', '10:00', '11:00', '12:00', '13:00']
            },
            yAxis: {
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)',
                    },
                },
                axisLabel: {
                    color: 'rgba(255, 255, 255, 0.3)',
                },
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                areaStyle: {}
            }]
        });
    }

    weekOfTourist() {
        let chart = this.refs.weektourist;
        let myChart = echarts.init(chart);

        // 绘制图表
        myChart.setOption({
            backgroundColor: '#2c343c',
            title: {
                text: '近一周景区日客流统计', textStyle: {
                    color: '#ccc'
                }
            },
            xAxis: {
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)',
                    },
                },
                axisLabel: {
                    color: 'rgba(255, 255, 255, 0.3)',
                },
                data: ["2/20", "2/21", "2/22", "2/23", "2/24", "2/25", "2/26"]
            },
            yAxis: {
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)',
                    },
                },
                axisLabel: {
                    color: 'rgba(255, 255, 255, 0.3)',
                },
                splitLine: {show: false}  //改设置不显示坐标区域内的y轴分割线
            },
            series: [{
                name: '近一周景区日客流统计',
                type: 'bar',
                data: [1130, 1630, 1030, 1330, 973, 821, 1334],
                //设置柱子的宽度
                barWidth: 30,
                //配置样式
                itemStyle: {
                    //通常情况下：
                    normal: {
                        //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                        color: function (params) {
                            let colorList = ['rgb(164,205,238)', 'rgb(42,170,227)', 'rgb(25,46,94)', 'rgb(195,229,235)', '#495049', '#49A21D', '#A24182'];
                            return colorList[params.dataIndex];
                        }
                    }
                },
            }],
        });

    }

    ticketProportion() {
        let chart = this.refs.proportion;
        let myChart = echarts.init(chart);


        // 绘制图表
        myChart.setOption({
            backgroundColor: '#2c343c',

            title: {
                text: '今日票型分析',
                textStyle: {
                    color: '#ccc'
                }
            },

            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                    colorLightness: [0, 1]
                }
            },
            series: [
                {
                    name: '游客票类型',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: [
                        {value: 335, name: '团购'},
                        {value: 310, name: '成人票'},
                        {value: 274, name: '学生票'},
                        {value: 235, name: '年票'},
                        {value: 400, name: '同城到付'}
                    ].sort(function (a, b) {
                        return a.value - b.value;
                    }),
                    roseType: 'radius',
                    label: {
                        normal: {
                            textStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#c23531',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },

                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ]
        });
    }

    weekOfTicket() {
        let chart = this.refs.weekticket;
        let myChart = echarts.init(chart);

        // 绘制图表
        myChart.setOption({
            backgroundColor: '#2c343c',
            grid: {
                left: 50
            },
            title: {
                text: '近一周售票量统计',
                textStyle: {
                    color: '#ccc'
                }
            },
            xAxis: {
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)',
                    },
                },
                axisLabel: {
                    color: 'rgba(255, 255, 255, 0.3)',
                },
                data: ["2/20", "2/21", "2/22", "2/23", "2/24", "2/25", "2/26"]
            },
            yAxis: {
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)',
                    },
                },
                axisLabel: {
                    color: 'rgba(255, 255, 255, 0.3)',
                },
                splitLine: {show: false}  //改设置不显示坐标区域内的y轴分割线
            },
            series: [{
                name: '近一周景区日客流统计',
                type: 'bar',
                data: [730, 1230, 630, 1030, 773, 521, 1034],
                //设置柱子的宽度
                barWidth: 30,
                label: {
                    normal: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                //配置样式
                itemStyle: {
                    //通常情况下：
                    normal: {
                        //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                        color: function (params) {
                            let colorList = ['rgb(164,205,238)', 'rgb(42,170,227)', 'rgb(25,46,94)', 'rgb(195,229,235)', '#495049', '#49A21D', '#A24182'];
                            return colorList[params.dataIndex];
                        }
                    }
                },
            }],
        });

    }

    weekOfMoney() {
        let chart = this.refs.weekmoney;
        let myChart = echarts.init(chart);

        // 绘制图表
        myChart.setOption({
            backgroundColor: '#2c343c',
            grid: {
                left: 50
            },
            title: {
                text: '近一周售票额统计',
                textStyle: {
                    color: '#ccc'
                }
            },
            xAxis: {
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)',
                    },
                },
                axisLabel: {
                    color: 'rgba(255, 255, 255, 0.3)',
                },
                data: ["2/20", "2/21", "2/22", "2/23", "2/24", "2/25", "2/26"]
            },
            yAxis: {
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)',
                    },
                },
                axisLabel: {
                    color: 'rgba(255, 255, 255, 0.3)',
                },
                splitLine: {show: false}  //改设置不显示坐标区域内的y轴分割线
            },
            series: [{
                name: '近一周景区日客流统计',
                type: 'line',
                data: [730, 1230, 630, 1030, 773, 521, 1034],
                //设置柱子的宽度
                barWidth: 30,
                label: {
                    normal: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                //配置样式
                itemStyle: {
                    //通常情况下：
                    normal: {
                        //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                        color: function (params) {
                            let colorList = ['rgb(42,170,227)', 'rgb(25,46,94)', 'rgb(195,229,235)', '#495049', '#49A21D', '#A24182'];
                            return colorList[params.dataIndex];
                        }
                    }
                },
            }],
        });

    }

    todayOfMoney() {
        let chart = this.refs.todaymoney;
        let myChart = echarts.init(chart);

        // 绘制图表
        myChart.setOption({
            backgroundColor: '#2c343c',
            title: {
                text: '今日实时售票额', textStyle: {
                    color: '#ccc'
                }
            },
            xAxis: {
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)',
                    },
                },
                axisLabel: {
                    color: 'rgba(255, 255, 255, 0.3)',
                },
                type: 'category',
                boundaryGap: false,
                data: ['8:00', '9:00', '9:00', '10:00', '11:00', '12:00', '13:00']
            },
            yAxis: {
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)',
                    },
                },
                axisLabel: {
                    color: 'rgba(255, 255, 255, 0.3)',
                },
                type: 'value'
            },
            series: [{
                data: [523, 640, 755, 834, 990, 1330, 1420],
                type: 'line',
                areaStyle: {}
            }]
        });
    }

    render() {
        return (<div className="tourist">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="chart" ref="todaytourist"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="chart">
                                <Map
                                     style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}
                                     center={{lng: this.state.center.lng, lat: this.state.center.lat}} zoom="19">
                                    <MapInit/>
                                </Map>
                                <div className="total">
                                    <div className="total-header">
                                        <div>入口：<b style={{color:'#FFE424'}}>255人</b></div>
                                        <div>中庭：<b style={{color:'#FFE424'}}>653人</b></div>
                                        <div>出口：<b style={{color:'#FFE424'}}>578人</b></div>
                                    </div>
                                    <div className="total-footer">
                                        <div>当前在园人数：<Tag color="#87d068">572人</Tag></div>

                                        <div>最大承载：<b style={{color:'#FFE424'}}>5000人</b></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="chart" ref="weektourist"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="chart" ref="weekticket"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="chart" ref="weekmoney"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="chart" ref="todaymoney"></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="chart" ref="proportion"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
