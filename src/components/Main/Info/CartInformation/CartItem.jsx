const CartItem=({imga,summary1,summary2,price,id})=>{
	return(
		<div className="cart-item flex cursor-pointer items-center mb-6">
			<div className='img w-14 rounded-full'>
				<img src={imga} className='w-full rounded-full' alt=''/>
			</div>
			<div className='summary flex w-52 justify-between items-center'>
				<div className='ml-2'>
					{summary1} <br/>
					{summary2} <br/>
					<span className='text-xs font-bold text-gray-400'>{id}</span>
				</div>
				<div className=''>{price}</div>
			</div>

		</div>
	)
}
export default CartItem;