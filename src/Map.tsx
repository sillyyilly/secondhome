import { Mappedin, TGetVenueMakerOptions } from "@mappedin/mappedin-js";
import "@mappedin/mappedin-js/lib/mappedin.css";
import "./Map.css";
import useMapView from "./hooks/useMapView";
import useVenue from "./hooks/useVenue";
import { useRef } from "react";
import CourseTable from "./components/CourseTable";

const options: TGetVenueMakerOptions = {
	mapId: "65ac3a16ca641a9a1399dc24",
	key: import.meta.env.VITE_MI_CLIENT_ID,
	secret: import.meta.env.VITE_MI_CLIENT_SECRET,
};

const getCourseData = (id: string) => {
	switch (id) {
		case "CPSC 330":
			return [
				{
					"name": "Assignment 1: Intro to Machine Learning",
					"category": "Assignment",
					"due_date": "2024-02-01T00:00:00.000Z",
					"completed": false
				},
				{
					"name": "Quiz 1: Intro",
					"category": "Quiz",
					"due_date": "2024-02-10T00:00:00.000Z",
					"completed": false
				},
				{
					"name": "Midterm Exam",
					"category": "Exam",
					"due_date": "2024-03-15T00:00:00.000Z",
					"completed": false
				},
				{
					"name": "Assignment 2: Linear Regression",
					"category": "Assignment",
					"due_date": "2024-04-05T00:00:00.000Z",
					"completed": false
				},
				{
					"name": "Quiz 2: Linear Regression",
					"category": "Quiz",
					"due_date": "2024-04-15T00:00:00.000Z",
					"completed": false
				},
				{
					"name": "Midterm Exam 2",
					"category": "Exam",
					"due_date": "2024-05-20T00:00:00.000Z",
					"completed": false
				},
				{
					"name": "Assignment 3: Scikit Learn",
					"category": "Assignment",
					"due_date": "2024-06-01T00:00:00.000Z",
					"completed": false
				},
				{
					"name": "Quiz 3: Scikit Learn",
					"category": "Quiz",
					"due_date": "2024-06-10T00:00:00.000Z",
					"completed": false
				}
			]
		case "CPSC 340":
			return [
				{
					"name": "Project Proposal",
					"category": "Assignment",
					"due_date": "2024-01-25T00:00:00.000Z",
					"completed": false
				},
				{
					"name": "Quiz 2: Matrix Algebra",
					"category": "Quiz",
					"due_date": "2024-02-15T00:00:00.000Z",
					"completed": false
				},
				{
					"name": "Midterm Exam",
					"category": "Exam",
					"due_date": "2024-03-20T00:00:00.000Z",
					"completed": false
				},
				{
					"name": "Assignment 2: Neural Networks",
					"category": "Assignment",
					"due_date": "2024-04-10T00:00:00.000Z",
					"completed": false
				},
				{
					"name": "Quiz 3: Linear Regression",
					"category": "Quiz",
					"due_date": "2024-04-25T00:00:00.000Z",
					"completed": false
				},
				{
					"name": "Midterm Exam 2",
					"category": "Exam",
					"due_date": "2024-05-30T00:00:00.000Z",
					"completed": false
				},
				{
					"name": "Assignment 3: Linear Regression",
					"category": "Assignment",
					"due_date": "2024-06-15T00:00:00.000Z",
					"completed": false
				},
				{
					"name": "Quiz 4: Neural Networks (cont.)",
					"category": "Quiz",
					"due_date": "2024-06-30T00:00:00.000Z",
					"completed": false
				}
			];
		case "CPSC 310":
			return [
				{
					"name": "Assignment 2",
					"category": "Assignment",
					"due_date": "2024-02-08T00:00:00.000Z",
					"completed": false
				},
				{
					"name": "Quiz 1",
					"category": "Quiz",
					"due_date": "2024-02-15T00:00:00.000Z",
					"completed": false
				},
				{
					"name": "Midterm Exam",
					"category": "Exam",
					"due_date": "2024-03-22T00:00:00.000Z",
					"completed": false
				}
			];
		case "CPSC 313":
			return [
				{
					"name": "Assignment 1: Intro to C",
					"category": "Assignment",
					"due_date": "2024-02-05T00:00:00.000Z",
					"completed": false
				},
				{
					"name": "Quiz 1: Intro to C",
					"category": "Quiz",
					"due_date": "2024-02-12T00:00:00.000Z",
					"completed": false
				},
				{
					"name": "Midterm 1 Exam",
					"category": "Exam",
					"due_date": "2024-03-18T00:00:00.000Z",
					"completed": false
				},
				{
					"name": "Assignment 2: Assembly",
					"category": "Assignment",
					"due_date": "2024-04-10T00:00:00.000Z",
					"completed": false
				},
				{
					"name": "Quiz 2: Assembly",
					"category": "Quiz",
					"due_date": "2024-04-15T00:00:00.000Z",
					"completed": false
				},
				{
					"name": "Midterm 2 Exam",
					"category": "Exam",
					"due_date": "2024-05-25T00:00:00.000Z",
					"completed": false
				},
				{
					"name": "Assignment 3: Virtual Memory",
					"category": "Assignment",
					"due_date": "2024-06-05T00:00:00.000Z",
					"completed": false
				},
				{
					"name": "Quiz 3: Virtual Memory",
					"category": "Quiz",
					"due_date": "2024-06-12T00:00:00.000Z",
					"completed": false
				}
			];
		default:
			return [];
	}
}


export default function Map() {
	const mapRef = useRef<HTMLDivElement | null>(null);
	const venue: Mappedin | undefined = useVenue(options);
	const { mapView, popupVisible, popupPosition, selectedRoom } = useMapView(mapRef.current, venue);

  return (
    <div>
      <div ref={mapRef} className="map-container" />
		{(popupVisible && (
		  <div
		      className={"map-popup fadeIn"}>
		    <CourseTable id={selectedRoom} key={selectedRoom} courseDataProp={getCourseData(selectedRoom)} />
		  </div>
		))}
    </div>
  );
}
