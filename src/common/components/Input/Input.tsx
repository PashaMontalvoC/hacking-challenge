import * as React from 'react';
import { InputWrapper } from './styled';

interface Props {
    width?: number;
    placeholder?: string;
    maxLength?: number;
    type: string;
    value?: string;
    onChange?: Function;
    onBlur?: Function;
}

export const Input: React.FC<Props> = ({
  width,
  placeholder,
  onChange,
  maxLength,
  type,
  value,
  onBlur
}) => {
 
    const handleChange = (e) => {
        let target = e.target;
        target.value = maxLength ? target.value.slice(0, maxLength) : target.value;
        if (type === 'number') {
          target.value = formatValueChangeState(target.value);
        }
        if (onChange) {
          onChange(e);
        }
      };
    
      const formatValueChangeState = (val) => {
        return val.replace(/[^0-9]/g, '');
      };

    return(
        <InputWrapper
            width={width}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            maxLength={maxLength}
            type={type === "number" ? "text" : type}
            onBlur={onBlur}
        />
    )
};