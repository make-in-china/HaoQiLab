// #region import
import React from 'react-ex';
import entry from '../Entry';
import Logo from 'src/Template/Default/Logo';
// #endregion
@entry('LogoPage')
export default class LogoPage
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
            <div>
                default theme的Logo
                <Logo fill="#555" />
            </div >
        );
    }

    // #region private methods

    // #endregion
}
