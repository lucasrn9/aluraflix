import { StyledCategory } from "./categoryStyles"


interface categoryProps {
  children: string
  size: string
  color: string
}

const Category = ({ children, size, color }: categoryProps) => {
  return (
    <StyledCategory $size={size} $color={color}>
      {children}
    </StyledCategory>
  )
}

export default Category
