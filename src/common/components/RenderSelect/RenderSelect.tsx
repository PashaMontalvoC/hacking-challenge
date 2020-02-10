import * as React from 'react';
import { Select } from '../Select';

export const RenderSelect = ({
  input,
  options,
  value,
  width,
  placeholder,
  disabled
}) => (
  <Select
    {...input}
    options={options}
    value={value}
    placeholder={placeholder}
    disabled={disabled}
    width={width}
  />
)
