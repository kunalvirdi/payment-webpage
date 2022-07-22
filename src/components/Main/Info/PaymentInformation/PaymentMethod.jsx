import {paypal, mastercard, visa, m, discover} from "../../../../assests";
import PaymentCard from "./PaymentCard";

const PaymentMethod=()=>{
	return(
		<div className="Payment mt-5 md:mt-0 w-full md:w-72 flex flex-col">
			<h1 className='text-center md:text-left'>Payment Method</h1>
			<div className='mt-5 grid grid-cols-3 items-center justify-items-center md:justify-items-start gap-y-5 w-full'>
				<PaymentCard logo={visa}/>
				<PaymentCard logo={paypal}/>
				<PaymentCard logo={mastercard}/>
				<PaymentCard logo={m}/>
				<PaymentCard classN='py-3' logo={discover}/>
			</div>
		</div>
	)
}
export default PaymentMethod