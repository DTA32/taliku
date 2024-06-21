import { Outlet } from "react-router-dom";
import "./css/layout.css";

export default function Layout() {
	return (
		<main className="container">
			<h1 className="title">Taliku</h1>
			<div className="gameContainer">
				<Outlet />
			</div>
			<p className="description">
				<a href="https://scratch.mit.edu/projects/13691310/" target="_blank">
					2013 game
				</a>{" "}
				made on Scratch 1.4 now ported to React
			</p>
		</main>
	);
}
