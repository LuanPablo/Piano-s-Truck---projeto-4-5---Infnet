import { Card, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { CustomButton } from "../../components/CustomButton";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import bgDesktop from "../../assets/img/banner_home.png";

export function NewOrderSuccessView() {
  return (
    <Layout>
      <Banner className="vh-100">
        <Container className="justify-content-center">
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <CardSucess>
                <PageTitle>Solicitação recebida com sucesso!</PageTitle>
                <p>Entraremos em contato pelo seu telefone e pelo e-mail.</p>
                <CustomButton size="lg" to='/novo-pedido'>Fazer outro orçamento</CustomButton>
              </CardSucess>
            </Col>
          </Row>
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
const CardSucess = styled.div`
  color: #fff;
  border:none;
  margin-top:30%;
  padding:30px;
  background-color: rgba(0,0,0,0.7);
`