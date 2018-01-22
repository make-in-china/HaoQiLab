import React from 'react-ex';
import entry from '../Entry';
import B from 'src/Page/ReactEx/Content/EClass/B';
import A from 'src/Page/ReactEx/Content/EClass/A';
import C from 'src/Page/ReactEx/Content/EClass/C';
import RuleSamples from 'src/Page/ReactEx/Content/EClass/RuleSamples';
import D from 'src/Page/ReactEx/Content/EClass/D';
import E from 'src/Page/ReactEx/Content/EClass/E';
import F from 'src/Page/ReactEx/Content/EClass/F';
import D2 from 'src/Page/ReactEx/Content/EClass/D2';
import F2 from 'src/Page/ReactEx/Content/EClass/F2';
import F3 from 'src/Page/ReactEx/Content/EClass/F3';
import E2 from 'src/Page/ReactEx/Content/EClass/E2';
@entry('EClass')
@React.eclass({
    box: {
        ' p': ['tiem-2'.split(' ')]
    },
    table: {
        ' td': ['ladip pdip-10 bd-12-gray'.split(' ')]
    }
})
export default class EClass extends React.Component {
    render() {
        return (
            <div EClass="box">
                <section>
                    <h2>简介</h2>
                    <p>此扩展实现了一个带有隔离性，组合性，动态性的样式系统</p>
                    <p>
                        观察本项目源码，可以看到项目构建的绝大多数组件都使用了一个eclass（import
                        &nbsp;<span style={{ color: 'purple' }}>React</span>
                        &nbsp;from '<span style={{ color: 'blue' }}>react-ex</span>';@
                        <span style={{ color: 'purple' }}>React</span>.
                        <span style={{ color: 'red' }}>eclass</span>
                        ）的装饰器,该装饰器注册了一个类隔离级别的样式rule，并装饰了render方法，被装饰过的render方法会在运行期间切换cssClass上下文，此时，当render方法内的代码调用预先替换掉的React.createElement（非React原版createElement,这里是
                        <span style={{ color: 'blue' }}>react-ex</span>
                        的React），createElement会使用正确的cssClass实例来注册EClass并转换为className属性。
                    </p>
                    <h2>示例</h2>
                    <C />
                    <p style={{ color: 'gray' }}>说明：pdip-10 ladip rdip-20 bg-gray inline mdip-5 pdip-5 rdip-5 bg-blue f-gray等样式的rule来自于项目文件src/CSS/CSSClassRule.ts</p>
                </section>
                <section>
                    <h2>Rule</h2>
                    <h3>例子</h3>
                    <div>
                        rule的结构是一个多层混合结构，以下是一些合法的rule:
                        <RuleSamples />
                    </div>
                </section>
                <section>
                    <h2>隔离性</h2>
                    <h3>历史教训</h3>
                    <p>
                        早期前端样式的编写免不了class污染，比如A君写了个轮播，使用了box做class name，B君写了个取色器，也使用了box做class name，当你同时使用了轮播和取色器，这2个box就被互相污染了。
                    </p>
                    <h3>思考</h3>
                    <p>
                        那么，我们如何保证没有使用到冲突的class nmae呢？同学们可能能找到不少方案，我这里提供的是一种透明隔离机制，自增key类组件隔离样式。
                    </p>
                    <p>
                        下面我们来演示2个组件，他们均使用了叫做box的class name
                    </p>
                    <div>
                        <div className="ant-col-12">
                            <A />
                        </div>
                        <div className="ant-col-12">
                            <B />
                        </div>
                    </div>
                    <p>
                        可以看到，他们虽然都用了box做class name，但最终使用的是VNbox(N全局自增)
                    </p>
                </section>
                <section>
                    <h2>动态样</h2>
                    <h3>class参数-内容计算</h3>
                    <p>
                        eclass支持输入参数，参数会传递给rule，当rule使用函数描述的时候，会处理这些额外的参数，以下是class参数的完整形式
                    </p>
                    <p>
                        classname=ruleName[-reset][-index][-moreinfo]
                    </p>
                    <p>
                        一些参数可以省略，但是顺序不能错。
                    </p>
                    <h3>index和moreinfo的例子</h3>
                    <D />
                    <p>
                        我们传入了一个border-10-dashed，函数接收到了index=10,和moreinfo=dashed,计算出了根据参数变化的边框样式。
                    </p>
                    <p>
                        （此时，如果border-10-dashed之前已激活生成过的话，会直接忽略生成过程，不重复造车。）
                    </p>
                    <h3>class参数-选择重置子</h3>
                    <D2 />
                    <p>
                        我们传入了一个box-chd-2-dashed，这时，传参给函数的逻辑没变，rule的函数同样接收到了index=2,和moreinfo=dashed，计算出了根据参数变化的边框样式。
                        rule的数组['inline','mdip-5','pdip-5']组合了其他rule（这个知识点下面会讲），然后是关键的reset重置子“chd”，这个参数是一个选择器重置参数，选择器参数有以下几种。
                    </p>
                    <table EClass="table">
                        <tr><td>选择器重置子</td><td>重置模式</td></tr>
                        <tr><td>bf</td><td>+ ::before </td></tr>
                        <tr><td>af</td><td>+ ::after </td></tr>
                        <tr><td>ac</td><td>+ :active </td></tr>
                        <tr><td>hv</td><td>+ :hover </td></tr>
                        <tr><td>tg</td><td>+ :target </td></tr>
                        <tr><td>bfac</td><td>+ ::before:active </td></tr>
                        <tr><td>afac</td><td>+ ::after:active </td></tr>
                        <tr><td>bfhv</td><td>+ ::before:hover </td></tr>
                        <tr><td>afhv</td><td>+ ::after:hover </td></tr>
                        <tr><td>bftg</td><td>+ ::before:target </td></tr>
                        <tr><td>aftg</td><td>+ ::after:target </td></tr>
                        <tr><td>chd</td><td>+ >* </td></tr>
                        <tr><td>chdbf</td><td>+ >*::before </td></tr>
                        <tr><td>chdaf</td><td>+ >*::after </td></tr>
                        <tr><td>chdac</td><td>+ >*:active </td></tr>
                        <tr><td>chdhv</td><td>+ >*:hover </td></tr>
                        <tr><td>chdtg</td><td>+ >*:target </td></tr>
                        <tr><td>chdbfac</td><td>+ >*::before:active </td></tr>
                        <tr><td>chdafac</td><td>+ >*::after:active </td></tr>
                        <tr><td>chdbfhv</td><td>+ >*::before:hover </td></tr>
                        <tr><td>chdafhv</td><td>+ >*::after:hover </td></tr>
                        <tr><td>chdbftg</td><td>+ >*::before:target </td></tr>
                        <tr><td>chdaftg</td><td>+ >*::after:target </td></tr>
                    </table>
                    <p>
                        查上表得知，chd会添加>*重置子，选择目标重定向到了4个div子元素，也就是说，我们定义的rule可以通过重置多种选择方式达到一对多重用的效果。
                    </p>
                </section>
                <section>
                    <h2>组合性</h2>
                    <p>
                        当你需要将多个rule组合成一个的时候，你可能会依据前面的例子得出“把rule写成function，手动调用其他的rule”的想法，但这样可能还是麻烦，所以我构思了一个组合方式，当在rule里定义这种rule的时候
                    </p>
                    <E />
                    <p>
                        我们可以看到，最终的frame结合了'rdip-5', 'inline', 'ladip'的样式。
                    </p>
                    <p style={{ color: 'red' }}>
                        （注意：此种组合[]的数量必须大于2才识别，比如[[]]，只写一个[]，然后里面写'rdip-5'，会识别成直接常量，当写2个[[]]的时候，才能知道是eclass数组）
                    </p>
                    <h3>
                        错误例子
                    </h3>
                    <E2 />
                    <p>观察这个错误例子生成的style，会看到他们只是简单的连接到了一起，没有当成组合。</p>
                </section>
                <section>
                    <h2>自定义子rule选择器</h2>
                    <p>
                        前面我们知道，class可以通过重置子改变选择的目标，但是，重置子并不适合全部场景，我们如果想区别选择子元素里的2个不同元素，重置子就做不到了（内置过多重置子等于要记忆过多的定向，所以保持少量的重置子），因此，我构思了这种写法
                    </p>
                    <F />
                    <p>
                        上面例子的rule先写了一个对象，然后对象下面有2个属性，这里的属性名会组合成额外的两组样式，分别以“.VNmain>.a”和“.VNmain>.b”为选择路径构建样式。
                        值得注意的是，这里有特殊用法2个
                    </p>
                    <ul><li>1.使用重置子</li>
                        <li>2.使用key</li></ul>
                    <h4>1.使用重置子</h4>
                    <F2 />
                    <h4>2.使用key</h4>
                    <F3 />
                    <p>为什么要使用key呢？前面有个例子使用了className='a'和className='b',这2个类名是不保证不被污染的，所以，这个例子使用了EClass='a'和EClass='b'，这时候，为了保证样式能定位到a，b，我们需要补充key，补充的方式是在a和b前加一个&符号，补充完之后，我们观察右边的输出样式和输出dom，可以看到输出的是VNa和VNb，达到了隔离目的。</p>
                </section>
                <section>
                    <h2>结语</h2>
                    <p>以上说明大概描述了这个实验性的eclass扩展的用途和用法，以后如果实践得好的话，将把eclass从这个实验项目里独立出去作为单独的库。</p>
                </section>
            </div>
        );
    }
}
