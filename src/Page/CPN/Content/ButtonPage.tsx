// #region import
import React from 'react-ex';
import entry from '../Entry';
// #endregion
@entry('ButtonPage')
@React.eclass(/*local eclass rule */{
    box: [[]]
})
export default class ButtonPage
    extends React.Component<{
        /* props */
    }> {
    // #region static
    
    // #endregion

    // #region public property

    // #endregion

    // #region private property

    // #endregion

    // #region public methods withoutRender

    // #endregion
    render() {
        return (
            <div EClass="box" className={this.props.className}>
                {this.props.children}
            </div >
        );
    }

    // #region private methods

    // #endregion
}
