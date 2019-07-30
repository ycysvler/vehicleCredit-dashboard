/**
 * Created by yanggang on 2017/3/6.
 */
import React from 'react';
import {Popover, Modal, Icon} from 'antd';
import './index.less';

export default class ParkMarker extends React.Component {
    constructor(props) {
        super(props);
        let color = props.color ? props.color : '#000';
        let deg = props.deg ? props.deg : '0';
        this.state = {color: color, deg: deg};
    }

    componentWillUnmount() {
    }

    componentDidMount() {
    }

    carSvg = () => (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="7.000000pt" height="15.000000pt"
             viewBox="0 0 141.000000 296.000000" preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,296.000000) scale(0.100000,-0.100000)" fill={this.state.color}
               stroke="none">
                <path
                    d="M540 2883 c-179 -32 -275 -56 -298 -72 -44 -31 -80 -73 -96 -112 -16 -38 -30 -257 -42 -644 -7 -211 -8 -221 -30 -248 -22 -26 -32 -57 -18 -57 3 0 14 5 25 10 19 10 19 4 19 -312 0 -513 26 -1093 52 -1178 16 -51 63 -106 111 -129 60 -29 286 -61 432 -61 82 0 167 8 265 24 164 28 204 48 254 129 27 44 31 62 49 240 15 154 20 300 24 742 2 303 8 549 11 548 4 -1 20 -5 35 -8 39 -10 35 13 -12 66 -37 43 -38 46 -40 124 -2 81 -9 187 -37 530 -17 208 -28 246 -87 306 -44 44 -82 57 -231 85 -122 23 -308 31 -386 17z m-30 -127 c0 -7 -21 -39 -47 -71 -94 -114 -223 -140 -223 -45 0 51 35 77 140 104 115 29 130 30 130 12z m475 -10 c110 -27 135 -45 135 -102 0 -47 -28 -65 -83 -52 -55 12 -93 39 -144 103 -69 84 -63 88 92 51z m-115 -527 c162 -22 270 -79 270 -143 0 -36 -127 -356 -151 -381 -18 -19 -35 -20 -293 -23 l-273 -3 -26 23 c-17 15 -44 70 -77 158 -85 224 -85 223 -70 260 19 45 105 84 218 100 48 6 94 13 102 15 31 7 237 2 300 -6z m-587 -627 c39 -81 42 -93 45 -188 4 -93 2 -104 -17 -123 -26 -26 -45 -27 -71 -1 -19 19 -20 33 -20 216 0 131 3 193 10 189 6 -4 29 -45 53 -93z m897 -96 c0 -214 -3 -226 -60 -226 -44 0 -53 26 -48 149 4 101 6 110 46 189 23 45 47 82 52 82 6 0 10 -73 10 -194z m-18 -303 c16 -14 18 -33 18 -159 0 -131 -2 -144 -19 -154 -31 -16 -69 -12 -81 9 -5 11 -10 79 -10 152 0 109 3 136 17 151 20 22 51 23 75 1z m-844 -5 c8 -8 12 -57 12 -154 0 -136 -1 -144 -22 -158 -30 -21 -44 -20 -68 4 -18 18 -20 33 -20 151 0 72 5 139 10 150 12 22 68 27 88 7z m840 -384 c21 -14 22 -22 22 -145 0 -71 -3 -129 -8 -129 -13 0 -90 164 -97 207 -5 34 -3 45 14 62 25 25 39 26 69 5z m-840 -6 c25 -25 13 -92 -33 -188 -25 -51 -47 -91 -50 -89 -2 2 -5 61 -6 131 -2 93 1 131 10 142 16 19 62 21 79 4z m711 -245 c12 -11 35 -63 57 -135 43 -136 41 -154 -25 -188 -136 -69 -489 -79 -674 -18 -113 36 -117 51 -57 208 62 161 35 150 384 150 265 0 296 -2 315 -17z"/>
            </g>
        </svg>
    );

    onClick = () => {
        this.setState({dialog_visibility: !this.state.dialog_visibility});
    }

    showInfo = (event) => {
        this.setState({dialog_visibility: false, visible: true});
    }

    handleCancel = (e) => {
        this.setState({dialog_visibility: false, visible: false});
    }

    content = (
        <div>
            <p>Content</p>
            <p>Content</p>
        </div>
    );

    render() {
        return (
            <div className="marker">
                <div className="img">
                    <Popover
                        title={null} visible={this.state.dialog_visibility}
                        content={
                            <div className="marker">
                            </div>
                        }>
                        <div className="bg">
                            <Icon style={{transform: `rotate(${this.state.deg}deg)`}} component={this.carSvg}
                                  className="icon"/>
                        </div>
                    </Popover>
                </div>

            </div>
        );
    }
}