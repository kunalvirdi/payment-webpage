import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStore} from "@fortawesome/free-solid-svg-icons";

const Logo=()=>{
	return(
		<div className="Logo ml-2 md:ml-0 hover:cursor-pointer flex mb-4 justify-between md:justify-around md:w-auto md:mb-0 items-center">
			<div className="flex items-center">
				<FontAwesomeIcon icon={faStore} className='text-2xl'/>
				<h1 className="text-xl md:text-2xl ml-2"><span className="text-amber-300">E</span>-Shop</h1>
			</div>

		</div>
	)
}

export default Logo;