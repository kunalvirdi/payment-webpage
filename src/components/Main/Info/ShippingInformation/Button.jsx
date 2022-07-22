const Button=({content,className})=>{
	return(
		<>
			<button className={`${className} px-8 rounded-full py-3 border border-black hover:border-green-300 hover:bg-green-300 hover:border-none hover:text-white`}>{content}</button>
		</>
	)
}
export default Button