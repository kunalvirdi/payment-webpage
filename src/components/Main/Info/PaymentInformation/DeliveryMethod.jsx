import DeliveryCard from "./Delivery";
import fedex from '../../../../assests/Logo/fedex.png'

const DeliveryMethod=()=>{
	return(
		<div className="delivery_info mt-5 md:w-72">
			<h1 className='text-center md:text-left'>Delivery Method</h1>
			<div className='mt-5 justify-items-center md:justify-items-start grid grid-cols-2 sm:grid-cols-2 gap-y-5 gap-x-4 w-full'>
				<DeliveryCard logo="https://inpost.pl/themes/custom/inpost/logo.svg" price="$20"/>
				<DeliveryCard logo="https://www.dpd.com/wp-content/themes/dpdgroup/images/DPDG_logo_redgrad_rgb_responsive.svg" price="$12"/>
				<DeliveryCard logo="https://www.dhl.com/content/dam/dhl/global/core/images/logos/dhl-logo.svg" price="$15"/>
				<DeliveryCard logo={fedex} price="$10"/>
			</div>
		</div>
	)
}
export default DeliveryMethod