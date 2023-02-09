import React from "react";
import Button from "../components/button";
import { Typography } from "@mui/material";
import ChevronRightRounded from '@mui/icons-material/ChevronRightRounded';

export default function Home(){
	return <div className="flex flex-col w-full items-center justify-evenly gap-6">
		<Typography variant="h2">Home example</Typography>
		<Button href="/page1" iconRight={ <ChevronRightRounded /> }>Go to page 1</Button>
		<Button href="/page404" iconRight={ <ChevronRightRounded /> }>Go to error page</Button>
	</div>
}