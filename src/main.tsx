import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import Layout from "./layout";
import "./css/root.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [{ path: "/", element: <MainMenu /> }],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
