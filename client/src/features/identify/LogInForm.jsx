import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow"
import InputForm from "../../ui/InputForm"
import Logo from "../../ui/Logo"
import { FiUser,FiLock  } from "react-icons/fi";
import { loginUser } from "../../api/userApi";
import { useNavigate } from "react-router";

const inputs = [{
label:'Usuario',
type:'text',
icon: <FiUser />,
rule: new RegExp("^[a-zA-Z0-9]{6,13}$"),
name: 'username'

},
{
  label:'Contraseña',
  type:'password',
  icon: <FiLock />,
  rule: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{5,}$"),
  name: 'passwd'

},
]

function LogInForm() {
  const [formData, setFormData] = useState({
    name:'',
    passwd:'',
  });
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const login = await loginUser(formData)
    // console.log(login)
    // if(login.status == 200){
    //   navigate('/user/dashboard')
    // }
  }
    return (
       <>
              <Logo isWhite={true} />
              <Form onSubmit={handleSubmit}>
              <h1 style={{color:'var(--color-brand-green-500)',fontSize:'2rem'}}>Iniciar Sesion</h1>
                {inputs.map((input,index)=>
                  <FormRow key={index}>
                    <InputForm setFormData={setFormData} formData={formData} name={input.name}  label={input.label} type={input.type} icon={input.icon} rule={input.rule} />
                  </FormRow>
              )}
                      <Button>Iniciar Sesion</Button>
              </Form>

              </>
    )
}

export default LogInForm
