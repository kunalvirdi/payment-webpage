const NavItem=(props)=>{
	return(
		<>
			<a href="/" className='nav-item hover:cursor-pointer hover:underline text-amber-600 hover:text-amber-400'>{props.name}</a>
		</>
	)
}

export default NavItem