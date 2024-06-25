import { Outlet, useLocation, Link } from "react-router-dom";
import "./css/layout.css";

export default function Layout() {
	const location = useLocation();
	const isFinish = location.pathname === "/reward";
	const returnLink: JSX.Element = isFinish ? (
		<Link to="/">Return to menu</Link>
	) : (
		<></>
	);
	return (
		<main className="container">
			<Link to="/" className="titleLink">
			<h1 className="title">Taliku</h1>
			</Link>
			<div className="gameContainer">
				<Outlet />
			</div>
			{returnLink}
			<p className="description">
				2013 game made on Scratch 1.4 now ported to React,{" "}
				<a
					href="https://github.com/DTA32/taliku/blob/master/README.md"
					target="_blank"
				>
					more info
				</a>
			</p>
		</main>
	);
}
