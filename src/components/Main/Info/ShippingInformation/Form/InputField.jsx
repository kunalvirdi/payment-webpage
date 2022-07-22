const InputField=(props)=>{
	return (
		<>
			<input className={`${props.class} border w-72 md:mr-2 py-3.5 pl-3.5 focus:outline-amber-400 rounded-full`} placeholder={props.placeholder}/>
		</>
	)
}

export default InputField;