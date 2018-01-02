import React from 'react-ex';

import { observer , observable } from 'mobx-index';
import Antd from 'antd-min';
import CPNLoader from '../../Components/CPNLoader';
@observer
export default class App
    extends React.Component<
    {
        page: IPage
        info: {}
        menuTitle: string
    }
    > {
    infos = Object.keys(this.props.info).map((k, i) => {
        return {
            name: k,
            value: this.props.info[k]
        };
    });
    @observable private index: string = '0';
    @observable private cpts: (string | null)[] = [];

    constructor(props: App['props']) {
        super(props);
        this.infos.forEach((v, i) => {
            if (i === 0) {
                this.changeBreadcrumbs(v.name);
                this.cpts.push(v.value);
            } else {
                this.cpts.push(null);
            }
        });

    }
    changeBreadcrumbs(name: string) {
        this.props.page.onChangeBreadcrumbs([
            (
                <Antd.Dropdown
                    key="BreadcrumbsDropdown"
                    overlay={
                        <Antd.Menu
                            onClick={this.onChangeDropdown}
                            defaultOpenKeys={['sub1']}
                        >
                            <Antd.Menu.SubMenu key="sub1" title={this.props.menuTitle}>
                                {this.infos.map((v, i) => {
                                    // if (v.name !== name) {
                                    return <Antd.Menu.Item key={i}><a>{v.name}</a></Antd.Menu.Item>;
                                    // }
                                    // return null;
                                })}
                            </Antd.Menu.SubMenu>
                        </Antd.Menu>
                    }
                >
                    <a className="ant-dropdown-link" href="#">
                        {name} <Antd.Icon type="down" />
                    </a>
                </Antd.Dropdown>
            )]);
    }
    onChangeDropdown: IPage['onMenuClick'] = e => {
        this.onSelectKey(e.key);
    }
    onSelect = (param: {
        key: string;
        keyPath: Array<string>;
        item: any;
        domEvent: any;
        selectedKeys: Array<string>;
    }) => {
        this.onSelectKey(param.key);
    }
    onSelectKey(activeKey: string) {
        const info = this.infos[Number(activeKey)];
        this.changeBreadcrumbs(info.name);
        this.index = activeKey;
        this.cpts[activeKey] = info.value;

        document.body.scrollTop = 0;
    }
    makeAsyncRender(v: string) {
        return function () {
            let path = v.split('/');
            let Obj = (window as any)[path[0]];
            for (var i = 1; i < path.length; i++) {
                Obj = Obj[path[i]];
            }
            return (<Obj />);

        };
    }
    render() {
        const content = this.cpts[this.index];
        return (
            <div key="mainContainer" className="ant-row">

                <div key="leftContainer" className="ant-col-4">
                    <Antd.Menu onSelect={this.onSelect} mode="inline" defaultSelectedKeys={[this.index]} defaultOpenKeys={['sub1']}>
                        <Antd.Menu.SubMenu key="sub1" title={this.props.menuTitle}>
                            {this.infos.map((v, i) => {
                                return <Antd.Menu.Item key={i}><a>{v.name}</a></Antd.Menu.Item>;
                            })}
                        </Antd.Menu.SubMenu>
                    </Antd.Menu>
                </div>
                <div key="rightContainer" className="ant-col-20" style={{ padding: 10, borderLeft: '1px solid #e9e9e9', marginLeft: -1 }}>
                    <CPNLoader getComponentAsync={this.makeAsyncRender(content)} src={content} />
                </div>
            </div>
        );
    }
}