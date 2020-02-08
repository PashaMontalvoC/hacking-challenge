import * as React from 'react';
import { CheckBox } from '../CheckBox';

export const RenderCheckBox = ({
    input,
    text,
    textColor,
    sizeBox,
    borderColor,
    width,
    widthLabel,
    margin
}) => (
    <CheckBox
        {...input}
        refInput={e => e && (e.checked = input.value)}
        text={text}
        textColor={textColor}
        name={input.name}
        sizeBox={sizeBox}
        borderColor={borderColor}
        width={width}
        widthLabel={widthLabel}
        margin={margin}
    />
);