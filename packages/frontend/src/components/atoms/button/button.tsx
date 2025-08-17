import type { ButtonProps } from './button.types';
import { StyledButton } from './button.styles';

export const Button = ({ variant = 'primary', children, ...props }: ButtonProps) => {
  return (
    <StyledButton
      customvariant={variant}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
