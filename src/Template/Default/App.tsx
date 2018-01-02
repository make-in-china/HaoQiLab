/// <reference path="../../.d.ts"/>
import React from 'react-ex';
import { observer, observable } from 'mobx-index';
import Antd from 'antd-min';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';

@observer
class App
    extends React.Component<
    {
        page: IPage
        noContent?: boolean
        noFooter?: boolean
    }
    > {
    @observable private elemLayout: HTMLElement | null = null;
    initLayoutDone = (instance: HTMLElement | null) => {
        this.elemLayout = instance;
    }
    render() {

        return [
            (
                <Antd.Layout
                    key="App"
                    ref={this.initLayoutDone}
                    className="layout"
                    style={{ minWidth: 600 }}
                >
                    <Header page={this.props.page} key="Header" />
                    {
                        this.props.noContent ?
                            this.props.children :
                            (
                                this.elemLayout !== null &&
                                <Content page={this.props.page} layout={this.elemLayout}>
                                    {this.props.children}
                                </Content>
                            )
                    }
                    {!this.props.noFooter && <Footer />}
                </Antd.Layout>
            )
            ,
            <Antd.BackTop key="backTop" />
        ];
    }
}

(function (global: any) {
    const template = global.Template || (global.Template = {});
    template.Default_App = App;
})(window);