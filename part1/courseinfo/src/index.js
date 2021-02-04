import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => (
  <div>
    <h1>{props.course}</h1>
  </div>
)

const Part = (props) => (
  <div>
    <p>
      {props.partName} {props.exerciseCount}
    </p>
  </div>
)

const Content = (props) => (
  <div>
    <Part partName={props.part1.name} exerciseCount={props.part1.exercises} />
    <Part partName={props.part2.name} exerciseCount={props.part2.exercises} />
    <Part partName={props.part3.name} exerciseCount={props.part3.exercises} />
  </div>
)

const Total = (props) => (
  <div>
    <p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
  </div>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = { 
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2 ={part2} part3={part3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));