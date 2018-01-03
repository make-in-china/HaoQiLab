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
        this.props.onChange(key);
        this.value = key;
    }
    render() {
        return (
            <div EClass="inline">
                <Antd.Dropdown
                    overlay={
                        (
                            <Antd.Menu onClick={this.onClick}>
                                {
                                    this.props.data.map(v => {
                                        if (v === this.value) {
                                            return (<Antd.Menu.Item key={v} disabled={true}>{v}</Antd.Menu.Item>);
                                        } else {
                                            return (<Antd.Menu.Item key={v}>{v}</Antd.Menu.Item>);
                                        }
                                    })
                                }
                            </Antd.Menu>
                        )
                    }
                >
                    <div>
                        {this.value} <Antd.Icon type="down" />
                    </div>
                </Antd.Dropdown>
            </div>
        );
    }

}