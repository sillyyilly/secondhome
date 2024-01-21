import { useEffect, useState } from "react";
import { CourseItem, columns } from "./course/columns"
import { DataTable } from "./course/data-table"

type CourseTableProps = {
	id: string
}

export default function CourseTable({ id }: CourseTableProps) {
	id; // silence the warnings...

	const [courseData, setCourseData] = useState<CourseItem[]>([]);
	const getCourseData = async () => {
		return [
			{
				name: "Assignment 1",
				category: "Computer Science",
				date: new Date(),
				complete: false,
			},
			{
				name: "Assignment 2",
				category: "Computer Science",
				date: new Date(),
				complete: true,
			},
		];
	}


	useEffect(() => {
		getCourseData().then((data) => {
			setCourseData(data);
		});
	})

	return (
		<div className="container mx-auto py-10">
			<DataTable columns={columns} data={courseData} />
		</div>
	)
}
