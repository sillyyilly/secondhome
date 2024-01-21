import { useEffect, useState } from "react";
import { CourseItem, columns } from "./course/columns"
import { DataTable } from "./course/data-table"
import * as data from "../data.json"

type CourseTableProps = {
	id: string
	courseDataProp: any;
}

export default function CourseTable({ id, courseDataProp }: CourseTableProps) {
	// const [courseData, setCourseData] = useState<CourseItem[]>([]);

	return (
	<>
		<div className="text-2xl text-black text-left">{ id }</div>
		<div className="container mx-auto py-10">
			<DataTable columns={columns} data={courseDataProp} />
		</div>
	</>
	)
}
