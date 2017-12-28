import React from 'react-ex';
import { observer, } from 'mobx-react';
import { observable } from 'mobx';
import Antd from 'antd-min';
import BreadcrumbItems from './BreadcrumbItems';
import Clock from '../../../Components/Clock';
const logo = require('../../assert/logo.png');
@React.eclass({
    box: [{
        '.Affix': 'float:left;',
        '.Affix .Breadcrumb .BreadcrumbItem,.Affix .Breadcrumb .BreadcrumbItem a': React.calcStyle({ transition: 'color .3s' })
    }],
    box1: [{
        '.Affix .logo': [`background-image:url(${logo});background-size:100%;`, 'mdip-5 wem-3 hem-2 float'.split(' ')],
        '.Affix': 'padding-left:25px;',
        '.Affix .Breadcrumb': 'float:left;margin:8px 0;',
        '.Affix .ant-affix': 'left:0 !important;background-color:rgba(0,0,0,0.75);border-bottom-right-radius:1em;',
        '.Affix,.Affix .Breadcrumb, .ant-breadcrumb-separator,.Affix .Breadcrumb .BreadcrumbItem,.Affix .Breadcrumb .BreadcrumbItem a': 'color:#fff;'
    }],
    box2: [{
        ' .logo': ['uof'.split(' ')],
        '.Affix': 'padding-left:50px;',
        '.Affix .Breadcrumb': 'float:left;margin:16px 0;',
        '.Affix>div': 'padding-right:4em;'
    }],
    affix: ['uof zidx-999 inline meml-7'.split(' ')]
})
@observer
export default class AffixBreadcrumb
    extends React.Component<
    {
        page: IPage
    }
    > {
    @observable affixed = false;

    onChange = (affixed: boolean) => {
        this.affixed = affixed;
    }
    render() {
        return [
            (
                <div EClass={'box box' + (this.affixed ? '1' : '2')} className="Affix" >
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
                <div style={{ float: 'right', margin: this.affixed ? '8px 50px' : '16px 50px' }}><Clock /></div>
            )
        ];
    }

}
