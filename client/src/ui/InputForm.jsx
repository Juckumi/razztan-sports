function InputForm({label,type,value = ''}) {
    return (
        <>
            <label>{label}</label>
            <input type={type} value={value} />
        </>
    )
}

export default InputForm
