import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "../ui/checkbox";
import "./columns.css"

export type CourseItem = {
	name: string;
	category: string;
	date: Date;
	complete: boolean;
}

export const columns: ColumnDef<CourseItem>[] = [
{
	accessorKey: "name",
	header: "Name",
},
{
	accessorKey: "category",
	header: "Category",
},
{
	accessorKey: "date",
	header: "Date",
	cell: ({ row }) => {
		const dt: Date = row.getValue("date");
		return dt.toLocaleDateString();
	}
},
{
	accessorKey: "complete",
	header: "Complete",
	cell: ({ row }) => {
		const complete: boolean = row.getValue("complete");
		return <Checkbox className="tCheckbox" id={row.id} />
	}
}
]
