import {faSearch,faShoppingCart,faUser} from "@fortawesome/free-solid-svg-icons";
import NavIcon from "./NavIcon";

const NavIcons=()=>{
	const icons=[faSearch,faShoppingCart,faUser];
	let navIcons;
	navIcons=icons.map((val,i)=><NavIcon key={i} icon={val}/>);
	return(
		<div className="nav-icons w-full mt-4 flex justify-end md:mt-0 md:w-1/12 md:justify-between">
			{navIcons}
		</div>
	)
}
export default NavIcons;