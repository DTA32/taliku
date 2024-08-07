import { Outlet, Link } from "react-router-dom";
import "./css/layout.css";
import { useAppSelector, useAppDispatch } from "./redux/hooks";
import { StatusEnum } from "./redux/reducers/status";
import { reset } from "./redux/reducers/status";

export default function Layout() {
	const status = useAppSelector((state) => state.status.value);
	const dispatch = useAppDispatch();
	const returnLink: JSX.Element =
		status > StatusEnum.RESULT_ANNOUNCE ? (
			<Link
				to="/"
				className="returnLink"
				onClick={() => {
					dispatch(reset());
				}}
			>
				Return to menu
			</Link>
		) : (
			<></>
		);
	return (
		<main className="container">
			<Link
				to="/"
				className="titleLink"
				onClick={() => {
					dispatch(reset());
				}}
			>
				<h1 className="title">Taliku</h1>
			</Link>
			<div className="gameContainer">
				<Outlet />
			</div>
			{returnLink}
			<p className="description">
				2013 game made on Scratch 1.4 now ported to React,{" "}
				<a href="https://www.dta32.my.id/blog/about-taliku" target="_blank">
					more info
				</a>
			</p>
		</main>
	);
}
