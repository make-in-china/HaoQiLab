import Antd from 'antd-more';
import React from 'react-ex';
import entry from '../Entry';
@entry('Grid')
export default class Grid
    extends React.Component<{}, {
        gutterKey: number
        colCountKey: number
    }> {
    gutters: Record<string, number> = {};
    colCounts: Record<string, number> = {};
    constructor(props: Grid['props']) {
        super(props);
        this.state = {
            gutterKey: 1,
            colCountKey: 2,
        };
        [8, 16, 24, 32, 40, 48].forEach((value, i) => { this.gutters[i] = value; });
        [2, 3, 4, 6, 8, 12].forEach((value, i) => { this.colCounts[i] = value; });
    }
    onGutterChange = (gutterKey: number) => {
        this.setState({ gutterKey });
    }
    onColCountChange = (colCountKey: number) => {
        this.setState({ colCountKey });
    }
    render() {
        const { gutterKey, colCountKey } = this.state;
        const cols = [];
        const colCount = this.colCounts[colCountKey];
        let colCode = '';
        for (let i = 0; i < colCount; i++) {
            cols.push(
                <Antd.Col key={i.toString()} span={24 / colCount}>
                    <div />
                </Antd.Col>
            );
            colCode += `  <Col span={${24 / colCount}} />\n`;
        }
        return (
            <div className="grid-demo-playground">
                <div style={{ marginBottom: 16 }}>
                    <span style={{ marginRight: 6 }}>Gutter (px): </span>
                    <div style={{ width: '50%' }}>
                        <Antd.Slider
                            min={0}
                            max={Object.keys(this.gutters).length - 1}
                            value={gutterKey}
                            onChange={this.onGutterChange}
                            marks={this.gutters}
                            step={null}
                        />
                    </div>
                    <span style={{ marginRight: 6 }}>Column Count:</span>
                    <div style={{ width: '50%' }}>
                        <Antd.Slider
                            min={0}
                            max={Object.keys(this.colCounts).length - 1}
                            value={colCountKey}
                            onChange={this.onColCountChange}
                            marks={this.colCounts}
                            step={null}
                        />
                    </div>
                </div>
                <Antd.Row gutter={this.gutters[gutterKey]}>{cols}</Antd.Row>
                <pre>{`<Row gutter={${this.gutters[gutterKey]}}>\n${colCode}</Row>`}</pre>
            </div>);
    }
}