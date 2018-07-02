import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render () {
    const helloWorld = 'Welcome to the Road to learn React'
    const user = {first: 'Seung', last: 'Kwak'}
    console.log(Object.keys(user))
    var arr = Object.keys(user).map(function (i) {
      return user[i]
    })
    return (
      <div className='App'>
        <h2>{helloWorld}</h2> <br />
        {arr} <br />
        <Title children='qwer' />
        <Title>Hello world</Title> <br />
        {user.first}
        <Search />
      </div>
    )
  }
}

// class Search extends Component {
//   constructor (props) {
//     super(props)

//     state = {
//       searchTerm: ''
//     }
//   }
//   searchUpdated (term) {
//     this.setState({ searchTerm: event.target.value })
//   }
// }

class Search extends Component {
  state = {
    query: '',
  }
 
  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }
 
  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </form>
    )
  }
}

function Title (props) {
  return (
    <h1 className='lots-of-styles-here'>
      <strong>
        <i className='something-else'>
          {console.log(props)}
          { props.children }
        </i>
      </strong>
    </h1>
  )
}

export default App
