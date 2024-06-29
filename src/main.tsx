import React from "react";
import ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import Layout from "./layout";
import "./css/root.css";
import Pilih from "./pages/Pilih";
import CaraMain from "./pages/CaraMain";
import TentangGame from "./pages/TentangGame";
import Reward from "./pages/Reward";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import GameMid from "./components/GameMid";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "/", element: <MainMenu /> },
			{ path: "/pilih", element: <Pilih /> },
			{ path: "/caramain", element: <CaraMain /> },
			{ path: "/tentang", element: <TentangGame /> },
			{ path: "/main", element: <GameMid /> },
			{ path: "/reward", element: <Reward /> },
		],
	},
	{ path: "*", element: <Navigate to="/" replace /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
