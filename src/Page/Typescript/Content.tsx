import React, { css } from 'react-ex';

// import Antd from 'antd-more';
import { observer /* , observable */ } from 'mobx-index';
const pic1 = require('./asserts/1.png');
const pic2A = require('./asserts/2.1.png');
const pic2B = require('./asserts/2.2.png');
const pic2C = require('./asserts/2.3.png');
@React.eclass({
    box: {
        ' ul': css`line-height:2em;`
    }
})
@observer
export default class App extends React.Component {
    render() {
        return (
            <div EClass="box">
                经常回答一些typescript相关问题，发现很多问题具有普遍性，不想重重复复回答，故此记录在此。
                <p><h3>1.如何给已存在的全局变量加属性？</h3></p>
                <p>
                    如图
                    {/* <p>众所周知，定义成全局变量的变量，会同时存在于全局对象的属性上，比如在顶级scope里var i=1;,那么window就有了一个i属性。</p> */}
                    {/* <p>在typescript里，我们会用模块加载或script加载一份代码，那么，我们的var i=1;就会存在两种情况，1就是i是一个模块内部变量，2就是i是一个全局变量，并存在于window上，而typescript不会自动识别这两种情况。所以，我们需要手动往window的类型上加类型说明，如图所示：</p> */}
                    <img src={pic1} alt="" />
                    {/* 这个问题其实是2个问题
                    <ul>
                        <li>1.如何在模块中给已存在的全局变量加属性？</li>
                        <li>2.如何在模块中给已存在的全局变量加属性？</li>
                    </ul> */}
                </p>
                <p><h3>2.如何给已存在的类加属性和方法？</h3></p>
                <p EClass="pdip-chd-15 lbpx-chd-2-dashed">
                    如图
                    <div>第一步.
                        <img src={pic2A} alt="" />
                    </div>
                    <div>第二步.
                        <img src={pic2B} alt="" />
                    </div>
                    <div>第三步.
                        <img src={pic2C} alt="" />
                    </div>

                </p>
            </div>
        );
    }
}
