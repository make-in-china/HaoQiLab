import React from 'react-ex';
import Antd from 'antd-min';
import Size from '../../Helper/WebComponentSize';
import AffixBreadcrumb from './Content/AffixBreadcrumb';

export default class Content
    extends React.Component
    <
    {
        page: IPage
        layout: HTMLElement | null
    }
    > {
    render() {
        let elseHeight = 192;
        // 如果屏幕宽度比内容宽度小，再减去滚动条高度
        if (this.props.layout && document.documentElement.clientWidth < this.props.layout.clientWidth) {
            elseHeight += Size.scrollBarHeight;
        }
        const minHeight = document.documentElement.clientHeight - elseHeight;
        return (
            <Antd.Layout.Content>
                <div style={{ overflow: 'hidden' }}>
                    <AffixBreadcrumb page={this.props.page} />
                </div>
                <div EClass={`pdip-12 bg-gray minhdip-${minHeight} uofauto mdiplr-50`}>
                    {this.props.children}
                </div>
            </Antd.Layout.Content>
        );
    }

}
