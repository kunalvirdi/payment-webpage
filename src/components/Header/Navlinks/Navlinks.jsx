import NavItem from "./NavItem";

const Nav=()=>{
	let navItems=["Men","Women","Kids"];
	let navLinks;
	navLinks=navItems.map((val,i)=><NavItem key={i} name={val}/>)
	return(
		<div className="Nav flex w-3/4 m-auto md:w-1/5 justify-between items-center">
			{navLinks}
		</div>
	)
}
export default Nav