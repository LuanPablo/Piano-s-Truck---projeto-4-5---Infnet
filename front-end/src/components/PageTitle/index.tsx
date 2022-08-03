import styled from "styled-components"

type Props = {
  children: React.ReactNode
}

export function PageTitle ({ children }: Props) {
  return (
    <TitleStyled className="mt-2">{children}</TitleStyled>
  )
}

const TitleStyled = styled.h1`
  color: #FFF;
`
