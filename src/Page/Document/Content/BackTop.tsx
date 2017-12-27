
import Antd from 'antd-min';
import React from 'react-ex';
import AddEntryComponent from '../../EntryComponent';

export default class App extends React.Component {

    render() {
        return (
            <div style={{ height: 1000 }}>
                <Antd.BackTop />
                Scroll down to see the bottom-right
                <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
                button.
            </div>
        );
    }

}
AddEntryComponent('BackTop', 'Document', App);