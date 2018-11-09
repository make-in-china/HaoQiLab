
import React, { css } from 'react-ex';
import CircularText from '../../Components/CircularText';
import project from '../../Project.Config';
import Animation from '../../Components/Animation';
const logo = require('../assert/logo.png');
import { eClassConfig } from 'src/CSS/G.Class';
const { config, clsMap } = eClassConfig({
    logo: [
        'f-gray fb'.split(' '),
        {
            ' .logo': [
                css`background-image:url(${logo});background-size:100%;`,
                'wem-6 hem-6 inline memt-2'.split(' ')
            ],
            ' span': [css`vertical-align:top;`, 'meml_-5 inline'.split(' ')]
        }
    ]
    
});
@React.eclass(config)
export default class Logo
    extends React.Component<{
        fill?: string
    }> {
    render() {
        return (
            <div EClass={clsMap.logo} className={this.props.className}>
                <div className="logo" />
                <span><CircularText fill={this.props.fill}>
                    <Animation
                        iterationCount={0}
                        duration={150}
                        splitCount={project.name.length * 5}
                        data={function (index: number, max: number) {
                            if (index <= project.name.length) {
                                // 右往左出现
                                return new Array(project.name.length - index + 1).join('　') + project.name.substr(0, index);
                            } else if (index > project.name.length && index <= project.name.length * 5 - project.name.length) {
                                // 当作delay
                                return project.name;
                            } else {
                                // 右往左消失
                                const count = max - index;
                                return project.name.substr(project.name.length - count, count);
                            }
                        }}
                    /></CircularText></span>
            </div>
        );
    }
}