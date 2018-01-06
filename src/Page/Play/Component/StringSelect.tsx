import React from 'react-ex';
import Antd from 'antd-more';
import { observer, observable } from 'mobx-index';
@observer
export default class StringSelect
    extends React.Component<
    {
        defaultValue: string
        onChange: (value: string) => void
        data: string[]
    }> {
    @observable value = this.props.defaultValue;
    onClick: Antd.Menu['props']['onClick'] = (param) => {
        const key = param.key;
        const value = this.props.data[key];
        this.props.onChange(value);
        this.value = value;
    }
    render() {
        return (
            <div EClass="inline">
                <Antd.Dropdown
                    overlay={
                        (
                            <Antd.Menu onClick={this.onClick}>
                                {
                                    this.props.data.map((v, i) => {
                                        if (v === this.value) {
                                            return (<Antd.Menu.Item key={i} disabled={true}>{v === '' ? '空' : v}</Antd.Menu.Item>);
                                        } else {
                                            return (<Antd.Menu.Item key={i}>{v === '' ? '空' : v}</Antd.Menu.Item>);
                                        }
                                    })
                                }
                            </Antd.Menu>
                        )
                    }
                >
                    <div>
                        <span EClass="inline ctt minwem-6">{this.value === '' ? '空' : this.value}</span> <Antd.Icon type="down" />
                    </div>
                </Antd.Dropdown>
            </div>
        );
    }

}