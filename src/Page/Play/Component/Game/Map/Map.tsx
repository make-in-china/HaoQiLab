import { observable, observer } from 'mobx-index';
import React, { css } from 'react-ex';
import { eClassConfig } from 'src/CSS/G.Class';
import { MapFragments } from './MapFragments';
const castle = require('./Icon/castle.png');
const mountain = require('./Icon/mountain.png');
type MapFragmentsNode = {
    x: number
    y: number
    picSrc?: string
};
const { config, clsMap } = eClassConfig({
    box: css`padding:5px;background-color:#466e9e;height:500px;border-radius: 500px;box-shadow: inset 0 0 32px rgba(0,0,0,0.5);`,
});
@React.eclass(config)
@observer
export class Map
    extends React.Component<{}> {
    @observable nextTick = 0;

    id: number;
    constructor(props: Map['props']) {
        super(props);

    }
    messageList: React.ReactNode[] = [];

    componentWillMount() {
        this.centerTop[0] = {
            x: 0, y: 0
        };
        let newNode = this.centerTop[0]!;
        newNode = this.addNode(newNode, 'top');
        newNode = this.addNode(newNode, 'top');
        newNode = this.addNode(newNode, 'rightTop');
        newNode = this.addNode(newNode, 'rightTop');
        newNode = this.addNode(newNode, 'rightBottom');
        newNode.picSrc = castle;

        newNode = this.addNode(newNode, 'rightBottom');
        newNode = this.addNode(newNode, 'bottom');
        newNode = this.addNode(newNode, 'bottom');
        newNode.picSrc = mountain;
        newNode = this.addNode(newNode, 'leftTop');
        newNode = this.addNode(newNode, 'bottom');
        newNode = this.addNode(newNode, 'rightBottom');
        newNode = this.addNode(newNode, 'leftBottom');
        newNode = this.addNode(newNode, 'bottom');
        newNode.picSrc = castle;
        newNode = this.addNode(newNode, 'bottom');

        this.allFragments = this.getAllFragments();
    }
    addNode(node: MapFragmentsNode, way: 'leftTop' | 'rightTop' | 'top' | 'bottom' | 'leftBottom' | 'rightBottom'): MapFragmentsNode {
        let newNode = {
            x: 0, y: 0
        };
        switch (way) {
            case 'leftTop':
                newNode.x = node.x - 1;
                newNode.y = node.y - (newNode.x % 2 === 0 ? 1 : 0);
                break;
            case 'rightTop':
                newNode.x = node.x + 1;
                newNode.y = node.y - (newNode.x % 2 === 0 ? 1 : 0);
                break;
            case 'top':
                newNode.x = node.x;
                newNode.y = node.y - 1;
                break;
            case 'bottom':
                newNode.x = node.x;
                newNode.y = node.y + 1;
                break;
            case 'leftBottom':
                newNode.x = node.x - 1;
                newNode.y = node.y + (newNode.x % 2);
                break;
            case 'rightBottom':
                newNode.x = node.x + 1;
                newNode.y = node.y + (newNode.x % 2);
                break;
            default:
        }
        if (newNode.x === 0) {
            // 在中线
            if (newNode.y <= 0) {
                // 在中上
                // y=0时，是数组起始点
                this.centerTop[-newNode.y] = newNode;
            } else {
                // 在中下
                // y=-1时，是数组起始点, -2时，是1，-3时，是2
                this.centerBottom[newNode.y - 1] = newNode;
            }
        } else if (newNode.x < 0) {
            // 在左
            if (newNode.y <= 0) {
                // 在左上
                // x=-1,y=0时，是数组起始点 
                let top = this.getMapFragmentsNodeArray(this.leftTop, -newNode.x - 1);
                top[-newNode.y] = newNode;
            } else {
                // 在左下
                // x=-1,y=-1时，是数组起始点 
                let top = this.getMapFragmentsNodeArray(this.leftBottom, -newNode.x - 1);
                top[newNode.y - 1] = newNode;
            }
        } else {
            // 在右
            if (newNode.y <= 0) {
                // 在右上
                // x=1,y=0时，是数组起始点 
                let top = this.getMapFragmentsNodeArray(this.rightTop, newNode.x - 1);
                top[-newNode.y] = newNode;

            } else {
                // 在右下
                // x=1,y=-1时，是数组起始点 
                let top = this.getMapFragmentsNodeArray(this.rightBottom, newNode.x - 1);
                top[newNode.y - 1] = newNode;

            }
        }
        return newNode;
    }
    getMapFragmentsNodeArray(array: (MapFragmentsNode | null)[][], x: number) {
        let arr = array[x];
        if (!arr) {
            arr = [];
            array[x] = arr;
        }
        return arr;
    }
    allFragments: MapFragmentsNode[];
    leftTop: (MapFragmentsNode)[][] = [];
    rightTop: (MapFragmentsNode)[][] = [];
    leftBottom: (MapFragmentsNode)[][] = [];
    rightBottom: (MapFragmentsNode)[][] = [];
    centerTop: (MapFragmentsNode)[] = [];
    centerBottom: (MapFragmentsNode)[] = [];
    getAllFragments() {
        let all: MapFragmentsNode[] = [];
        this.leftTop.forEach(m => {
            m.forEach(n => {
                all.push(n);
            });
        });
        this.rightTop.forEach(m => {
            m.forEach(n => {
                all.push(n);
            });
        });
        this.leftBottom.forEach(m => {
            m.forEach(n => {
                all.push(n);
            });
        });
        this.rightBottom.forEach(m => {
            m.forEach(n => {
                all.push(n);
            });
        });
        this.centerTop.forEach(m => {

            all.push(m);

        });
        this.centerBottom.forEach(m => {
            all.push(m);
        });
        return all;
    }
    render() {
        // tslint:disable-next-line:no-unused-expression
        this.nextTick;

        return (
            <div EClass={clsMap.box}>
                {
                    this.allFragments.map(m => {
                        return (<MapFragments key={m.x + ',' + m.y} x={m.x} y={m.y} picSrc={m.picSrc}/>);
                    })
                }
            </div>
        );
    }
}
