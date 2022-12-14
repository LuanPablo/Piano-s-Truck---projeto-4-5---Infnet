import styled from "styled-components"
import { Footer } from "./Footer"
import { Header } from "./Header"

type Props = {
  children: React.ReactNode
  startTransparent?: boolean
  withoutMargin?: boolean
}

export const Layout: React.FC<Props> = ({ children, startTransparent, withoutMargin }) => {
  return (
    <>
      <Header startTransparent={startTransparent} />
      <MainStyled startTransparent={startTransparent}>
        {children}
      </MainStyled>
      <Footer withoutMargin={withoutMargin} />
    </>
  )
}

// Cria tipo a partir de outro selecionando propriedades
// type MainProps = Pick<Props, 'startTransparent'>

const MainStyled = styled.main<Props>`
  ${props => !props.startTransparent && `
    padding-top: 70px;
    @media (min-width: 992px) {
      padding-top: 78px;
    }
  `}
`
