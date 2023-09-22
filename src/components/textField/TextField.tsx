import { StyledInput, StyledLabel, StyledTextField } from './textFieldStyles'

interface textFieldProps {
  id?: string
  placeholder?: string
  label?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextField = ({
  id = '',
  placeholder = '',
  label = '',
  value,
  onChange,
}: textFieldProps) => {
  return (
    <StyledTextField>
      <StyledLabel htmlFor="" $withPlaceholder={!!placeholder}>
        {label}
      </StyledLabel>
      <StyledInput
        required
        value={value}
        onChange={(e) => {
          onChange(e)
        }}
        id={id}
        placeholder={placeholder}
        $withPlaceholder={!!placeholder}
      />
    </StyledTextField>
  )
}

export default TextField
