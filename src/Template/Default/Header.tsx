
import React, { css, _ } from 'react-ex';
import Antd from 'antd-min';
import Logo from 'src/Template/Default/Logo';
import { ModelWindow } from 'src/Lib/ModelWindow';
import GlobalSkinEdit from 'src/Components/Style/GlobalSkinEdit';
import { Ref } from 'react';
import { G } from 'src/CSS/G';
import { EModelPanelAlign } from 'src/Lib/ModelPanel';
import { eClassConfig } from 'src/CSS/G.Class';
const { config, clsMap } = eClassConfig({

    github: [
        css`transform:rotateZ(55deg);`,
        _`hem-2 lhem-2 bg-ff0 bd-bb0 pdiplr-20 fb fz-15 inline mpxr_-12 meml-4`
    ]
});
const { Header } = Antd.Layout;
@React.eclass(config)

export default class App extends React.Component<{ page: IPage }> {
    setupModel: ModelWindow | null = null;
    onClickSetup: React.FormEventHandler<any> = (e) => {
        if (this.setupModel !== null) {
            this.setupModel.open(EModelPanelAlign.Left + EModelPanelAlign.Bottom);
        }
    }
    onRefSetup: Ref<any> = (instance) => {
        if (instance) {
            this.setupModel = new ModelWindow((<GlobalSkinEdit />), instance, 'wem-60 minhem-30 bg-gray zidx-999 shadow-1 ' + G.Class.map.frm_border);
        }
    }
    render() {
        const page = this.props.page;
        return (
            <Header style={{ zIndex: 99 }}>
                <Logo EClass={clsMap.float} />
                <div EClass={clsMap.floatr}>
                    <div EClass={clsMap.float}>
                        <Antd.Menu
                            onClick={page.onMenuClick}
                            theme="dark"
                            mode="horizontal"
                            EClass={[clsMap.inline, 'lhpx-63']}
                            defaultSelectedKeys={[page.menu.index.toString()]}
                        >
                            {
                                page.menu.data
                                    .map((k, i) => <Antd.Menu.Item page={k[1]} key={i}>{k[0]}</Antd.Menu.Item>)
                            }
                        </Antd.Menu>
                    </div>
                    <div EClass={[clsMap.floatr, clsMap.uof, 'mpxr_-50']}>
                        <div EClass={clsMap.github}>
                            <a target="_blank" href="https://github.com/make-in-china/HaoQiLab">github托管</a>
                        </div>
                        <div EClass={['memr-4', 'mpxt_-64']}>
                            <Antd.Button ref={this.onRefSetup} onClick={this.onClickSetup} size="small">
                                全局样式
                        </Antd.Button>
                        </div>
                    </div>
                </div >
            </Header >
        );
    }
}
