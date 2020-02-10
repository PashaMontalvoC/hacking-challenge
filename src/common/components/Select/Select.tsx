import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import {
  Wrapper,
  Mask,
  Text,
  ArrowIcon,
  SelectHidden,
  OptionMaskWrapper,
  OptionList
} from './styled';

interface OptionProps {
  value?: string;
  label?: string;
}

interface Props {
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  width?: string;
  fullWidth?: boolean;
  onChange?: Function;
  options: OptionProps[];
}

export const Select: React.FC<Props> = ({
  name,
  placeholder,
  disabled,
  width,
  fullWidth,
  onChange,
  options
}) => {

  const [ visible, setVisible ] = useState(false);
  const [ value, setValue ] = useState(placeholder ? placeholder : (options.length > 0 && options[0].label));
  const [ isFocus, setIsFocus ] = useState(false);
  const selectRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    if (options.length > 0) {
      !placeholder && setValue(options[0].label)
    }
  }, [options]);
  
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  });
  
  const handleClickMask = () => {
    setVisible(!visible);
    setIsFocus(true);
  };

  const handleOutsideClick = (e) => {
    const isOutside = !maskRef.current.contains(e.target);
    if (isOutside) {
      setVisible(false);
      setIsFocus(false);
    }
  };

  const handleClickOption = (e: React.SyntheticEvent<HTMLSpanElement>) => {
    const spanElement = e.target as HTMLSpanElement;
    const valueSelect = options.filter(element => element.label === spanElement.innerHTML)[0].value;
    selectRef.current.value = valueSelect;
    onChange && onChange(selectRef.current.value);
    setVisible(false);
    setValue(spanElement.innerHTML);
  };

  return (
    <Wrapper
      width={width}
      fullWidth={fullWidth}
      disabled={disabled}
      ref={maskRef}>
      <Mask onClick={() => handleClickMask()} isFocus={isFocus}>
        <Text>{value}</Text>
        <ArrowIcon />
      </Mask>
      <SelectHidden ref={selectRef} name={name}>
        {placeholder && <option key="" value="">{placeholder}</option>}
        {options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </SelectHidden>
      <OptionMaskWrapper visible={visible} width={width}>
        {options.map((item, index) => (
          <OptionList key={index} onClick={e => handleClickOption(e)} selected={value === item.label}>
            {item.label}
          </OptionList>
        ))}
      </OptionMaskWrapper>
    </Wrapper>
  );
};

Select.defaultProps = {
  width: '200px'
}