import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow"
import InputForm from "../../ui/InputForm"
import { FiUser,FiLock,FiMail   } from "react-icons/fi";
import Logo from "../../ui/Logo";
import Button from "../../ui/Button";

const rules = {
  email:  new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"),
  contraseña:  new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{5,}$"),
  confirmContraseña: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{5,}$"),
}


function RegisterForm() {
  const handleSubmit = (e) => {
    e.preventDefault(); 
        console.log('holaaa')
  }
    return (
      <>       
      <Logo isWhite={true} />      
       <Form onSubmit={handleSubmit}>
                <h1 style={{color:'var(--color-brand-green-500)',fontSize:'2rem',margin:'1rem'}}>Registrarse</h1>
               
                <FormRow >
                    <InputForm label='Usuario' name='user' type='text' icon={<FiUser />}/>
                    <InputForm label='Email' name='email' type='text' icon={<FiMail />} rule={rules.email}/>
                  </FormRow>
              <FormRow >
                    <InputForm label='Nombre' name='name' type='text' icon=''/>
                    <InputForm label='Apellidos' name='surname' type='text' icon='' />

                  </FormRow>
              <FormRow >
                    <InputForm label='Contraseña' name='passwd' type='password' icon={<FiLock />} rule={rules.contraseña}/>
                    <InputForm label='Confirmar Contraseña' name='confirmPasswd' type='password' icon='' />

                  </FormRow>
                   <Button>Registrarse</Button>
              </Form>
              </>

    )
}

export default RegisterForm
