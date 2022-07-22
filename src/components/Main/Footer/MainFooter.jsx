import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import Button from "../Info/ShippingInformation/Button";
const MainFooter=()=>{
	return (
		<div className='main_footer mt-10 flex flex-col-reverse items-center md:flex-row md:items-center md:justify-between'>
			<div className='cursor-pointer'>
				<FontAwesomeIcon className='mr-2' icon={faArrowLeft}/>
				Back
			</div>
			<div className='flex flex-col-reverse md:block'>
				<Button content='Continue Shopping' className=' md:mr-5'/>
				<Button content='Proceed to Payment' className='mb-4 md:mb-0 bg-green-400'/>
			</div>
		</div>
	)
}

export default MainFooter;