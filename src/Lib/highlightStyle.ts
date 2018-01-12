
const re = /(\/\*.*?\*\/)/g;
export function highlightStyle(style: string) {

    style = highlightStyleLine(style);
    style = style.replace(/(\{|;)/g, '$1\n  ');
    style = style.replace(/\n\s*\n/g, '\n');
    style = style.replace(/(  \})/g, '$1\n');
    return style;
}
export function highlightStyleLine(style: string) {

    style = style.replace(/((-[a-z]+?-)?[a-z]+?\-?[a-z]+?:)/g, '<span style="color:red;">$1</span>');
    style = style.replace(re, '<span style="color:green;">$1</span>');
    return style;
}