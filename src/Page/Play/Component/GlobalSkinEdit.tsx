import React from 'react-ex';
import StringSelect from 'src/Page/Play/Component/StringSelect';
import { G } from '../../../CSS/G';
import SkinEditBox from 'src/Page/Play/Component/SkinEditBox';
import { observer, observable } from 'src/Lib/mobx.index';
import { ClassItem } from 'src/CSS/G.Class';
@React.eclass(/*local eclass rule */{
    box: [[]]
})
@observer
export default class GlobalSkinEdit
    extends React.Component<{
        /* props */
    }> {
    // #region static

    // #endregion

    // #region public property
    @observable info: ClassItem | undefined = G.Class.list[0];
    // #endregion

    // #region private property

    // #endregion

    // #region public methods
    render() {
        return (
            <div>
                <div EClass="fz-16 fb">
                    <span>样式：</span>
                    <StringSelect defaultValue={G.Class.list[0].name} data={G.Class.list.map(e => e.name)} onChange={this.classOnChange} />
                </div>
                {this.info && <SkinEditBox info={this.info} />}
            </div>
        );
    }
    // #endregion

    // #region private methods
    private classOnChange: StringSelect['props']['onChange'] = (v) => {
        this.info = G.Class.list.find(item => {
            if (item.name === v) {
                return true;
            }
            return false;
        });
    }
    // #endregion
}
