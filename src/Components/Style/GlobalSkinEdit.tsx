import React from 'react-ex';
import StringSelect from 'src/Components/StringSelect';
import { G } from 'src/CSS/G';
import SkinEditBox from './SkinEditBox';
import { observer, observable } from 'src/Lib/mobx.index';
import { Antd } from 'src/Lib/antd.min';
import { updateLocalClass, localClassRuleData } from 'src/CSS/G.Class';
const notification = Antd.notification;
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
    @observable isUserRule = this.ruleIsUserRule();
    useCount: number = document.querySelectorAll('.' + this.name).length;
    // #endregion

    // #region private property

    // #endregion

    // #region public methods
    render() {
        return (
            <div>
                <div EClass="fz-16 pdip-5">
                    <span>全局样式：</span>
                    <StringSelect defaultValue={this.name} data={G.Class.names} onChange={this.classOnChange} />
                    <span EClass="mdiplr-10">
                        {this.useCount}个在用&nbsp;
                        {this.isUserRule ? <span EClass="f-12-gray">用户配置</span> : <span EClass="f-12-gray">默认配置</span>}
                    </span>
                    <Antd.Switch
                        onChange={this.onChangeSync}
                        checkedChildren={'全局调整'}
                        unCheckedChildren={'私有调整'}
                        defaultChecked={this.sync}
                    />
                    &nbsp;
                    <Antd.Button size="small" onClick={this.onClickClearAllRule}>清除用户规则</Antd.Button>
                </div>
                <div EClass="mdipt-5">
                    <SkinEditBox onChangeRule={this.onChangeRule} name={this.name} sync={this.sync} info={G.Class.data[this.name]} />
                </div>
            </div>
        );
    }
    // #endregion

    // #region private methods
    private ruleIsUserRule() {
        return this.name in (localClassRuleData.get() || {});
    }
    private onChangeRule: SkinEditBox['props']['onChangeRule'] = () => {
        this.isUserRule = this.ruleIsUserRule();
    }
    private classOnChange: StringSelect['props']['onChange'] = (v) => {
        this.name = v;
        this.useCount = document.querySelectorAll('.' + this.name).length;
        this.isUserRule = this.ruleIsUserRule();
    }
    private onChangeSync = (checked: boolean) => {
        this.sync = checked;
    }

    private onClickClearAllRule: React.FormEventHandler<any> = (e) => {
        localClassRuleData.set({});
        notification.open({
            message: '样式清除',
            description: `清除所有用户样式成功！`,
            btn: (
                <Antd.Button
                    type="primary"
                    size="small"
                    onClick={() => {
                        notification.close('clearAllClass');
                        updateLocalClass();
                        this.isUserRule = false;
                    }}
                >
                    刷新页面样式
                </Antd.Button>
            ),
            key: 'clearAllClass',
            onClose: close,
        });
    }
    // #endregion
}
