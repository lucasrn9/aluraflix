import { StyledButton } from "./buttonStyles"

interface buttonProps {
  className?: string
  variant?: string
  type?: 'button' | 'reset' | 'submit'
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  children: string
}

const Button = ({
  variant,
  className,
  type = 'button',
  children,
  onClick = () => '',
}: buttonProps) => {
  return (
    <StyledButton
      className={className}
      $variant={variant}
      type={type}
      onClick={(e) => onClick(e)}
    >
      {children}
    </StyledButton>
  )
}

export default Button
