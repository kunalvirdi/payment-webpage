import Logo from "./Logo/Logo";
import Nav from "./Navlinks/Navlinks";
import NavIcons from "./NavIcons/NavIcons";

const Header=()=>{
	return(
		<div className="header w-full border-b-2 p-4 md:p-8 flex flex-col md:flex-row md:justify-between md:items-center">
			<Logo/>
			<Nav/>
			<NavIcons/>
		</div>
	)
}

export default Header;