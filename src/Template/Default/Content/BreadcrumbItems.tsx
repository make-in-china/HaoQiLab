import React from 'react-ex';
import { observer, } from 'mobx-react';
import { observable } from 'mobx';
import Antd from 'antd-min';

@observer
export default class BreadcrumbItems
    extends React.Component<
    {
        page: IPage
    }
    > {
    @observable breadcrumbItems: JSX.Element[] | null = null;
    change(breadcrumbs: (string | JSX.Element)[]) {
        const page = this.props.page;
        const breadcrumbs0 = [page.menu.data[page.menu.index][0]];
        Array.prototype.push.apply(breadcrumbs0, breadcrumbs);
        this.breadcrumbItems = breadcrumbs0.map(
            (v, i) => <Antd.Breadcrumb.Item key={i} className="BreadcrumbItem">{v}</Antd.Breadcrumb.Item>
        );
    }
    constructor(props: BreadcrumbItems['props']) {
        super(props);
        const page = this.props.page;
        page.onChangeBreadcrumbs = (breadcrumbs) => {
            this.change(breadcrumbs);
        };
        this.change([]);
    }
    render() {
        return this.breadcrumbItems;
    }

}
