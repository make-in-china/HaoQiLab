
import React from 'react-ex';
export class Console {
    logList: React.ReactNode[] = [];
    logNormal(str: string) {
        this.logList.push(<div>{str}</div>);
    }
    logDangerous(str: string) {
        this.logList.push(<div style={{ color: '#f00' }}>{str}</div>);
    }
    logGood(str: string) {
        this.logList.push(<div style={{ color: '#37a931' }}>{str}</div>);
    }
    logSuperDangerous(str: string) {
        this.logList.push(<div style={{ color: '#f4f' }}>{str}</div>);
    }
    logFreeze(str: string) {
        this.logList.push(<div style={{ color: '#04f' }}>{str}</div>);
    }
}