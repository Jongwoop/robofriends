import React, { Component } from 'react';
import CardList from '../components/CardList';
// import { robots } from './robots'
import SearchBox from '../components/SearchBox'
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users}))
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value})
    
  }

  render() {
    const {robots, searchfield} = this.state
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return (!robots.length)? 
      <h1>Loading</h1>:
      (
        <div className = 'tc'>  
          <h1 className = 'f1'>RoboFriends</h1>
          <SearchBox searchChange = {this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots = {filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      )
  }
}



export default App;

// componentDidMount() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response=>{
//       return response.json();})
//     .then(users => {
//       this.setState({ robots: users})
//     })
// }

//1.  robots.length === 0 => !robots.length

//2. 
//  if (!robots.length) {
//   return <h1>Loading</h1>
// } else {

// final cleaning - this.state

// render() {
//   const {robots, searchfield} = this.state 
//   const filteredRobots = this.state.robots.filter(robot =>{
//     return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
//   })
//   if (this.state.robots.length === 0) {
//     return <h1>Loading</h1>
//   } else {
//     return (
//       <div className = 'tc'>  
//         <h1 className = 'f1'>RoboFriends</h1>
//         <SearchBox searchChange = {this.onSearchChange}/>
//         <Scroll>
//           <CardList robots = {filteredRobots}/>
//         </Scroll>
//       </div>
//     )
//   }
// }
// }



// this.state = {
//   robots: robots,
//   searchfield: ''



// const state = {
//   robots: robots,
//   searchfield: ''
// }

// <CardList robots = {robots}/>
