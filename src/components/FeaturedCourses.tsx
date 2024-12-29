'use client';
import courseData from '../data/music_courses.json';
import Link from 'next/link';
import { BackgroundGradient } from './ui/background-gradient';

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured);

  return (
    <div className="py-16 bg-black">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">Featured Courses</h2>
        <p className="text-lg text-gray-400 mt-2">Learn with the best instructors</p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-14">
        {featuredCourses.map((course: Course) => (
          <BackgroundGradient
            key={course.id}
            className="rounded-3xl p-8 bg-white dark:bg-zinc-900 shadow-lg transition-transform transform hover:scale-105"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{course.title}</h3>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">{course.description}</p>
            <p className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-300">${course.price}</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Instructor: {course.instructor}</p>
            <Link
              href={`/courses/${course.slug}`}
              className="mt-6 inline-block text-blue-500 hover:text-blue-700 font-medium transition-colors"
            >
              Learn More
            </Link>
          </BackgroundGradient>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/courses"
          className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
