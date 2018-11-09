import React from 'react-ex';
import { observer, observable } from 'mobx-index';
@observer
export default class Animation
    extends React.Component<{
        duration?: number
        iterationCount?: number
        splitCount: number
        data: (index: number, max: number) => React.ReactNode
    }> {
    @observable index = 0;
    timerID: number;
    componentDidMount() {
        this.componentWillReceiveProps(this.props);
    }
    componentWillUnmount() {
        window.clearInterval(this.timerID);
    }
    componentWillReceiveProps(props: this['props']) {
        window.clearInterval(this.timerID);

        this.index = 0;
        let playCount = 0;
        let iterationCount = props.iterationCount !== undefined ? props.iterationCount : 1;
        let duration = props.duration !== undefined ? (props.duration < 100 ? 100 : props.duration) : 100;
        this.timerID = window.setInterval(() => {
            if (this.index < props.splitCount) {
                this.index++;
            } else {
                playCount++;
                if (iterationCount !== 0 && playCount >= iterationCount) {
                    window.clearInterval(this.timerID);
                } else {
                    this.index = 0;
                }
            }
        }, duration);
    }
    render() {
        return (this.props.data(this.index, this.props.splitCount));
    }
}
