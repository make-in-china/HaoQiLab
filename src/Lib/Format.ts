
/* 格式化JSON源码(对象转换为JSON文本) */
export function formatJSON(obj: object, compress?: boolean/*是否为压缩模式*/) {
    const draw: string[] = [];
    formatJSONEach('', obj, true, 0, false, {
        line: compress ? '' : '\n',
        indentChar: '  ',
        nodeCount: 0,
        maxDepth: 0,
        draw: draw,
        compress: compress
    });
    let str = draw.join('')
        .replace(/",\n\s*"/g, '","')
        .replace(/\[\n\s*?("|\[)/g, '[$1')
        .replace(/("|\])\n\s*?\]/g, '$1]')
        .replace(/\[\n\s*?("|\[)/g, '[$1')
        .replace(/("|\])\n\s*?\]/g, '$1]')
        .replace(/,"(.*?)":/g, ',\n  "$1":');
    return str;
}
function formatJSONEach(name: string | number, value: any, isLast: boolean, indent: number/*缩进*/, formObj: any, setup: {
    line: string,
    indentChar: string,
    nodeCount: number,
    maxDepth: number,
    draw: string[],
    compress?: boolean
}
) {
    setup.nodeCount++;
    /*节点计数*/
    for (var i = 0, tab = ''; i < indent; i++) {
        tab += setup.indentChar; /* 缩进HTML */
    }
    tab = setup.compress ? '' : tab; /*压缩模式忽略缩进*/
    setup.maxDepth = ++indent; /*缩进递增并记录*/
    if (value && value.constructor === Array) {/*处理数组*/
        setup.draw.push(tab + (formObj ? ('"' + name + '":') : '') + '[' + setup.line); /*缩进'[' 然后换行*/
        for (let k = 0; k < value.length; k++) {
            formatJSONEach(k, value[k], k === value.length - 1, indent, false, setup);
        }
        setup.draw.push(tab + ']' + (isLast ? setup.line : (',' + setup.line))); /*缩进']'换行,若非尾元素则添加逗号*/
    } else if (value && typeof value === 'object') {/*处理对象*/
        setup.draw.push(tab + (formObj ? ('"' + name + '":') : '') + '{' + setup.line); /*缩进'{' 然后换行*/
        let len = Object.keys(value).length, j = 0;

        for (let key in value) {
            formatJSONEach(key, value[key], ++j === len, indent, true, setup);
        }
        setup.draw.push(tab + '}' + (isLast ? setup.line : (',' + setup.line))); /*缩进'}'换行,若非尾元素则添加逗号*/
    } else {
        if (typeof value === 'string') {
            value = '"' + value + '"';
        }
        setup.draw.push(tab + (formObj ? ('"' + name + '":') : '') + value + (isLast ? '' : ',') + setup.line);
    }
}