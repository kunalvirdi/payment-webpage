import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NavIcon=(props)=>{
	return(
		<>
			<a>
				<FontAwesomeIcon className='hover:cursor-pointer ml-9 md:ml-0' icon={props.icon}/>
			</a>

		</>
	)
}

export default NavIcon;