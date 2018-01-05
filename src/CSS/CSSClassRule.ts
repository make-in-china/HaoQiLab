import { cssClassNS, getColorByArea } from './CSSClass';

const px1 = 0.0625;
const w = {
    wkbox: 'display:-webkit-box;',
    wkboxh: 'display:-webkit-box;-webkit-box-orient:horizontal;'
};
const rule1 = {
    // region 2017年12月28日, PM 02:34:32
    nowrap: `white-space:nowrap;`,
    // endregion
    // region 2017年12月13日, PM 02:02:53
    uofauto: `overflow:auto;`,
    clr: `clear:both`,
    // endregion
    uof: `overflow:hidden;`,
    uof_x: `overflow-x:hidden;`,
    uof_y: `overflow-y:hidden;`,
    line(idx: number) { return `-webkit-line-clamp:${idx};`; },
    box(idx: number) { return w.wkbox; },
    ub: `display:-webkit-box !important;display:box !important;position:relative;`,
    ub_rev: `-webkit-box-direction:reverse;box-direction:reverse;`,
    ub_ver: `-webkit-box-orient:vertical;box-orient:vertical;`,
    ub_f(idx: number) { return `position:relative;-webkit-box-flex:${idx};box-flex:${idx};`; },
    ub_img: `-webkit-background-size:contain;background-size:contain;background-repeat no-repeat;background-position:center;`,
    ub_img1: `-webkit-background-size:cover;background-size:cover;background-repeat:no-repeat;background-position:center;`,
    ub_img2: `background-repeat:repeat-x;background-size:auto 100%;`,
    ub_img3: `background-repeat:repeat-y;background-size:100% auto;`,
    ub_img4: `-webkit-background-size:100% auto;background-size:100% auto;background-repeat:no-repeat;background-position:center;`,
    ub_img5: `-webkit-background-size:auto 100%;background-size:auto 100%;background-repeat:no-repeat;background-position:center;`,
    ub_img6: `background-repeat:no-repeat;background-position:center;`,
    ub_img7: `-webkit-background-size:100% 100%;background-size:100% 100%;background-repeat:no-repeat;background-position:center;`,

    noevent: `pointer-events:none;`,
    ub_ctw: `${w.wkboxh}-webkit-box-pack:center;`,
    ub_cth: `${w.wkbox}-webkit-box-align:center;`,
    ub_rightbottom: `${w.wkboxh}-webkit-box-pack:end;-webkit-box-align:end;`,
    ub_righttop: `${w.wkboxh}-webkit-box-pack:end;-webkit-box-align:start;`,
    ub_leftbottom: `${w.wkboxh}-webkit-box-pack:start;-webkit-box-align:end;`,
    ub_lefttop: `${w.wkboxh}-webkit-box-pack:start;-webkit-box-align:start;`,
    ub_bottom: `${w.wkboxh}-webkit-box-pack:center;-webkit-box-align:end;`,
    ub_right: `${w.wkboxh}-webkit-box-pack:end;-webkit-box-align:center;`,
    ub_top: `${w.wkboxh}-webkit-box-pack:center;-webkit-box-align:start;`,
    ub_left: `${w.wkboxh}-webkit-box-pack:start;-webkit-box-align:center;`,

    ctabs: `left:50%;top:50%;-webkit-transform:translate(-50%,-50%);`,
    ub_ct: `${w.wkboxh}-webkit-box-pack:center;-webkit-box-align:center;`,
    ctt: `text-align:center;`,
    ctm(idx: number) { return `margin:0 auto;`; },
    noselect: `-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;`,

    scroll: `overflow:scroll;-webkit-overflow-scrolling:touch;`,
    scrollx: `overflow-x:scroll;-webkit-overflow-scrolling:touch;`,
    scrolly: `overflow-y:scroll;-webkit-overflow-scrolling:touch;`,
    nobg: `background:none;`,
    ltspaem(idx: number) { return `letter-spacing:${idx}em;white-space:nowrap;`; },
    ltspaem_(idx: number) { return `letter-spacing:-${idx}em;white-space:nowrap;`; },
    ltspadip(idx: number) { return `letter-spacing:${idx! * px1}em;white-space:nowrap;`; },
    ltspadip_(idx: number) { return `letter-spacing:-${idx! * px1}em;white-space:nowrap;`; },
    w(idx: number) { return `width:${idx}%;`; },
    h(idx: number) { return `height:${idx}%;`; },
    wem(idx: number) { return `width:${idx}em;`; },
    hem(idx: number) { return `height:${idx}em;`; },
    wdip(idx: number) { return `width:${idx! * px1}em;`; },
    hdip(idx: number) { return `height:${idx! * px1}em;`; },
    minwem(idx: number) { return `min-width:${idx}em;`; },
    minhem(idx: number) { return `min-height:${idx}em;`; },
    minwdip(idx: number) { return `min-width:${idx! * px1}em;`; },
    minhdip(idx: number) { return `min-height:${idx! * px1}em;`; },
    maxwem(idx: number) { return `max-width:${idx}em;`; },
    maxhem(idx: number) { return `max-height:${idx}em;`; },
    maxwdip(idx: number) { return `max-width:${idx! * px1}em;`; },
    maxhdip(idx: number) { return `max-height:${idx! * px1}em;`; },

    pem(idx: number) { return `padding:${idx}em;`; },
    peml(idx: number) { return `padding-left:${idx}em;`; },
    pemr(idx: number) { return `padding-right:${idx}em;`; },
    pemt(idx: number) { return `padding-top:${idx}em;`; },
    pemb(idx: number) { return `padding-bottom:${idx}em;`; },
    pemlr(this: any, idx: number) { return rule1.peml(idx) + rule1.pemr(idx); },
    pemtb(this: any, idx: number) { return rule1.pemt(idx) + rule1.pemb(idx); },

    pdip(idx: number) { return `padding:${idx! * px1}em;`; },
    pdipl(idx: number) { return `padding-left:${idx! * px1}em;`; },
    pdipr(idx: number) { return `padding-right:${idx! * px1}em;`; },
    pdipt(idx: number) { return `padding-top:${idx! * px1}em;`; },
    pdipb(idx: number) { return `padding-bottom:${idx! * px1}em;`; },
    pdiplr(idx: number) { return rule1.pdipl(idx) + rule1.pdipr(idx); },
    pdiptb(idx: number) { return rule1.pdipt(idx) + rule1.pdipb(idx); },

    mem(idx: number) { return `margin:${idx}em;`; },
    meml(idx: number) { return `margin-left:${idx}em;`; },
    memr(idx: number) { return `margin-right:${idx}em;`; },
    memt(idx: number) { return `margin-top:${idx}em;`; },
    memb(idx: number) { return `margin-bottom:${idx}em;`; },
    memlr(idx: number) { return rule1.meml(idx) + rule1.memr(idx); },
    memtb(idx: number) { return rule1.memt(idx) + rule1.memb(idx); },

    mem_(idx: number) { return `margin:-${idx}em;`; },
    meml_(idx: number) { return `margin-left:-${idx}em;`; },
    memr_(idx: number) { return `margin-right:-${idx}em;`; },
    memt_(idx: number) { return `margin-top:-${idx}em;`; },
    memb_(idx: number) { return `margin-bottom:-${idx}em;`; },
    memlr_(idx: number) { return rule1.meml_(idx) + rule1.memr_(idx); },
    memtb_(idx: number) { return rule1.memt_(idx) + rule1.memb_(idx); },

    mdip(idx: number) { return `margin:${idx! * px1}em;`; },
    mdipl(idx: number) { return `margin-left:${idx! * px1}em;`; },
    mdipr(idx: number) { return `margin-right:${idx! * px1}em;`; },
    mdipt(idx: number) { return `margin-top:${idx! * px1}em;`; },
    mdipb(idx: number) { return `margin-bottom:${idx! * px1}em;`; },
    mdiplr(idx: number) { return rule1.mdipl(idx) + rule1.mdipr(idx); },
    mdiptb(idx: number) { return rule1.mdipt(idx) + rule1.mdipb(idx); },

    mdip_(idx: number) { return `margin:-${idx! * px1}em;`; },
    mdipl_(idx: number) { return `margin-left:-${idx! * px1}em;`; },
    mdipr_(idx: number) { return `margin-right:-${idx! * px1}em;`; },
    mdipt_(idx: number) { return `margin-top:-${idx! * px1}em;`; },
    mdipb_(idx: number) { return `margin-bottom:-${idx! * px1}em;`; },
    mdiplr_(idx: number) { return rule1.mdipl_(idx) + rule1.mdipr_(idx); },
    mdiptb_(idx: number) { return rule1.mdipt_(idx) + rule1.mdipb_(idx); },

    tl_under: `text-decoration:undeline;`,
    tl_through: `text-decoration:line-through;`,

    relative: `position:relative;`,
    fz(idx: number = 1) { return `font-size:${idx! * px1}em;`; },
    fb: `font-weight:bold;`,

    left(idx: number = 0) { return `left:${idx! * px1}em;`; },
    right(idx: number = 0) { return `right:${idx! * px1}em;`; },
    top(idx: number = 0) { return `top:${idx! * px1}em;`; },
    bottom(idx: number = 0) { return `bottom:${idx! * px1}em;`; },
    leftright(idx: number = 0) { return rule1.left(idx) + rule1.right(idx); },
    topbottom(idx: number = 0) { return rule1.top(idx) + rule1.bottom(idx); },
    lrtb(idx: number = 0) { return rule1.leftright(idx) + rule1.topbottom(idx); },

    left_(idx: number = 0) { return `left:-${idx! * px1}em;`; },
    right_(idx: number = 0) { return `right:-${idx! * px1}em;`; },
    top_(idx: number = 0) { return `top:-${idx! * px1}em;`; },
    bottom_(idx: number = 0) { return `bottom:-${idx! * px1}em;`; },
    leftright_(idx: number = 0) { return rule1.left_(idx) + rule1.right_(idx); },
    topbottom_(idx: number = 0) { return rule1.top_(idx) + rule1.bottom_(idx); },
    lrtb_(idx: number = 0) { return rule1.leftright_(idx) + rule1.topbottom_(idx); },

    leftem(idx: number = 0) { return `left:${idx}em;`; },
    rightem(idx: number = 0) { return `right:${idx}em;`; },
    topem(idx: number = 0) { return `top:${idx}em;`; },
    bottomem(idx: number = 0) { return `bottom:${idx}em;`; },
    leftrightem(idx: number = 0) { return rule1.leftem(idx) + rule1.rightem(idx); },
    topbottomem(idx: number = 0) { return rule1.topem(idx) + rule1.bottomem(idx); },
    lrtbem(idx: number = 0) { return rule1.leftrightem(idx) + rule1.topbottomem(idx); },

    leftem_(idx: number = 0) { return `left:-${idx}em;`; },
    rightem_(idx: number = 0) { return `right:-${idx}em;`; },
    topem_(idx: number = 0) { return `top:-${idx}em;`; },
    bottomem_(idx: number = 0) { return `bottom:-${idx}em;`; },
    leftrightem_(idx: number = 0) { return rule1.leftem_(idx) + rule1.rightem_(idx); },
    topbottomem_(idx: number = 0) { return rule1.topem_(idx) + rule1.bottomem_(idx); },
    lrtbem_(idx: number = 0) { return rule1.leftrightem_(idx) + rule1.topbottomem_(idx); },

    // @ts-ignore
    full() { return rule2.abs + rule1.lrtb(0); },

    op(idx: number) { return `opacity:${idx! * 0.1};`; },

    zidx(idx: number) { return `z-index:${idx};`; },

    lh(idx: number) { return `line-height:${idx}%;`; },
    lhem(idx: number) { return `line-height:${idx}em;`; },
    lhdip(idx: number) { return `line-height:${idx! * px1}em;`; },

    tiem(idx: number) { return `text-indent:${idx}em;`; },
    tidip(idx: number) { return `text-indent:${idx! * px1}em;`; },

    alignTop: 'vertical-align:top;',

    inline: `display:inline-block;`,
    pointer: `cursor:pointer;`,
    attrtext: `content: attr(Text);`,

    float: `float:left;`,
    floatl: `float:left;`,
    // region 2017年12月28日, AM 08:41:22
    floatr: `float:right;`,
    // endregion

    shadowless: `-webkit-box-shadow: inset 0 0 1px #000,.125em .125em 1em rgba(0,0,0,.2);box-shadow:inset 0 0 1px #000,.125em .125em 1em rgba(0,0,0,.2);`,
    shadowless2: `-webkit-box-shadow: .125em .125em 1em rgba(0,0,0,.2);box-shadow:.125em .125em 1em rgba(0,0,0,.2);`,
    // border
    llpx(idx: number = 1, moreInfo: string = 'solid') { return `border-left:${idx}px #808080 ${moreInfo};`; },
    lrpx(idx: number = 1, moreInfo: string = 'solid') { return `border-right:${idx}px #808080 ${moreInfo};`; },
    ltpx(idx: number = 1, moreInfo: string = 'solid') { return `border-top:${idx}px #808080 ${moreInfo};`; },
    lbpx(idx: number = 1, moreInfo: string = 'solid') { return `border-bottom:${idx}px #808080 ${moreInfo};`; },
    llrpx(idx: number, moreInfo: string) { return rule1.llpx(idx, moreInfo) + rule1.lrpx(idx, moreInfo); },
    ltbpx(idx: number, moreInfo: string) { return rule1.ltpx(idx, moreInfo) + rule1.lbpx(idx, moreInfo); },
    lapx(idx: number = 1, moreInfo: string = 'solid') { return `border:${idx}px #808080 ${moreInfo};`; },

    lldip(idx: number = 1, moreInfo: string = 'solid') { return `border-left:${idx! * px1}em #808080 ${moreInfo};`; },
    lrdip(idx: number = 1, moreInfo: string = 'solid') { return `border-right:${idx! * px1}em #808080 ${moreInfo};`; },
    ltdip(idx: number = 1, moreInfo: string = 'solid') { return `border-top:${idx! * px1}em #808080 ${moreInfo};`; },
    lbdip(idx: number = 1, moreInfo: string = 'solid') { return `border-bottom:${idx! * px1}em #808080 ${moreInfo};`; },
    llrdip(idx: number, moreInfo: string) { return rule1.llpx(idx, moreInfo) + rule1.lrpx(idx, moreInfo); },
    ltbdip(idx: number, moreInfo: string) { return rule1.ltpx(idx, moreInfo) + rule1.lbpx(idx, moreInfo); },
    ladip(idx: number = 1, moreInfo: string = 'solid') { return `border:${idx! * px1}em #808080 ${moreInfo};`; },

    bdw(idx: number) { return `border-width:${idx}%;`; },
    bdt(idx: number) { return `border-top-width:${idx}%;`; },
    bdb(idx: number) { return `border-bottom-width:${idx}%;`; },
    bdl(idx: number) { return `border-left-width:${idx}%;`; },
    bdr(idx: number) { return `border-right-width:${idx}%;`; },
    bdwdip(idx: number) { return `border-width:${idx! * px1}em;`; },
    bdwem(idx: number) { return `border-width:${idx}em;`; },

    bds(idx: number, moreInfo: string) { return `border-style:${moreInfo};`; },
    bdsl(idx: number, moreInfo: string) { return `border-left-style:${moreInfo};`; },
    bdsr(idx: number, moreInfo: string) { return `border-right-style:${moreInfo};`; },
    bdst(idx: number, moreInfo: string) { return `border-top-style:${moreInfo};`; },
    bdsb(idx: number, moreInfo: string) { return `border-bottom-style:${moreInfo};`; },
    bdslr(idx: number, moreInfo: string) { return rule1.bdsl(idx, moreInfo) + rule1.bdsr(idx, moreInfo); },
    bdstb(idx: number, moreInfo: string) { return rule1.bdst(idx, moreInfo) + rule1.bdsb(idx, moreInfo); },

    bdbox: `box-sizing:border-box;`,

    rdip(idx: number) { idx = idx! * px1; return `-webkit-border-radius:${idx}em;border-radius:${idx}em;`; },
    rem(idx: number) { return `-webkit-border-radius:${idx}em;border-radius:${idx}em;`; },

    remlt(idx: number) { return `-webkit-border-top-left-radius:${idx}em;border-top-left-radius:${idx}em;`; },
    remrt(idx: number) { return `-webkit-border-top-right-radius:${idx}em;border-top-right-radius:${idx}em;`; },

    remlb(idx: number) { return `-webkit-border-bottom-left-radius:${idx}em;border-bottom-left-radius:${idx}em;`; },
    remrb(idx: number) { return `-webkit-border-bottom-right-radius:${idx}em;border-bottom-right-radius:${idx}em;`; },

    remt(idx: number) { return rule1.remlt(idx) + rule1.remrt(idx); },
    remb(idx: number) { return rule1.remlb(idx) + rule1.remrb(idx); },

    reml(idx: number) { return rule1.remlt(idx) + rule1.remlb(idx); },
    remr(idx: number) { return rule1.remrt(idx) + rule1.remrb(idx); },

    rdiplt(idx: number) { return rule1.remlt(idx! * px1); },
    rdiprt(idx: number) { return rule1.remrt(idx! * px1); },

    rdiplb(idx: number) { return rule1.remlb(idx! * px1); },
    rdiprb(idx: number) { return rule1.remrb(idx! * px1); },

    rdipt(idx: number) { return rule1.rdiplt(idx) + rule1.rdiprt(idx); },
    rdipb(idx: number) { return rule1.rdiplb(idx) + rule1.rdiprb(idx); },

    rdipl(idx: number) { return rule1.rdiplt(idx) + rule1.rdiplb(idx); },
    rdipr(idx: number) { return rule1.rdiprt(idx) + rule1.rdiprb(idx); },

    // 锁定后缀系列
    click2: [/* "color:#000;",  */{
        bfac(): string { return `content:" ";background-color: rgba(0,0,0,0.1);` + rule1.full() + rule1.pointer; },
    }]
    // ['click2-in']: {
    //     inbfac(this: any) { return rule1.click2.bfac() },
    // }
};

/* 覆盖rule1 */
const rule2 = {
    uhide: `display:none !important;`,
    abs: `position:absolute;`,

    // 颜色系列
    bg(idx: number, moreInfo: string) { return `background-color:${getColorByEClass(idx, moreInfo!)};`; },
    bd(idx: number, moreInfo: string) { return `border-color:${getColorByEClass(idx, moreInfo!)};`; },
    f(idx: number, moreInfo: string) { return `color:${getColorByEClass(idx, moreInfo!)};`; },

    shadow(idx: number, moreInfo?: string) {
        let color: string;
        if (moreInfo) {
            switch (moreInfo.length) {
                case 3:
                    color = '#' + moreInfo[0] + moreInfo[0] + moreInfo[1] + moreInfo[1] + moreInfo[2] + moreInfo[2];
                    break;
                case 6:
                    color = '#' + moreInfo;
                    break;
                case 8:
                    let alpha = parseInt(moreInfo.substr(0, 2), 16) / 256;
                    let red = parseInt(moreInfo.substr(2, 2), 16);
                    let green = parseInt(moreInfo.substr(4, 2), 16);
                    let blue = parseInt(moreInfo.substr(6, 2), 16);
                    color = `rgba(${red},${green},${blue},${alpha})`;
                    break;
                default:
                    color = 'rgba(0,0,0,0.5)';
            }
        } else {
            color = 'rgba(0,0,0,0.5)';
        }
        const v = `0em 0em ${idx / 2 + 0.25}em ${idx * px1}em ${color}`;
        return `-webkit-box-shadow:${v};box-shadow:${v};`;
    },
};

// function getColorRGBA(color1: string, color2: string, index: number, max: number): string {
//     const color1Int = Number('0x' + color1);
//     const color2Int = Number('0x' + color2);
//     const persent = index / max;

//     const color1AlphaInt = 0xFF000000 & color1Int;
//     const color1RedInt = 0x00FF0000 & color1Int;
//     const color1GreenInt = 0x0000FF00 & color1Int;
//     const color1BlueInt = 0x000000FF & color1Int;

//     const color2AlphaInt = 0xFF000000 & color2Int;
//     const color2RedInt = 0xFF0000 & color2Int;
//     const color2GreenInt = 0xFF00 & color2Int;
//     const color2BlueInt = 0xFF & color2Int;

//     let color3AlphaInt = ((color2AlphaInt - color1AlphaInt) + color1AlphaInt) * persent / 0x1000000;
//     color3AlphaInt &= 0xff;
//     let color3RedInt = ((color2RedInt - color1RedInt) * persent + color1RedInt) / 0x10000;
//     color3RedInt &= 0xff;
//     let color3GreenInt = ((color2GreenInt - color1GreenInt) * persent + color1GreenInt) / 0x100;
//     color3GreenInt &= 0xff;
//     let color3BlueInt = (color2BlueInt - color1BlueInt) * persent + color1BlueInt;
//     color3BlueInt &= 0xff;

//     return 'rgba(' + color3RedInt + ',' + color3GreenInt + ',' + color3BlueInt + ',' + (color3AlphaInt / 255) + ')';
// }
function getColorByEClass(idx: number | undefined, moreInfo: string) {
    const infoArr = moreInfo.split('_');
    const name = infoArr[0];
    const strMax = infoArr[1];
    let clr1: string;
    let clr2: string;
    switch (name) {
        case 'black':
            clr1 = '000000';
            clr2 = 'ffffff';
            break;
        case 'gray':
            clr1 = 'ffffff';
            clr2 = '000000';
            break;
        case 'red':
            clr1 = 'ff0000';
            clr2 = '100000';
            break;
        case 'green':
            clr1 = '99ff99';
            clr2 = '006600';
            break;
        case 'yellow':
            clr1 = 'ffff00';
            clr2 = '111100';
            break;
        case 'purple':
            clr1 = 'ff00ff';
            clr2 = '110011';
            break;
        case 'yellowgreen':
            clr1 = '80ff00';
            clr2 = '051100';
            break;
        case 'orange':
            clr1 = 'ff8000';
            clr2 = '800000';
            break;
        case 'coffee':
            clr1 = 'ffeade';
            clr2 = '210c00';
            break;
        case 'blue':
            clr1 = '0099ff';
            clr2 = '000066';
            break;
        case 'coffee':
            clr1 = 'ffeade';
            clr2 = '210c00';
            break;
        case 'skyblue':
            clr1 = '00E0FF';
            clr2 = '0080FF';
            break;
        default:
            return '#000';
    }
    const max = setMax(strMax);
    if (idx === undefined) {
        idx = max;
    }
    return getColorByArea(clr2, clr1, idx, max);
}
function setMax(moreInfo: string | undefined) {
    let maxCount: number;
    if (!moreInfo) {
        maxCount = 15;
    } else {
        maxCount = Number(moreInfo);
        if (maxCount <= 0) {
            maxCount = 15;
        }
    }

    return maxCount;
}
export default {
    register() {
        cssClassNS.CSSClass.instance.registerClassRule(rule1 as any);
        new cssClassNS.CSSClass(undefined, false, false, true).registerClassRule(rule2);
    }
};