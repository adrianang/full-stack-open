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

const Content = (props) => {
  console.log(props)
  return (
  <div>
    <Part partName={props.course.parts[0].name} exerciseCount={props.course.parts[0].exercises} />
    <Part partName={props.course.parts[1].name} exerciseCount={props.course.parts[1].exercises} />
    <Part partName={props.course.parts[2].name} exerciseCount={props.course.parts[2].exercises} />
  </div>
  )
}

const Total = (props) => (
  <div>
    <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
  </div>
)

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { 
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));