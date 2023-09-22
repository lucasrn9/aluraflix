import { StyledTextArea } from './textAreaStyles'

interface textAreaProps {
  placeholder: string
  id?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea = ({ placeholder, id = '', value, onChange }: textAreaProps) => {
  return (
    <StyledTextArea
      required
      value={value}
      onChange={(e) => {
        onChange(e)
      }}
      id={id}
      cols={30}
      rows={10}
      placeholder={placeholder}
    />
  )
}

export default TextArea
