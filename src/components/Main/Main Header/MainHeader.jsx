import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart,faTruck} from "@fortawesome/free-solid-svg-icons";

const MainHeader=()=>{
	return(
		<div className="MainHeader w-full flex flex-col md:justify-between items-center md:flex-row">
			<h1 className="font-bold">Shipping and Payment</h1>
			<div className="flex w-44 mt-2 md:mt-0 md:w-52 justify-between">
				<FontAwesomeIcon className='border p-2 rounded-full' icon={faShoppingCart}/>
				<div className="border-t-2 mt-4 relative  w-full"></div>
				<FontAwesomeIcon className='border p-2 rounded-full bg-green-300' icon={faTruck}/>
			</div>
		</div>
	)
}

export default MainHeader;