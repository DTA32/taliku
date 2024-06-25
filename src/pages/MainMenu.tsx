import { Link } from "react-router-dom";
import "../css/mainmenu.css";

export default function MainMenu() {
	return (
		<section className="home">
			<div className="menuBtnContainer">
				<Link to="/pilih" className="btnMain">
					MAIN
				</Link>
				<Link to="/caramain" className="btnCaraMain">
					CARA MAIN
				</Link>
				<Link to="/tentang" className="btnTentang">
					Tentang Game
				</Link>
			</div>
		</section>
	);
}
