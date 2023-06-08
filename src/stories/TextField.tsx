import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';

type TextFieldBaseProps = Omit<MuiTextFieldProps, 'classes' | 'className' | 'style' | 'hiddenLabel' | 'onFocus' | 'onBlur'>;

export interface TextFieldProps extends TextFieldBaseProps {
  label: string;
}

export const TextField = ({ label, ...rest }: TextFieldProps) => <MuiTextField label={label} {...rest}></MuiTextField>;
