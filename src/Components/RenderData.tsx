import React from 'react-ex';
import { observer, observable } from 'mobx-index';
@observer
export default class RenderData
    extends React.Component<{
        data: React.ReactNode
        onRaiseChange: (onChange: (data: React.ReactNode) => void) => void
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
