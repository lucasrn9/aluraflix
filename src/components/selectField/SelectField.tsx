import { StyledOption, StyledSelect } from './selectFieldStyles'

interface selectFieldProps {
  placeholder: string
  options: {
    categoryName: string
    categoryId: number
  }[]
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectField = ({
  placeholder,
  options,
  value,
  onChange,
}: selectFieldProps) => {
  return (
    <StyledSelect
      value={value}
      onChange={(e) => {
        onChange(e)
      }}
    >
      <StyledOption value="default" disabled>
        {placeholder}
      </StyledOption>
      {options.map((option) => (
        <StyledOption key={option.categoryId} value={option.categoryName}>
          {option.categoryName}
        </StyledOption>
      ))}
    </StyledSelect>
  )
}

export default SelectField
