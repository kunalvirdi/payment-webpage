const DeliveryCard=({logo,price})=>{
	return(
		<div className='delivery_card w-36 flex border rounded-full px-4 py-2 hover:border-amber-400 cursor-pointer items-center justify-between'>
			<img src={logo} className='w-14' alt=""/>
			<h1>{price}</h1>
		</div>
	)
}

export default DeliveryCard