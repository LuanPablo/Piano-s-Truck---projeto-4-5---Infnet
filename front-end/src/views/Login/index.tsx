import { useFormik } from "formik";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { CustomButton } from "../../components/CustomButton";
import { FormField } from "../../components/FormField";
import { Layout } from "../../components/Layout";
import * as yup from 'yup'
import { loginUser } from "../../services/loginUser";
import { FirebaseError } from "firebase/app";
import { AuthErrorCodes } from "firebase/auth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateUser } from "../../store/slices/userSlice";
import styled from "styled-components";
import bgDesktop from "../../assets/img/banner_home.png";

type FormValues = {
  email: string
  password: string
}

export function LoginView() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: yup.object().shape({
      email: yup.string()
        .required('Preencha o e-mail.')
        .email('Preencha um e-mail válido.'),
      password: yup.string()
        .required('Preencha a senha.')
    }),
    onSubmit: async (values) => {
      try {
        const user = await loginUser(values)
        dispatch(updateUser(user))
        navigate('/novo-pedido')
      } catch (error) {
        const errorMsg = error instanceof FirebaseError && (error.code === AuthErrorCodes.INVALID_PASSWORD || error.code === AuthErrorCodes.USER_DELETED)
          ? 'Login ou senha inválidos.'
          : 'Falha ao fazer login. Tente novamente.'
        toast.error(errorMsg)
      }
    }
  })
  const getFieldProps = (fieldName: keyof FormValues) => {
    return {
      ...formik.getFieldProps(fieldName),
      controlId: `input-${fieldName}`,
      error: formik.errors[fieldName],
      isInvalid: formik.touched[fieldName] && !!formik.errors[fieldName],
      isValid: formik.touched[fieldName] && !formik.errors[fieldName]
    }
  }
  return (
    <Layout withoutMargin>
      <Banner className="vh-100">
        <Container className="h-100 d-flex justify-content-center align-items-center">
          <CardLogin>
            <Row className="justify-content-center">
              <Col lg={4}>
                <Title>Login</Title>
                <Form onSubmit={formik.handleSubmit}>
                  <FormField
                    {...getFieldProps('email')}
                    label='E-mail'
                    type='email'
                    placeholder='Informe o seu e-mail.'
                  />
                  <FormField
                    {...getFieldProps('password')}
                    label='Senha'
                    type='password'
                    placeholder='Informe sua senha.'
                  />
                  <div className="d-grid mb-4">
                    <CustomButton
                      type="submit"
                      loading={formik.isValidating || formik.isSubmitting}
                      disabled={formik.isValidating || formik.isSubmitting}
                    >
                      Entrar
                    </CustomButton>
                  </div>
                  <p className="text-center">Não possui conta?<br /><Link to='/cadastro'>Cadastrar</Link></p>
                </Form>
              </Col>
            </Row>
          </CardLogin>
        </Container>
      </Banner>
    </Layout>
  )
}

const Banner = styled.div`
  background: url(${bgDesktop}) no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
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
const CardLogin = styled.div`
  color: #595959;
  border:none;
  width:900px;
  padding: 40px;
  background-color: rgba(0,0,0,0.7);
`

const Title = styled.h1`
  text-align: center;
  color: #fff;
`