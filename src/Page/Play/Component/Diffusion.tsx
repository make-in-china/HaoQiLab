
import React from 'react-ex';
import View from './DiffusionView';
export default class App
    extends React.Component<
    {
        source: number[]
        splitNumber: number
    }> {
    largeThenList: number[] = [];
    lessThenAndEqualList: number[] = [];
    destList: string[];
    static makeArrByTemplate(template: string) {
        let arr: number[] = [];
        for (let i = 0; i < template.length; i++) {
            if (template[i] === '0') {
                arr.push(Number((Math.random() * 5).toFixed(0)));
            } else {
                arr.push(Number((Math.random() * 50 + 5).toFixed(0)));
            }
        }
        return arr;
    }
    // 把00扩散开成01或10
    calc(str0: string) {

        let str = '';
        let str2 = str0;
        let index = 0;
        while (index < str2.length) {
            str = str2;
            let re1 = new RegExp('●●(' + new Array(index + 1).join('○●') + ')○○', 'g');
            let re2 = new RegExp('○○(' + new Array(index + 1).join('●○') + ')●●', 'g');
            str2 = str.replace(re1, '●○$1●○');
            if (str2 !== str) {
                this.destList.push(str2);
            }
            let str3 = str2.replace(re2, '○●$1○●');
            if (str3 !== str2) {
                this.destList.push(str3);
                str2 = str3;
            }
            index++;
        }
        return str2;
    }
    // 多次计算
    calcMain(str: string) {
        this.destList = [];
        let strDest1 = '';
        let strDest2 = str;
        while (strDest2 !== strDest1) {
            strDest1 = strDest2;
            strDest2 = this.calc(strDest2);
        }
    }
    calcStringMap(source: number[]) {
        let str = '';
        const splitNumber = this.props.splitNumber;
        for (const num of source) {
            if (num > splitNumber) {
                str += '●';
                this.largeThenList.push(num);
            } else {
                str += '○';
                this.lessThenAndEqualList.push(num);
            }
        }
        return str;
    }
    render() {

        // 这里的○○会两边扩散（原题目里的小于5并连续的数字的简化模型）
        let source = this.calcStringMap(this.props.source);
        if (this.lessThenAndEqualList.length >= this.largeThenList.length) {
            return (
                <div EClass="nowrap-chd bd-14-gray pdip-5 ladip mdip-8 rdip-5 uofauto">
                    <div>原值：{JSON.stringify(this.props.source)}</div>
                    <div>原图：{source}</div>
                    <div style={{ color: '#f00' }}>连续特异值过多，无法完全扩散</div>
                </div>
            );
        }
        this.calcMain(source);

        return (
            <div EClass="pdip-5 bd-14-gray ladip mdip-8 rdip-5 uofauto">
                <div EClass="nowrap">原值：{JSON.stringify(this.props.source)}</div>
                <View
                    source={this.props.source}
                    sourceMap={source}
                    largeThenList={this.largeThenList}
                    lessThenAndEqualList={this.lessThenAndEqualList}
                    destList={this.destList}
                />
            </div>);
    }
}