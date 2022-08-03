import { faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectIsUserLoggedIn } from "../../store/slices/userSlice";

type Props = {
  withoutMargin?: boolean
}

export function Footer ({ withoutMargin = false }: Props) {
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn)
  return (
    <FooterStyled className={`text-center ${withoutMargin ? '' : 'mt-0'}`}>
      <Container className="d-lg-flex align-items-center">
        <Nav className="flex-column flex-lg-row my-4 my-lg-0 me-lg-auto">
          <Nav.Link href="/termos-de-uso.pdf" target="_blank" className="text-white">Termos de Uso</Nav.Link>
        </Nav>
        <Nav className="justify-content-center">
          <Nav.Link href="https://facebook.com" target="_blank" className="text-white">
            <IconStyled icon={faFacebookSquare} />
          </Nav.Link>
          <Nav.Link href="https://instagram.com" target="_blank" className="text-white">
            <IconStyled icon={faInstagram} />
          </Nav.Link>
        </Nav>
      </Container>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  background: #414141;
  padding: 30px 0 40px;
  @media (min-width: 992px) {
    padding: 15px 0;
  }
`
const IconStyled = styled(FontAwesomeIcon)`
  font-size: 40px;
`