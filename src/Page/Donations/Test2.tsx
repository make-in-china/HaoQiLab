// #region import
import React /* , { css } */ from 'react-ex';
// #endregion

export default class Test2
    extends React.Component<{
        /* props */
    }> {

    render() {
        return (
            <div className={this.props.className}>
                {this.props.children}111
            </div >
        );
    }

    // #region private methods

    // #endregion
}
