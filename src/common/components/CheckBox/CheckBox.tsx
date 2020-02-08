import * as React from 'react';
import {
  Wrapper,
  CheckBoxMask,
  CheckBoxHidden,
  Text,
  CheckMark
} from './styled';

interface Props {
  name: string;
  text?: string;
  size?: number;
  iconColor?: string;
  disabled?: boolean;
  right?: boolean;
  checked?: boolean;
  onChange?: Function;
  onBlur?: Function;
  value?: boolean;
  borderColor?: string;
  textColor?: string;
  borderBold?: boolean;
  background?: string;
  width?: number;
  widthLabel?: number;
  margin?: string;
}

export const CheckBox: React.FC<Props> = ({
  name,
  text,
  size,
  iconColor,
  disabled,
  right,
  checked,
  borderColor,
  textColor,
  borderBold,
  background,
  value,
  width,
  widthLabel,
  margin,
  ...nextProps
}) => (
  <Wrapper disabled={disabled} right={right} width={width} margin={margin}>
    <CheckBoxMask
      size={size}
      borderColor={borderColor}
      borderBold={borderBold}
      background={background}
      value={value}
      >
        <CheckBoxHidden
          type="checkbox"
          name={name}
          disabled={disabled}
          checked={checked}
          {...nextProps} />
        <CheckMark />
    </CheckBoxMask>
    {text && <Text right={right} size={size} widthLabel={widthLabel} textColor={textColor}>{text}</Text>}
  </Wrapper>
)


CheckBox.defaultProps = {
  borderColor: "#C5CBE0",
  size: 20,
  textColor: "000000",
  background: "#FFFFFF"
}
