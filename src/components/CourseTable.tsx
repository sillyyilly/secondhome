import { CourseItem, columns } from "./course/columns"
import { DataTable } from "./course/data-table"

export default function CourseTable() {
	const data: CourseItem[] = [
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
			complete: false,
		},
	];
	return (
		<div className="container mx-auto py-10">
			<DataTable columns={columns} data={data} />
		</div>
	)
}
