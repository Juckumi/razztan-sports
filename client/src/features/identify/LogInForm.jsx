import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow"
import InputForm from "../../ui/InputForm"

function LogInForm() {
    return (
        <Form>
                  <FormRow>
                    <InputForm label='nombre' type='text' />
                  </FormRow>
                  <FormRow>
                  <InputForm label='contraseña' type='text' />
                  </FormRow>
              </Form>
    )
}

export default LogInForm
