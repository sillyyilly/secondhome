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

	const getCourseData = (id: string) => {
		switch (id) {
			case "CPSC 330":
				return [
					{
						"name": "Assignment 1",
						"category": "assignments",
						"due_date": "2024-02-01T00:00:00.000Z",
						"completed": false
					},
					{
						"name": "Quiz 1",
						"category": "quizzes",
						"due_date": "2024-02-10T00:00:00.000Z",
						"completed": true
					},
					{
						"name": "Midterm Exam",
						"category": "exams",
						"due_date": "2024-03-15T00:00:00.000Z",
						"completed": false
					},
					{
						"name": "Assignment 2",
						"category": "assignments",
						"due_date": "2024-04-05T00:00:00.000Z",
						"completed": false
					},
					{
						"name": "Quiz 2",
						"category": "quizzes",
						"due_date": "2024-04-15T00:00:00.000Z",
						"completed": false
					},
					{
						"name": "Final Exam",
						"category": "exams",
						"due_date": "2024-05-20T00:00:00.000Z",
						"completed": false
					},
					{
						"name": "Assignment 3",
						"category": "assignments",
						"due_date": "2024-06-01T00:00:00.000Z",
						"completed": false
					},
					{
						"name": "Quiz 3",
						"category": "quizzes",
						"due_date": "2024-06-10T00:00:00.000Z",
						"completed": false
					}
				]
			case "CPSC 340":
				return [
					{
						"name": "Project Proposal",
						"category": "assignments",
						"due_date": "2024-01-25T00:00:00.000Z",
						"completed": true
					},
					{
						"name": "Quiz 2",
						"category": "quizzes",
						"due_date": "2024-02-15T00:00:00.000Z",
						"completed": false
					},
					{
						"name": "Midterm Exam",
						"category": "exams",
						"due_date": "2024-03-20T00:00:00.000Z",
						"completed": false
					},
					{
						"name": "Assignment 2",
						"category": "assignments",
						"due_date": "2024-04-10T00:00:00.000Z",
						"completed": false
					},
					{
						"name": "Quiz 3",
						"category": "quizzes",
						"due_date": "2024-04-25T00:00:00.000Z",
						"completed": false
					},
					{
						"name": "Final Exam",
						"category": "exams",
						"due_date": "2024-05-30T00:00:00.000Z",
						"completed": false
					},
					{
						"name": "Assignment 3",
						"category": "assignments",
						"due_date": "2024-06-15T00:00:00.000Z",
						"completed": false
					},
					{
						"name": "Quiz 4",
						"category": "quizzes",
						"due_date": "2024-06-30T00:00:00.000Z",
						"completed": false
					}
				];
			case "CPSC 310":
				return [
					{
						"name": "Assignment 2",
						"category": "assignments",
						"due_date": "2024-02-08T00:00:00.000Z",
						"completed": false
					},
					{
						"name": "Quiz 1",
						"category": "quizzes",
						"due_date": "2024-02-15T00:00:00.000Z",
						"completed": false
					},
					{
						"name": "Midterm Exam",
						"category": "exams",
						"due_date": "2024-03-22T00:00:00.000Z",
						"completed": false
					}
				];
			case "CPSC 313":
				return [
					{
						"name": "Homework 1",
						"category": "assignments",
						"due_date": "2024-02-05T00:00:00.000Z",
						"completed": true
					},
					{
						"name": "Quiz 1",
						"category": "quizzes",
						"due_date": "2024-02-12T00:00:00.000Z",
						"completed": true
					},
					{
						"name": "Midterm Exam",
						"category": "exams",
						"due_date": "2024-03-18T00:00:00.000Z",
						"completed": false
					},
					{
						"name": "Homework 2",
						"category": "assignments",
						"due_date": "2024-04-10T00:00:00.000Z",
						"completed": false
					},
					{
						"name": "Quiz 2",
						"category": "quizzes",
						"due_date": "2024-04-15T00:00:00.000Z",
						"completed": false
					},
					{
						"name": "Final Exam",
						"category": "exams",
						"due_date": "2024-05-25T00:00:00.000Z",
						"completed": false
					},
					{
						"name": "Homework 3",
						"category": "assignments",
						"due_date": "2024-06-05T00:00:00.000Z",
						"completed": false
					},
					{
						"name": "Quiz 3",
						"category": "quizzes",
						"due_date": "2024-06-12T00:00:00.000Z",
						"completed": false
					}
				];
			default:
				return [];
		}
	}

	return (
	<>
		<div className="text-2xl text-black text-left">{ id }</div>
		<div className="container mx-auto py-10">
			<DataTable columns={columns} data={courseDataProp} />
		</div>
	</>
	)
}
