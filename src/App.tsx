
import { Mappedin, TGetVenueMakerOptions } from "@mappedin/mappedin-js";
import "@mappedin/mappedin-js/lib/mappedin.css";
import useMapView from "./hooks/useMapView";
import useVenue from "./hooks/useVenue";
import Map from "./Map";
import "../app/globals.css";
import * as data from './data.json';

import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from './components/ui/dialog'

const options: TGetVenueMakerOptions = {
	mapId: "65ac3a16ca641a9a1399dc24",
	key: import.meta.env.VITE_MI_CLIENT_ID,
	secret: import.meta.env.VITE_MI_CLIENT_SECRET,
};

export default function App() {
	console.log(data.stuff);

	return (
		<div id="app">
			<Dialog>
				<DialogTrigger>Open</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Are you absolutely sure?</DialogTitle>
						<DialogDescription>
							This action cannot be undone. This will permanently delete your account
							and remove your data from our servers.
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
			<Map />
		</div>
	);
}
