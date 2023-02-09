import React from "react";
import { Outlet } from "react-router-dom";

export default function Root(){
	//Customize default layout here
	return (
		<Outlet />
	);
}
