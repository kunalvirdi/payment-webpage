import PaymentMethod from "./PaymentMethod";
import DeliveryMethod from "./DeliveryMethod";

const PaymentInfo=()=>{
	return(
		<div className="Payment_Info md:w-72 flex flex-col items-center md:items-center md:flex-row md:items-start md:justify-center lg:flex-col">
			<PaymentMethod/>
			<DeliveryMethod/>
		</div>
	)
}
export default PaymentInfo