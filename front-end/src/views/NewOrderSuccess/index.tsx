import { Col, Container, Row } from "react-bootstrap";
import { CustomButton } from "../../components/CustomButton";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";

export function NewOrderSuccessView () {
  return (
    <Layout>
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col md={8} lg={6} xl={5}>
            <PageTitle>Solicitação recebida com sucesso!</PageTitle>
              <p>Entraremos em contato pelo seu telefone e pelo e-mail.</p>
            <CustomButton size="lg" to='/novo-pedido'>Fazer outro orçamento</CustomButton>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}