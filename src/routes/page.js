import React from "react";
import { Typography } from "@mui/material";
import { ChevronLeftRounded } from "@mui/icons-material";
import Button from "../components/button";

export default function Page(){
	return <div className="flex flex-col w-full items-center justify-evenly gap-6">
		<Typography variant="h2">Page example</Typography>
		<Button href="/" iconRight={ <ChevronLeftRounded /> }>Go back to home</Button>
	</div>
}