import MainHeader from "./Main Header/MainHeader";
import Info from "./Info/Info";
import MainFooter from "./Footer/MainFooter";

const Main=()=>{
	return(
		<div className="main pt-4 md:p-14">
			<MainHeader/>
			<Info/>
			<MainFooter/>
		</div>
	)
}
export default Main;