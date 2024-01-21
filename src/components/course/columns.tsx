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
	// due_date: Date;
	due_date: string;
	completed: boolean;
}

const categories = ["Assignment", "Quiz", "Exam", "Project", "Other"];

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
				<Select defaultValue={row.getValue("category")} >
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Category" />
					</SelectTrigger>
					<SelectContent>
					{ categories.map((cat) => <SelectItem value={cat} key={cat}>{cat}</SelectItem> , row)}
					</SelectContent>
				</Select>
			)
		}
	},
	{
		accessorKey: "due_date",
		header: "Date",
		cell: ({ row }) => {
			const date: string = row.getValue("due_date");
			return new Date(date).toLocaleDateString();
		}
	},
	{
		accessorKey: "completed",
		header: "Complete",
		cell: ({ row }) => {
			return <Checkbox 
				defaultChecked={row.getValue("completed")}
				key={row.id + row.getValue("name")}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
			/>
		}
	}
]
