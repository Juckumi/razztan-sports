import Button from "../../ui/Button";
import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow"
import InputForm from "../../ui/InputForm"
import Logo from "../../ui/Logo"
import { FiUser,FiLock  } from "react-icons/fi";

const inputs = [{
label:'Usuario',
type:'text',
icon: <FiUser />,
rule: ''

},
{
  label:'Contraseña',
  type:'password',
  icon: <FiLock />,
  rule: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{5,}$")
},
]

function LogInForm() {
  const handleSubmit = (e,data) => {
    e.preventDefault(); 
        console.log('holaaa',data)
  }
    return (
       <>
              <Logo isWhite={true} />
              <Form onSubmit={handleSubmit}>
              <h1 style={{color:'var(--color-brand-green-500)',fontSize:'2rem'}}>Iniciar Sesion</h1>
                {inputs.map((input,index)=>
                  <FormRow key={index}>
                    <InputForm label={input.label} type={input.type} icon={input.icon} rule={input.rule} />
                  </FormRow>
              )}
                      <Button>Iniciar Sesion</Button>
              </Form>

              </>
    )
}

export default LogInForm
