
import React from 'react-ex';
export class Console {
    logList: React.ReactNode[] = [];
    logNormal(str: string) {
        this.logList.push(<div style={{ color: '#777198' }}>{str}</div>);
    }
    logDangerous(str: string) {
        this.logList.push(<div style={{ color: '#ff3100' }}>{str}</div>);
    }
    logGood(str: string) {
        this.logList.push(<div style={{ color: '#37a931' }}>{str}</div>);
    }
    logSuperDangerous(str: string) {
        this.logList.push(<div style={{ color: '#f4f' }}>{str}</div>);
    }
    logFreeze(str: string) {
        this.logList.push(<div style={{ color: '#0d86d0' }}>{str}</div>);
    }
}