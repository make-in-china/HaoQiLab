// #region import
import React, { css } from 'react-ex';
import FixHeaderTable from 'src/Components/FixHeaderTable';
const datas: any[] = [];
for (let index = 0; index < 500; index++) {
    const data = {
        barcode: '5213548745213',
        goodName: '蒙牛酸酸乳-小样' + index,
        sellPrice: '58',
        memberPrice: null,
        cost: '50',
        storeQuantity: '100',
        classify: '饮料',
        unit: '箱',
        spec: '100kg * 10',
        provider: '奇思妙想',
        producDate: '2018-10-19',
        shelfLife: '350',
        rebateStatus: '是',
        rewardPointsStatus: '是',
        rewardPointsLimit: '0',
        remarks: '备注...',
    };
    datas.push(data);
}
import { eClassConfig } from 'src/CSS/G.Class';
const { config, clsMap } = eClassConfig({
    box: [
        css`
            text-align:center;
            max-height:300px;
            max-width:800px;
            margin:5px;
            border:1px solid #aaa;
        `,
        ['scroll']
    ]
});
@React.eclass(config)
// #endregion

export default class Test
    extends React.Component<{
        /* props */
    }> {

    render() {
        return (
            <div EClass={clsMap.box} className={this.props.className}>
                <FixHeaderTable
                    columns={[
                        {
                            title: '商品条码',
                            key: 'barcode',
                            width: 130,
                        },
                        {
                            title: '商品名称',
                            key: 'goodName',
                            width: 200,
                        },
                        {
                            title: '零售价',
                            key: 'sellPrice',
                            width: 90,
                        },
                        {
                            title: '会员价',
                            key: 'memberPrice',
                            width: 90,
                        },
                        {
                            title: '进价',
                            key: 'cost',
                            width: 90,
                        },
                        {
                            title: '库存',
                            key: 'storeQuantity',
                            width: 90,
                        },
                        {
                            title: '分类',
                            key: 'classify',
                            width: 100,
                        },
                        {
                            title: '单位',
                            key: 'unit',
                            width: 100,
                        },
                        {
                            title: '规格',
                            key: 'spec',
                            width: '200px'
                        },
                        {
                            title: '供货商',
                            key: 'provider',
                            width: 100
                        },
                        {
                            title: '生产日期',
                            key: 'producDate',
                            width: 110
                        },
                        {
                            title: '保质期',
                            key: 'shelfLife',
                            width: 90
                        },
                        {
                            title: '是否打折',
                            key: 'rebateStatus',
                            width: 90
                        },
                        {
                            title: '是否积分',
                            key: 'rewardPointsStatus',
                            width: 90,
                        },
                        {
                            title: '元/积分',
                            key: 'rewardPointsLimit',
                            width: 90,
                        },
                        {
                            title: '备注',
                            key: 'remarks',
                            width: 130
                        }
                    ]}
                    data={datas}
                />
            </div >
        );
    }

    // #region private methods

    // #endregion
}
