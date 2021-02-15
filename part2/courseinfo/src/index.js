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

// const Total = (props) => (
//   <div>
//     <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
//   </div>
// )

const Course = ({ course }) => (
  <div>
    <Header course={course} />
    <Content course={course} />
    {/* <Total course={course} />  */}
  </div>
)

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));