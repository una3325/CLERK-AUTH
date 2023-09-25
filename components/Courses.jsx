import Link from 'next/link'
import React from 'react'

// async function fetchCourses() {
//  const url = 'http://localhost:3000/api/courses'
//  const response = await fetch(url)
//  const courses = response.json()
//  return courses
// }

const Courses = async ({ courses }) => {
  //  const courses = await fetchCourses()
  return (
    <div className="grid-1">
      {courses?.map((course) => (
        <div key={course.id} className="bg-blue-200 p-4 m-4 rounded-lg">
          <h2>{course.title}</h2>
          <small>Level: {course.level}</small>
          <p className="mb-4">{course.description}</p>
          <Link
            href={course.link}
            className="py-2 px-4 bg-blue-700 text-white rounded-lg mb-4 hover:bg-blue-800"
          >
            Go to Course
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Courses
