import React from 'react-ex';
import * as ReactDOM from 'react-dom';
declare const require: any;
//#region x
interface NodeEx {
    parentNode: NodeEx & Node;
    prototype: {
        insertBefore2: (newNode: Node, node: Node) => void
    };
    insertBefore2: (newNode: Node, node: Node) => void;
}
// declare var Node: NodeEx & Node;
interface DocumentEx {
    getElementsByClassName(classNames: string): HTMLCollectionOf<Element & NodeEx>;
}
declare var document: DocumentEx & Document;
// Node.prototype.insertBefore2 = function (this: HTMLElement, newNode, node) {
//     let reAppend: Node[] = [];
//     let n;
//     if (newNode instanceof Text) {
//         if (newNode.data === "") {
//             return;
//         }
//     }
//     if (newNode instanceof Comment) {
//         n = node.nextSibling;
//         while (n !== null) {
//             reAppend.push(this.removeChild(n));
//             n = node.nextSibling;
//         }
//         reAppend.unshift(this.removeChild(node));
//         this.appendChild(newNode);
//         for (let i = 0; i < reAppend.length; i++) {
//             this.appendChild(reAppend[i]);
//         }
//     } else {
//         this.insertBefore( newNode, node);
//     }
// }
// function takeOutChildNodes(node: NodeEx&Node) {
//     let parent = node.parentNode;
//     if (parent == null) return 0;
//     let c = node.childNodes;
//     let i = 0;
//     for (let j = c.length - 1; j > -1; j--) {
//         parent.insertBefore2(node.removeChild(c[0]), node);
//     }
//     parent.removeChild(node);
//     return i;
// }

//#endregion
function init(name: string) {
    const reactNodes = Array.prototype.slice.call(document.getElementsByClassName('react-node'));
    const len = reactNodes.length;
    if (reactNodes !== null && len > 0) {
        for (let i = 0; i < len; i++) {
            const node = reactNodes[i];
            let theme = node.getAttribute('data-theme');
            if (theme === null) {
                theme = 'Default';
            }
            const cpt = React.createElement(require('../Page/' + name + '/App').default, {
                theme: theme,
                name: name
            });
            ReactDOM.render(cpt, node);
        }
    }
}
export default init;