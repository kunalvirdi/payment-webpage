import InputField from "./InputField";

const Form=()=>{
	return(
		<div className="form mt-8 grid grid-cols-1 mx-auto lg:mx-0 md:grid-cols-2">
			<InputField class="mt-3 md:mt-0" placeholder="Email"/>
			<InputField class="mt-3 md:mt-0" placeholder="Address"/>
			<InputField class="mt-3" placeholder="First Name"/>
			<InputField class="mt-3" placeholder="City"/>
			<InputField class="mt-3" placeholder="Last Name"/>
			<InputField class="mt-3" placeholder="Postal Code/Zip"/>
			<InputField class="mt-3" placeholder="Phone Number"/>
			<InputField class="mt-3" placeholder="Country"/>
		</div>
	)
}
export default Form