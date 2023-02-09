import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useLocation, useRouteError } from "react-router-dom";
import ExpandMoreRounded from "@mui/icons-material/ExpandMoreRounded";
import RocketLaunchRounded from '@mui/icons-material/RocketLaunchRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import Button from "../components/button";

export default function ErrorPage() {
	const error = useRouteError();
	const location = useLocation();

	useEffect(() => {
		document.documentElement.classList.add("h-full");
		document.body.classList.add("h-full");
	}, []);

	return (
		<div className="h-screen flex flex-row justify-center items-center bg-zinc-100">
			<div className="flex min-h-full flex-col">
				<main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
					<div className="py-16">
						<div className="flex flex-col items-center text-center">
							<Typography variant="h2" className="text-blue-600 font-bold">
								{error.status || 500}
							</Typography>
							<Typography variant="h1" className="font-bold tracking-tight text-pink-500">
								Ooops!
							</Typography>
							<Typography className="mt-4 text-zinc-800">
								{error.statusText || error.message}
							</Typography>
							<div className="flex flex-col items-center w-1/2 mt-10 gap-4">
								<Button href={ location.pathname } iconRight={<WarningRoundedIcon className="text-white" />}>
									Retry the dangerous path
								</Button>
								<Button href="/" variant="text" iconRight={<RocketLaunchRounded />}>
									Or get back to a safe place!
								</Button>
							</div>
						</div>
					</div>
				</main>
				<footer className="mb-12">
					<Accordion className="bg-blue-500 text-white">
						<AccordionSummary
							expandIcon={<ExpandMoreRounded className="text-white" />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography>
								Developer things here, don't mind it!
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								<pre>{error.error?.stack || error.stack || error}</pre>
							</Typography>
						</AccordionDetails>
					</Accordion>
				</footer>
			</div>
		</div>
	);
}
