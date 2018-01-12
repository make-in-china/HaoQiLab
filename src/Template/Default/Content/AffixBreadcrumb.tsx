import React from 'react-ex';

import Antd from 'antd-min';
import BreadcrumbItems from './BreadcrumbItems';
import Clock from '../../../Components/Clock';
import { G } from '../../../CSS/G';
const logo = require('../../assert/logo.png');
@React.eclass({
    box: [{
        '.Affix': 'float:left;',
        '.Affix .Breadcrumb .BreadcrumbItem,.Affix .Breadcrumb .BreadcrumbItem a': React.calcStyle({ transition: 'color .3s' })
    }],
    box1: [{
        '.Affix .logo': [`background-image:url(${logo});background-size:100%;transform:rotate(180deg);`, 'wem-4 hem-4 float'.split(' ')],
        '.Affix': 'padding-left:25px;',
        '.Affix .Breadcrumb': 'float:left;margin:8px 0;',
        '.Affix .ant-affix': 'left:0 !important;height:2.5em;background-color:rgba(0,0,0,0.75);border-bottom-right-radius:1em;',
        '.Affix,.Affix .Breadcrumb, .ant-breadcrumb-separator,.Affix .Breadcrumb .BreadcrumbItem,.Affix .Breadcrumb .BreadcrumbItem a': 'color:#fff;'
    }],
    box2: [{
        ' .logo': ['uof'.split(' ')],
        '.Affix': 'padding-left:50px;',
        '.Affix .Breadcrumb': 'float:left;margin:16px 0;',
        '.Affix>div': 'padding-right:5em;'
    }],
    affix: ['uof zidx-999 inline meml-7'.split(' ')]
})
export default class AffixBreadcrumb
    extends React.Component<
    {
        page: IPage
    }
    > {

    eclassControl = new React.AsyncEClass('box', 'box2');
    eclassControl2 = new React.AsyncEClass('mdiplr-50 floatr', 'mdiptb-16');
    onChange = (affixed: boolean) => {
        this.eclassControl.setClass('box' + (affixed ? '1' : '2'));
        this.eclassControl2.setClass('mdiptb-' + (affixed ? '8' : '16'));
    }

    render() {
        return [
            (
                <div EClass={this.eclassControl} className="Affix" >
                    <Antd.Affix
                        EClass="affix"
                        onChange={this.onChange/* 切换背景颜色左右边距 */}
                    >
                        <div className="logo" />
                        <Antd.Breadcrumb separator=" - " className="Breadcrumb">
                            <BreadcrumbItems key="Breadcrumb" page={this.props.page} />
                        </Antd.Breadcrumb>
                    </Antd.Affix>
                </div>
            ), (
                <div EClass={this.eclassControl2} className={G.Class.map.clr_primary}><Clock /></div>
            )
        ];
    }

}
