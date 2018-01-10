
import React from 'react-ex';

import CPNLoader from '../Components/CPNLoader';
import '../index.css';
import CSSClassRule from '../CSS/CSSClassRule';
import { G } from '../CSS/G';

const pages = require('./Pages.json');
CSSClassRule.register();
G.registerClass();
export default abstract class BaseApp
    extends React.Component
    <
    {
        theme: string
        name: string
    }
    > implements IPage {

    static router: ([string, string | JSX.Element, string])[] = pages;

    abstract noContent?: boolean;
    abstract noFooter?: boolean;
    onChangeBreadcrumbs: IPage['onChangeBreadcrumbs'];
    index: number;
    menu: HeaderProps['menu'];
    onMenuClick: HeaderProps['onMenuClick'] = (e) => {
        if (String(this.index) !== e.key) {
            window.location.href = './' + BaseApp.router[e.key][2];
        }
    }
    getComponentAsync = () => {
        const template = (window as any).Template;
        const Cpt: ThemeApp = template[`${this.props.theme}_App`] as any;
        return (
            <Cpt
                page={this}
                noContent={this.noContent}
                noFooter={this.noFooter}
            >
                {this.renderContent()}
            </Cpt>);
    }
    constructor(props: BaseApp['props']) {
        super(props);
        const len = BaseApp.router.length;
        for (let i = 0; i < len; i++) {
            const element = BaseApp.router[i];
            if (element[1] === props.name) {
                this.index = i;
                break;
            }
        }
        this.menu = {
            index: this.index,
            data: BaseApp.router
        };
    }

    render() {
        return (
            <CPNLoader
                getComponentAsync={this.getComponentAsync}
                src={`Template/${this.props.theme}/App`}
            />
        );
    }
    abstract renderContent(): React.ReactNode;
}