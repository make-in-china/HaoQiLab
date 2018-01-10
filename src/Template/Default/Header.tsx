
import React from 'react-ex';
import Antd from 'antd-min';
import Logo from 'src/Template/Default/Logo';
import { ModelWindow } from 'src/Lib/ModelWindow';
import GlobalSkinEdit from 'src/Components/Style/GlobalSkinEdit';
import { Ref } from 'react';
import { G } from 'src/CSS/G';

const { Header } = Antd.Layout;
@React.eclass({
    github: [
        'transform:rotateZ(50deg);',
        'hem-2 lhem-2 bg-ff0 bd-bb0 pdiplr-20 fb fz-15 inline mpxr_-12 meml-4'.split(' ')
    ]
})
export default class App extends React.Component<{ page: IPage }> {
    setupModel: ModelWindow | null = null;
    onClickSetup: React.FormEventHandler<any> = (e) => {
        if (this.setupModel !== null) {
            this.setupModel.open();
        }
    }
    onRefSetup: Ref<any> = (instance) => {
        if (instance) {
            this.setupModel = new ModelWindow((<GlobalSkinEdit />), instance, 'wem-50 minhem-30 bg-gray zidx-999 shadow-1 ' + G.Class.map.frm_border);
        }
    }
    render() {
        const page = this.props.page;
        return (
            <Header style={{ zIndex: 99 }}>
                <Logo EClass="float" />
                <div EClass="floatr">
                    <div EClass="float">
                        <Antd.Menu
                            onClick={page.onMenuClick}
                            theme="dark"
                            mode="horizontal"
                            EClass="inline lhpx-63"
                            defaultSelectedKeys={[page.menu.index.toString()]}
                        >
                            {
                                page.menu.data
                                    .map((k, i) => <Antd.Menu.Item page={k[1]} key={i}>{k[0]}</Antd.Menu.Item>)
                            }
                        </Antd.Menu>
                    </div>
                    <div EClass="floatr mpxr_-50 uof">
                        <div EClass="github">
                            <a target="_blank" href="https://github.com/make-in-china/HaoQiLab">github托管</a>
                        </div>
                        <div EClass="mpxt_-64 memr-4">
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
