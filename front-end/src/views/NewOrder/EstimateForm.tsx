import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import { AutocompleteField } from "../../components/AutocompleteField";
import { CustomButton } from "../../components/CustomButton";
import { FormField } from "../../components/FormField";
import { Address } from "../../entities/Address";
import * as yup from 'yup';
import { createEstimate, NewEstimateInput } from "../../services/createEstimate";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentEstimate, selectCurrentEstimate, setCurrentEstimate } from "../../store/slices/estimateSlice";

type FormValues = {
  pickupAddress: Address | null
  deliveryAddress: Address | null
  comments: string
}

export function EstimateForm () {
  const dispatch = useDispatch()
  const currentEstimate = useSelector(selectCurrentEstimate)
  const formik = useFormik<FormValues>({
    initialValues: {
      pickupAddress: currentEstimate?.pickupAddress || null,
      deliveryAddress: currentEstimate?.deliveryAddress || null,
      comments: currentEstimate?.comments || ''
    },
    validationSchema: yup.object().shape({
      pickupAddress: yup.object()
        .typeError('Selecione um endereço na lista.'),
      deliveryAddress: yup.object()
        .typeError('Selecione um endereço na lista.'),
      comments: yup.string()
        .required('Informe as instruções.')
    }),
    onSubmit: async (values) => {
      const estimate = await createEstimate(values as NewEstimateInput)
      dispatch(setCurrentEstimate(estimate))
    }
  })
  const getFieldProps = (fieldName: keyof FormValues) => {
    return {
      ...formik.getFieldProps(fieldName),
      controlId: `input-${fieldName}`,
      error: formik.errors[fieldName],
      isInvalid: formik.touched[fieldName] && !!formik.errors[fieldName],
      isValid: formik.touched[fieldName] && !formik.errors[fieldName],
      disabled: !!currentEstimate
    }
  }
  const handleChangeAddress = () => {
    dispatch(clearCurrentEstimate())
  }
  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <AutocompleteField
          {...getFieldProps('pickupAddress')}
          label="Endereço de retirada*"
          placeholder="Informe o endereço completo"
          onChange={(address) => formik.setFieldValue('pickupAddress', address)}
        />
        <AutocompleteField
          {...getFieldProps('deliveryAddress')}
          label="Endereço de entrega*"
          placeholder="Informe o endereço completo"
          onChange={(address) => formik.setFieldValue('deliveryAddress', address)}
        />
        <FormField
          {...getFieldProps('comments')}
          label="Instruções/complemento"
          placeholder="Instruções adicionais ou complemento"
          as='textarea'
        />
        {!currentEstimate && (
          <div className="d-grid d-md-block">
            <CustomButton
              type='submit'
              loading={formik.isValidating || formik.isSubmitting}
              disabled={formik.isValidating || formik.isSubmitting}
            >Calcular</CustomButton>
          </div>
        )}
      </Form>
      {currentEstimate && (
        <CustomButton
          variant="outline-primary"
          type='button'
          onClick={handleChangeAddress}
          className='mb-3 mb-md-0'
        >Editar</CustomButton>
      )}
    </>
  )
}