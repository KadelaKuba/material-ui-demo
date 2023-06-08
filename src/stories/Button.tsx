import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

type ButtonBaseProps = Omit<MuiButtonProps, 'children'>;

export interface ButtonProps extends ButtonBaseProps {
  label: string;
}

export const Button = ({ label, ...rest }: ButtonProps) => <MuiButton {...rest}>{label}</MuiButton>;
