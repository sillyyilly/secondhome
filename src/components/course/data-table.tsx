import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	useReactTable,
} from "@tanstack/react-table"

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"

import '../../../app/globals.css'
import { useState } from "react"
import { Progress } from "../ui/progress"

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[]
	data: TData[]
}

export function DataTable<TData, TValue>({
	columns,
	data,
}: DataTableProps<TData, TValue>) {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel()
	})

	// const [progress, setProgress] = useState(0);
	//
	// const updateProgress = () => {
	// 	setProgress(table.getFilteredSelectedRowModel().rows.length / table.getFilteredRowModel().rows.length * 100)
	// }

	return (
		<>
			<div className="text-right italic font-light text-sm mb-1">Overall Progress</div>
			<Progress className="mb-4" value={table.getFilteredSelectedRowModel().rows.length / table.getFilteredRowModel().rows.length * 100} />
		<div className="rounded-md border" >
			<Table>
				<TableHeader>
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								return (
									<TableHead key={header.id} className="text-center">
										{header.isPlaceholder
											? null
											: flexRender(
												header.column.columnDef.header,
												header.getContext()
											)}
									</TableHead>
								)
							})}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map((row) => (
							<TableRow
								key={row.id}
								data-state={row.getIsSelected() && "selected"}
							>
								{row.getVisibleCells().map((cell) => (
									<TableCell className="text-center"
										key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell colSpan={columns.length} className="h-24 text-center">
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
			<div className="flex-1 text-sm text-muted-foreground">
			</div>
		</div>
		</>
	)
}

