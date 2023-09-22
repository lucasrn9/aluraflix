import {
  StyledColorField,
  StyledColorInput,
  StyledColorLabel,
} from './colorFieldStyles'

interface colorFieldProps {
  id?: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ColorField = ({ id = '', label, value, onChange }: colorFieldProps) => {
  return (
    <StyledColorField>
      <StyledColorLabel htmlFor={id}>{label}</StyledColorLabel>
      <StyledColorInput
        required
        value={value}
        onChange={(e) => {
          onChange(e)
        }}
        id={id}
      />
    </StyledColorField>
  )
}

export default ColorField
