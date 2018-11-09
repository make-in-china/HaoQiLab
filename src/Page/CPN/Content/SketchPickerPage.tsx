// #region import
import React from 'react-ex';
import entry from '../Entry';
import SketchPicker from 'src/Components/Sketch/SketchPicker';
// #endregion
@entry('SketchPickerPage')

export default class SketchPickerPage
    extends React.Component<{
        /* props */
    }> {
    
    render() {
        return [
            (
                <SketchPicker color={{ R: 255, G: 0, B: 0, A: 1 }} />
            ),
            '有空再加说明'
        ];
    }

    // #region private methods

    // #endregion
}
