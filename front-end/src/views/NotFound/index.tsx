import { Col, Container, Row } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import bgDesktop from "../../assets/img/banner_home.png";
import styled from "styled-components";

export function NotFoundView() {
  return (
    <Layout>
      <Banner className="vh-100">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <CardNotFound className="text-center">
                <PageTitle>Página não encontrada</PageTitle>
                <p>A página que você está tentando acessar não foi encontrada ou foi movida.</p>
                <p>Utilize o menu superior para encontrar o que deseja.</p>
              </CardNotFound>
            </Col>
          </Row>
        </Container>
      </Banner>
    </Layout>
  )
}

const CardNotFound = styled.div`
  color: #fff;
  border:none;
  padding:30px;
  margin-top:30%;
  background-color: rgba(0,0,0,0.7);
`
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