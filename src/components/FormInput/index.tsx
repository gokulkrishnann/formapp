import React from 'react';
import {
  FormInputContainer,
  Label,
  Select,
  TextBox,
  ErrorBox,
  ErrorInfo
} from './styles';

export type Option = {
  id: string;
  value: string;
  name: string;
};
type FormInputProps = {
  id?: string;
  name?: string;
  type: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value?: string;
  errorMessage?: string;
  label?: string;
  options?: Option[];
};
const FormInput: React.FC<FormInputProps> = ({
  id,
  name,
  type,
  placeholder,
  onChange,
  className,
  value,
  errorMessage,
  label,
  options
}) => {
  return (
    <>
      <FormInputContainer>
        <Label htmlFor={name}>{label}</Label>
        {type.toLowerCase() === 'textbox' && (
          <TextBox
            id={id}
            name={name}
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className={className}
          />
        )}
        {type.toLowerCase() === 'dropdown' && (
          <Select id={id} value={value} name={name} onChange={onChange}>
            <option id="0" value="Select a user">
              Select a user
            </option>
            {options.map(
              (option: { id: string; value: string; name: string }) => {
                return (
                  <option key={option.id} id={option.id} value={option.name}>
                    {option.name}
                  </option>
                );
              }
            )}
          </Select>
        )}
        <br />
        <ErrorBox>
          {errorMessage && (
            <ErrorInfo className={`fieldError${label}`}>
              {errorMessage}
            </ErrorInfo>
          )}
        </ErrorBox>
      </FormInputContainer>
    </>
  );
};
export default FormInput;
