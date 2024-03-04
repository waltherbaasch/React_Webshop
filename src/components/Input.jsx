const Input = ({type, label, name, value, onChange}) => {
return (
<>
    <label htmlFor={name}>{label}</label>
    <input name={name} id={name} value={value} onChange={onChange}/>
  </>)
}

export default Input