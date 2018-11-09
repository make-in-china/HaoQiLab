import React, { css, _ } from 'react-ex';

import Antd from 'antd-min';
import BreadcrumbItems from './BreadcrumbItems';
import Clock from '../../../Components/Clock';
import { G } from '../../../CSS/G';
const logo = require('../../assert/logo.png');
import { eClassConfig } from 'src/CSS/G.Class';
const { config, clsMap } = eClassConfig({
    box: [{
        '.Affix': css`float:left;`,
        '.Affix .Breadcrumb .BreadcrumbItem,.Affix .Breadcrumb .BreadcrumbItem a': React.calcStyle({ transition: 'color .3s' })
    }],
    box1: [{
        '.Affix .logo': [css`background-image:url(${logo});background-size:100%;transform:rotate(180deg);`, _`wem-4 hem-4 float`],
        '.Affix': css`padding-left:25px;`,
        '.Affix .Breadcrumb': css`float:left;margin:8px 0;`,
        '.Affix .ant-affix': css`left:0 !important;height:2.5em;background-color:rgba(0,0,0,0.75);border-bottom-right-radius:1em;`,
        '.Affix,.Affix .Breadcrumb, .ant-breadcrumb-separator,.Affix .Breadcrumb .BreadcrumbItem,.Affix .Breadcrumb .BreadcrumbItem a': css`color:#fff;`
    }],
    box2: [{
        ' .logo': ['uof'],
        '.Affix': css`padding-left:50px;`,
        '.Affix .Breadcrumb': css`float:left;margin:16px 0;`,
        '.Affix>div': css`padding-right:5em;`
    }],
    affix: [_`uof zidx-999 inline meml-7`]
    
});
@React.eclass(config)

export default class AffixBreadcrumb
    extends React.Component<
    {
        page: IPage
    }
    > {

    eclassControl = new React.AsyncEClass(clsMap.box, clsMap.box2);
    eclassControl2 = new React.AsyncEClass('mdiplr-50 floatr', 'mdiptb-16');
    onChange = (affixed: boolean) => {
        this.eclassControl.setClass(clsMap.box + (affixed ? '1' : '2'));
        this.eclassControl2.setClass('mdiptb-' + (affixed ? '8' : '16'));
    }

    render() {
        return [
            (
                <div EClass={this.eclassControl} className="Affix" >
                    <Antd.Affix
                        EClass={clsMap.affix}
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
