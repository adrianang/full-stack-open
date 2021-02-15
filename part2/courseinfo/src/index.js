import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => (
  <div>
    <h1>{props.course.name}</h1>
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
      <strong>total of { totalCount } exercises</strong>
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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        { 
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map((course) =>
        <Course course={course} key={course.id} />
      )}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));