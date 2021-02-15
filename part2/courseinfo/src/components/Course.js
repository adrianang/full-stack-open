import React from 'react';

const Header = ({ course }) => (
  <div>
    <h1>{course.name}</h1>
  </div>
)

const Part = (props) => (
  <div>
    <p>
      {props.partName} {props.exerciseCount}
    </p>
  </div>
)

const Content = ({ course }) => (
  <div>
    {course.parts.map((part) =>
      <Part partName={part.name} exerciseCount={part.exercises} key={part.id} />
    )}
  </div>
)

const Total = ({ course }) => {
  const totalCount = course.parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <div>
      <strong>total of {totalCount} exercises</strong>
    </div>
  )
}

const Course = ({ course }) => (
  <div>
    <Header course={course} />
    <Content course={course} />
    <Total course={course} />
  </div>
)

export default Course;