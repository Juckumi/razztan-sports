import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow"
import InputForm from "../../ui/InputForm"

function RegisterForm() {
    return (
        <Form>
                  <FormRow>
                    <InputForm label='nombre' type='text' />
                  </FormRow>
                    <InputForm label='contraseña' type='text' />
                  <FormRow>
                    <InputForm type='text' />
                  </FormRow>
              </Form>
    )
}

export default RegisterForm
