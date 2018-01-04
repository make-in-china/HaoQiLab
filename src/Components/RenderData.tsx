import React from 'react-ex';
import { observer, observable } from 'mobx-index';
export interface OnChange {
    (data: React.ReactNode): void;
}
@observer
export default class RenderData
    extends React.Component<{
        data: React.ReactNode
        onRaiseChange: (onChange: OnChange) => void
    }> {
    @observable data = this.props.data;
    componentDidMount() {
        this.props.onRaiseChange((data) => {
            this.data = data;
        });
    }
    render() {
        return this.data;
    }
}
