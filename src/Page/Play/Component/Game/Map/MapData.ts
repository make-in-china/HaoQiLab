
export type MapFragmentsNode = {
    x: number
    y: number
    picSrc?: string
};
enum MapNodeWay {
    top = 0,
    bottom = 1,
    leftTop = 2,
    rightTop = 3,
    leftBottom = 4,
    rightBottom = 5
}
export class MapData {
    private all: MapFragmentsNode[] = [];
    private leftTop: MapFragmentsNode[][] = [];
    private rightTop: MapFragmentsNode[][] = [];
    private leftBottom: MapFragmentsNode[][] = [];
    private rightBottom: MapFragmentsNode[][] = [];
    private centerTop: MapFragmentsNode[] = [];
    private centerBottom: MapFragmentsNode[] = [];

    get root() {
        return this.centerTop[0];
    }
    constructor() {
        this.centerTop[0] = {
            x: 0, y: 0
        };
        this.all.push(this.centerTop[0]);
    }
    private getRandom<T>(arr: T[]) {
        const len = arr.length;
        const idx = (Math.random() * len) | 0;
        return arr[idx];
    }

    getRandomNode(): MapFragmentsNode {
        return this.getRandom(this.all);
    }
    addRandomNode(): MapFragmentsNode {
        const randomNode = this.getRandomNode();
        // 取0-5
        const way = (Math.random() * 6) | 0;
        let newNode: MapFragmentsNode | undefined;
        while (!newNode) {
            newNode = this.addNodeIfEmpty(randomNode, way);
        }
        return newNode;
    }
    getXYByWay(node: MapFragmentsNode, way: MapNodeWay) {
        let x: number;
        let y: number;
        if (node === undefined) {
            debugger;
        }
        switch (way) {
            case MapNodeWay.leftTop:
                x = node.x - 1;
                y = node.y - (x % 2 === 0 ? 1 : 0);
                break;
            case MapNodeWay.rightTop:
                x = node.x + 1;
                y = node.y - (x % 2 === 0 ? 1 : 0);
                break;
            case MapNodeWay.top:
                x = node.x;
                y = node.y - 1;
                break;
            case MapNodeWay.bottom:
                x = node.x;
                y = node.y + 1;
                break;
            case MapNodeWay.leftBottom:
                x = node.x - 1;
                y = node.y + (x % 2);
                break;
            case MapNodeWay.rightBottom:
                x = node.x + 1;
                y = node.y + (x % 2);
                break;
            default:
        }
        return { x: x!, y: y! };
    }
    addNodeIfEmpty(node: MapFragmentsNode, way: MapNodeWay): MapFragmentsNode {
        let { x, y } = this.getXYByWay(node, way);
        let newNode = {
            x, y
        };

        if (newNode.x === 0) {
            // 在中线
            if (newNode.y <= 0) {
                // 在中上
                // y=0时，是数组起始点
                if (!this.centerTop[-newNode.y]) {
                    this.centerTop[-newNode.y] = newNode;
                    this.all.push(newNode);
                }
            } else {
                // 在中下
                // y=-1时，是数组起始点, -2时，是1，-3时，是2
                if (!this.centerBottom[newNode.y - 1]) {
                    this.centerBottom[newNode.y - 1] = newNode;
                    this.all.push(newNode);
                }
            }
        } else if (newNode.x < 0) {
            // 在左
            if (newNode.y <= 0) {
                // 在左上
                // x=-1,y=0时，是数组起始点 
                let top = this.getMapFragmentsNodeArray(this.leftTop, -newNode.x - 1);
                if (!top[-newNode.y]) {
                    top[-newNode.y] = newNode;
                    this.all.push(newNode);
                }
            } else {
                // 在左下
                // x=-1,y=-1时，是数组起始点 
                let top = this.getMapFragmentsNodeArray(this.leftBottom, -newNode.x - 1);
                if (!top[newNode.y - 1]) {
                    top[newNode.y - 1] = newNode;
                    this.all.push(newNode);
                }
            }
        } else {
            // 在右
            if (newNode.y <= 0) {
                // 在右上
                // x=1,y=0时，是数组起始点 
                let top = this.getMapFragmentsNodeArray(this.rightTop, newNode.x - 1);
                if (!top[-newNode.y]) {
                    top[-newNode.y] = newNode;
                    this.all.push(newNode);
                }

            } else {
                // 在右下
                // x=1,y=-1时，是数组起始点 
                let top = this.getMapFragmentsNodeArray(this.rightBottom, newNode.x - 1);
                if (!top[newNode.y - 1]) {
                    top[newNode.y - 1] = newNode;
                    this.all.push(newNode);
                }

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

    getAllFragments() {
        return this.all.slice();
    }

}