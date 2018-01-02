import React from 'react-ex';
import { observer , observable } from 'mobx-index';
@observer
export default class App extends React.Component {
    @observable date = new Date();
    timerID: number;
    // constructor(props: App['props']) {
    //     super(props);
    // }
    render() {
        return this.date.toLocaleTimeString();
    }
    tick() {
        this.date = new Date();
    }
    componentDidMount() {
        this.timerID = window.setInterval(() => this.tick(), 250);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
}