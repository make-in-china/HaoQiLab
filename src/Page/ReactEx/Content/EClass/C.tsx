import React from 'react-ex';
import PlayGround from 'src/Components/PlayGround';
import { eClassConfig } from 'src/CSS/G.Class';
const { config, clsMap } = eClassConfig({
    
    box: [
        ['pdip-10', 'ladip', 'rdip-20', 'bg-gray', 'inline'],
        {
            chd: [['mdip-5', 'pdip-5', 'rdip-5', 'bg-blue', 'f-gray', 'inline']]
        }
    ]
});
@React.eclass(config)

export default class C extends React.Component {
    playGroundData = React.hookCreateElement(() => {
        return this.renderReactNode(() => (
            <div EClass={clsMap.box}>
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
            <div>
                <PlayGround
                    source={this.playGroundData.source}
                    sourceMaxHeight={200}
                    cssClass={this.cssClass}
                >
                    {this.playGroundData.result}
                </PlayGround>
            </div>
        );
    }
}