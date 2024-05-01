import styled from "styled-components"


const  Label = styled.label`
    font-size: 0.8rem;
    margin: 0.2rem;
`

const  Input = styled.input`
    font-size: 1.2rem;
    padding: 10px;
    height: 2rem;
    border-radius: var(--b-radius-md);

    &&:focus {
    outline: 3px solid var(--color-brand-green-100); 
  
}

`
const  Div = styled.div`
display: grid;
text-align: left;
margin: 0 1rem;

`
const  Span = styled.span`
font-size:1.7rem;
min-width:1.7rem;
display: inline-block;

`




function InputForm({formData,setFormData,label,name,type,icon,rule = new RegExp("")}) {

    const  handleRequirements = (e,rule) => {
        if(rule.test(e.target.value) == false){
            e.target.style.outline = '2px red solid'
        }else{
            e.target.style.outline = '3px  green solid'
            const { name, value } = e.target;
            setFormData({...formData,[name]:value})
        }
    }
    return (
        <>
                <Span>
                    {icon}
                </Span>
                <Div>
                    <Label>{label}</Label>
                    <Input onChange={(e)=> handleRequirements(e,rule)} type={type} placeholder={label} name={name}/>
                </Div>
        </>
    )
}

export default InputForm
