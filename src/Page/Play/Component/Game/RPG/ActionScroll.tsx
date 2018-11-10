import React, { css, _ } from 'react-ex';
import { observer, observable } from 'mobx-index';
import { eClassConfig } from 'src/CSS/G.Class';
import { War } from './War';

const { config, clsMap } = eClassConfig({
    scrollBox: [css`padding:0 10px;`, {
        ' span': css`position:absolute;`
    }]

});
@React.eclass(config)
@observer
export default class ActionScroll
    extends React.Component<{
    }> {
    @observable nextTick = 0;

    actionStack: War['actionStack'];
    upDateActionStack(actionStack: War['actionStack']) {
        this.actionStack = actionStack;
        this.nextTick++;
    }
    render() {
        // tslint:disable-next-line:no-unused-expression
        this.nextTick;

        return (
            <div EClass={clsMap.scrollBox} className={this.props.className}>
                {
                    this.actionStack && this.actionStack.map(m => {
                        return (<span key={m.creatures.name} title={m.creatures.name} style={{ left: 400 * (m.nextActionPos / 1200), marginTop: (m.creatures.isTeammate ? 10 : -10) }}>
                            <img style={{ width: 20 }} src={m.creatures.picture[1]} />
                        </span>);
                    })
                }
            </div>
        );
    }
}
