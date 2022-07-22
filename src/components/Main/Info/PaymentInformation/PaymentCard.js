const PaymentCard=({logo,classN})=>{
	return(
		<img src={logo} className={`${classN} w-20 border rounded-full px-4 hover:border-amber-400 cursor-pointer`}alt=""/>
	)
}
export default PaymentCard