import ShippingInfo from "./ShippingInformation/ShippingInfo";
import PaymentInfo from "./PaymentInformation/PaymentInfo";
import Button from "./ShippingInformation/Button";
import CartInfo from "./CartInformation/CartInfo";

const Info=()=>{
	return(
		<div className="Info mt-10">
			<div className="flex flex-wrap flex-col md:flex-row md:items-start justify-between items-stretch">
				<div className="buttons">
					<div className="flex justify-center md:justify-start">
						<Button className="mr-5" content="Login"/>
						<Button content="SignUp"/>
					</div>
					<ShippingInfo/>
				</div>
				<PaymentInfo/>
				<CartInfo/>
			</div>
		</div>
	)
}
export default Info;