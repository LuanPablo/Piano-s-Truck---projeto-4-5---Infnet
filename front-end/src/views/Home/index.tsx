import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import bgDesktop from "../../assets/img/banner_home.png";
import { CustomButton } from "../../components/CustomButton";
import { Layout } from "../../components/Layout";
import { selectIsUserLoggedIn } from "../../store/slices/userSlice";

export function HomeView() {
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn)
  return (
    <Layout >
      <Banner className="vh-100">
        <Container className="h-100 d-flex flex-column justify-content-center align-items-center">
          <Title className="text-center mt-auto mt-lg-0">Transporte seu piano de forma segura</Title>
          <P className="text-center mt-auto mt-lg-0">e fique tranquilo, a afinação é com a gente!</P>
          {isUserLoggedIn ? (
            <CustomButton variant="success" size='lg' className="mt-auto mt-lg-3 mb-4" to='/novo-pedido'>Faça seu orçamento</CustomButton>
          ) : (
            <>
              <CustomButton size='lg' className="mt-auto mt-lg-3 mb-5" to='/cadastro'>Cadastrar</CustomButton>
            </>
          )}
        </Container>
      </Banner>
    </Layout>
  )
}

const Banner = styled.div`
  background: url(${bgDesktop}) no-repeat center center;
  background-size: cover;
  @media (min-width: 576px) {
    background-image: url(${bgDesktop});
  }
  @media (min-width: 768px) {
    background-image: url(${bgDesktop});
  }
  @media (min-width: 992px) {
    background-image: url(${bgDesktop});
  }
`

const Title = styled.h1`
  color: #fff;
  font-size: 2.3rem;
  font-weight: bold;
  @media (min-width: 992px) {
    font-size: 4.5rem;
    max-width: 900px;
  }
`
const P = styled.p`
  color: #fff;
  font-size: 0.9rem;
  font-weight: thin;
  @media (min-width: 992px) {
    font-size: 1.5rem;
    max-width: 900px;
  }
`
