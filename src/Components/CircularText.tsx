import React from 'react-ex';
import PathText from 'src/Components/PathText';
export default class CircularText extends React.Component<{ text: string, fill?: string }> {
    render() {
        return (<PathText path="M 0,50 a 50,50 0 1,1 0,1 z" fill={this.props.fill} text={this.props.text} />);
    }
}
