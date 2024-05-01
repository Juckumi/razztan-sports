import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow"
import InputForm from "../../ui/InputForm"
import { FiUser,FiLock,FiMail   } from "react-icons/fi";
import Logo from "../../ui/Logo";
import Button from "../../ui/Button";
import { createUser } from "../../api/userApi";
import { useState } from "react";
import { useNavigate } from "react-router";

const rules = {
  email:  new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"),
  contraseña:  new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{5,}$"),
  confirmContraseña: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{5,}$"),
}



function RegisterForm() {

  const [formData, setFormData] = useState({
    name:'',
    surname:'',
    username:'',
    email:'',
    pwd:'',
    confirmPwd:'',
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState(null);
  const handleSubmit = async (e) => {
    console.log(e)
    e.preventDefault(); 

      const [res,data ]= await createUser(formData);

      console.log(res,data,'resssssssss')

        // if (res.ok && res.status === 201) {
        //   navigate('/user/dashboard'); 
        //  } else {
        //   setErrors(data.errors);
        //  }
       
        //  console.log(errors)
  }
  

    return (
      <>       
      <Logo isWhite={true} />      
       <Form onSubmit={handleSubmit}>
                <h1 style={{color:'var(--color-brand-green-500)',fontSize:'2rem',margin:'1rem'}}>Registrarse</h1>
               
                  <FormRow >
                    <InputForm setFormData={setFormData} formData={formData} label='Usuario' name='username' type='text' icon={<FiUser />}/>
                    <InputForm setFormData={setFormData}  formData={formData} label='Email' name='email' type='text' icon={<FiMail />} rule={rules.email}/>
                  </FormRow>
                  <FormRow >
                      <InputForm  setFormData={setFormData}  formData={formData} label='Nombre' name='name' type='text' icon=''/>
                      <InputForm setFormData={setFormData}  formData={formData} label='Apellidos' name='surname' type='text' icon='' />
                  </FormRow>
                  <FormRow >
                      <InputForm setFormData={setFormData}  formData={formData} label='Contraseña' name='pwd' type='text' icon={<FiLock />} rule={rules.contraseña}/>
                      <InputForm setFormData={setFormData}  formData={formData} label='Confirmar Contraseña' name='confirmPwd' type='text' icon='' />
                  </FormRow>
                  { errors !== null && Object.entries(errors).map(([campo, array]) => (
                          <p key={campo}>
                            {campo}: {array.join(', ')}
                          </p>
      ))}
                   <Button>Registrarse</Button>
              </Form>
              </>

    )
}

export default RegisterForm
