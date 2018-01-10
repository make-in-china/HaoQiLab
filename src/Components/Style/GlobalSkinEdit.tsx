import React from 'react-ex';
import StringSelect from 'src/Components/StringSelect';
import { G } from 'src/CSS/G';
import SkinEditBox from './SkinEditBox';
import { observer, observable } from 'src/Lib/mobx.index';
import { Antd } from 'src/Lib/antd.min';

@observer
export default class GlobalSkinEdit
    extends React.Component<{
        /* props */
    }> {
    // #region static

    // #endregion

    // #region public property
    @observable name: string = G.Class.names[0];
    @observable sync: boolean = false;
    useCount: number = document.querySelectorAll('.' + this.name).length;
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
                <div EClass="fz-16 pdip-5">
                    <span>全局样式：</span>
                    <StringSelect defaultValue={this.name} data={G.Class.names} onChange={this.classOnChange} />
                    <span EClass="mdiplr-10">已用{this.useCount}次</span>
                    <Antd.Switch
                        onChange={this.onChangeSync}
                        checkedChildren={'全局调整'}
                        unCheckedChildren={'私有调整'}
                        defaultChecked={this.sync}
                    />
                </div>
                <div EClass="mdipt-5">
                    <SkinEditBox name={this.name} sync={this.sync} info={G.Class.data[this.name]} />
                </div>
            </div>
        );
    }
    // #endregion

    // #region private methods
    private classOnChange: StringSelect['props']['onChange'] = (v) => {
        this.name = v;
        this.useCount = document.querySelectorAll('.' + this.name).length;
    }
    // #endregion
}
