import { useFormik } from "formik";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { CustomButton } from "../../components/CustomButton";
import { FormField } from "../../components/FormField";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import * as yup from 'yup';
import { createUser } from "../../services/createUser";
import { FirebaseError } from "firebase/app";
import { AuthErrorCodes } from "firebase/auth"
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateUser } from "../../store/slices/userSlice";
import styled from "styled-components";
import bgDesktop from "../../assets/img/banner_home.png";

type FormValues = {
  name: string
  email: string
  phone: string
  password: string
  agree: boolean
}

export function RegisterView() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      agree: false
    },
    validationSchema: yup.object().shape({
      name: yup.string()
        .required('Preencha o nome.')
        .min(5, 'Informe pelo menos 5 caractéres.'),
      email: yup.string()
        .required('Preencha o e-mail.')
        .email('Preencha um e-mail válido.'),
      phone: yup.string()
        .required('Preencha o telefone.'),
      password: yup.string()
        .required('Preencha a senha.')
        .min(8, 'Informe pelo menos 8 caractéres.')
        .max(50, 'Informe no máximo 50 caractéres.'),
      agree: yup.boolean()
        .equals([true], 'É preciso aceitar os termos.')
    }),
    onSubmit: async (values, { setFieldError }) => {
      try {
        const user = await createUser(values)
        dispatch(updateUser(user))
        navigate('/novo-pedido')
      } catch (error) {
        if (error instanceof FirebaseError && error.code === AuthErrorCodes.EMAIL_EXISTS) {
          setFieldError('email', 'Este e-mail já está em uso.')
          return
        }
        console.log(error)
        toast.error('Ocorreu um erro ao cadastrar. Tente novamente.')
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
    <Layout>
      <Banner className="vh-100">
        <Container className="h-100 d-flex justify-content-center align-items-center">
          <CardRegister>
            <Row className='justify-content-center'>
              <Col lg={4}>
                <PageTitle>Nova conta</PageTitle>
                <Form onSubmit={formik.handleSubmit}>
                  <FormField
                    label="Nome"
                    placeholder="Digite aqui seu nome"
                    {...getFieldProps('name')}
                  />
                  <FormField
                    type="email"
                    label="E-mail"
                    placeholder="Ele será o seu usuário"
                    {...getFieldProps('email')}
                  />
                  <FormField
                    label="Telefone"
                    placeholder="(00) 00000-0000"
                    {...getFieldProps('phone')}
                    mask={[
                      { mask: '(00) 0000-0000' },
                      { mask: '(00) 00000-0000' },
                    ]}
                    onAccept={value => formik.setFieldValue('phone', value)}
                  />
                  <FormField
                    label="Senha"
                    placeholder="Informe sua senha de acesso"
                    {...getFieldProps('password')}
                    type="password"
                  />
                  <Form.Group className='mb-3' controlId="input-agree">
                    <Form.Check
                      {...getFieldProps('agree')}
                      type="checkbox"
                      label={<>Eu li e aceito os <a href='/termos-de-uso.pdf' target='_blank'>Termos de Uso</a>.</>}
                    />
                    {formik.touched.agree && formik.errors.agree && (
                      <Form.Control.Feedback type='invalid' className='d-block'>
                        {formik.errors.agree}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>
                  <div className="d-grid mb-4">
                    <CustomButton
                      type='submit'
                      loading={formik.isValidating || formik.isSubmitting}
                      disabled={formik.isValidating || formik.isSubmitting}
                    >
                      Criar conta
                    </CustomButton>
                  </div>
                  <p className="text-center">Já possui conta?<br /><Link to='/login'>Entrar</Link></p>
                </Form>
              </Col>
            </Row>
          </CardRegister>
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
const CardRegister = styled.div`
  color: #595959;
  border:none;
  width:900px;
  padding: 40px;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: rgba(0,0,0,0.7);
`