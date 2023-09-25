import { NextResponse } from 'next/server'
import courses from '../data.json'

export async function GET(request) {
  const { searchParms } = new URL(request.url)
  const query = searchParms.get('query')
  const filteredCourses = courses.filter((course) => {
    return course.title.toLowerCase().includes(query.toLowerCase())
  })
  return NextResponse.json(filteredCourses)
}
