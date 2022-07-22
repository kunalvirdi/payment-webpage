import CartItem from "./CartItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTruck} from "@fortawesome/free-solid-svg-icons";

const CartInfo=()=>{
	return(
		<div className='cart_info w-full md:w-72 mt-5 md:mt-0 flex flex-col items-center'>
			<h1 className="text-center md:text-left mb-5">Cart Info</h1>
			<div className='cart_items'>
				<CartItem imga='https://m.media-amazon.com/images/I/61QZ72APrOL._UL1000_.jpg' price='$89.99' summary1='T-Shirt' summary2='Summer Vibe' id='#261311'/>
				<CartItem imga='https://m.media-amazon.com/images/I/71Hr1QVKO9L._UL1500_.jpg' price='$69.99' summary1='Basic Slim' summary2='Fit T-Shirt' id='#212315'/>
			</div>
			<div className='price_summary rounded-full py-5 px-12 bg-gray-300 m-auto mb-5 cursor-pointer'>
				Total Cost: <span className='font-bold'>$159.8</span>
			</div>
			<div className='final_summary flex items-center justify-between w-48 mb-5'>
				<FontAwesomeIcon icon={faTruck}/>
				<h2>You are <span className={'font-bold'}>$30.02</span> away <br/>from free shipping!</h2>
			</div>
		</div>
	)
}
export default CartInfo;