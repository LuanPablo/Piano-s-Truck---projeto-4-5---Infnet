import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import { EstimateDetails } from "./EstimateDetails";
import bgDesktop from "../../assets/img/banner_endereco.png";
import { EstimateForm } from "./EstimateForm";

export function NewOrderView() {
  return (
    <Layout>
      <Banner className="vh-100">
        <Container className="pt-5">
          <CardOrcamento>
            <Row>
              <PageTitle>Orçamento</PageTitle>
              <Col xs={12} md={6} lg={7}>
                <EstimateForm />
              </Col>
              <Col xs={12} md={6} lg={5} className='p-0 px-md-3'>
                <EstimateDetails />
              </Col>
            </Row>
          </CardOrcamento>
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
const CardOrcamento = styled.div`
  color: #595959;
  border:none;
  margin-top:55px;
  padding: 40px;
  background-color: rgba(0,0,0,0.7);
`