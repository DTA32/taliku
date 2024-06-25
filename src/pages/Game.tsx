import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../css/game.css";

export default function Game() {
	const location = useLocation();
	const navigate = useNavigate();
	const [tipe, setTipe] = useState("");
	useEffect(() => {
		if (!location.state) {
			navigate("/pilih");
		} else {
			setTipe(location.state.tipe);
		}
	}, [location.state]);
	console.log(tipe);
	return <section className={`${tipe}`}></section>;
}
