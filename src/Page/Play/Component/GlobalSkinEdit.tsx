import React from 'react-ex';
import StringSelect from 'src/Page/Play/Component/StringSelect';
import { G } from '../../../CSS/G';
import SkinEditBox from 'src/Page/Play/Component/SkinEditBox';
import { observer, observable } from 'src/Lib/mobx.index';
import { ClassItem } from 'src/CSS/G.Class';
import { Antd } from 'src/Lib/antd.more';

@observer
export default class GlobalSkinEdit
    extends React.Component<{
        /* props */
    }> {
    // #region static

    // #endregion

    // #region public property
    @observable info: ClassItem | undefined = G.Class.list[0];
    @observable sync: boolean = true;
    useCount: number = document.querySelectorAll("." + this.info!.name).length;
    // #endregion

    // #region private property
    onChangeSync = (checked: boolean) => {
        this.sync = checked;
    }
    // #endregion

    // #region public methods
    render() {
        return (
            <div>
                <div EClass="fz-16 fb">
                    <span>全局样式：</span>
                    <StringSelect defaultValue={G.Class.list[0].name} data={G.Class.list.map(e => e.name)} onChange={this.classOnChange} />
                    <span EClass="mdiplr-10">×{this.useCount}</span>
                    <Antd.Switch
                        onChange={this.onChangeSync}
                        checkedChildren={' 同 步 '}
                        unCheckedChildren={'不同步'}
                        defaultChecked={this.sync}
                    />
                </div>
                {this.info && <SkinEditBox sync={this.sync} info={this.info} />}
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
        this.useCount = document.querySelectorAll("." + this.info!.name).length;
    }
    // #endregion
}
