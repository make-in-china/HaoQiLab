import React from 'react-ex';
import PlayGround from '../../../Components/PlayGround';
import AddEntryComponent from '../../EntryComponent';
@React.eclass(
    {
        box: [
            ['pdip-10', 'ladip', 'rdip-20', 'bg-gray', 'inline'],
            {
                chd: [['mdip-5', 'pdip-5', 'rdip-5', 'bg-blue', 'f-gray', 'inline']]
            }
        ]
    })
export default class App extends React.Component {
    playGroundData = React.hookCreateElement(() => {
        return App.renderReactNode(() => (
            <div EClass="box">{/* 动态样式 */}
                <div>如果</div>
                <div>,</div>
                <div>我是DJ</div>
                <div>,</div>
                <div>你会爱我吗</div>
                <div>?</div>
            </div>
        ));
    });
    render() {
        return (
            <PlayGround
                source={this.playGroundData.source}
                sourceMaxHeight={300}
            >
                {this.playGroundData.result}
            </PlayGround>
        );
    }
}
AddEntryComponent('EClass', 'ReactEx', App);