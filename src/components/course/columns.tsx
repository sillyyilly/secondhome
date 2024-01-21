import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "../ui/checkbox";
import './columns.css'

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

import "../../../app/globals.css"


export type CourseItem = {
	name: string;
	category: string;
	date: Date;
	complete: boolean;
}

const categories = ["Assigmnent", "Quiz", "Exam", "Project", "Other"];

export const columns: ColumnDef<CourseItem>[] = [
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		accessorKey: "category",
		header: "Category",
		cell: ({ row }) => {
			return (
				<Select>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Category" />
					</SelectTrigger>
					<SelectContent>
					{ categories.map((cat) => <SelectItem value={cat}>{cat}</SelectItem> , row)}
					</SelectContent>
				</Select>
			)
		}
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
			return <Checkbox 
				checked={row.getIsSelected()}
				id={row.id}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
			/>
		}
	}
]
