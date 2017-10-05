// App
import React, { Component } from 'react';
import './style.css';
import Header from './Header'
import Birds from './Birds'

// Class Component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
    }
  }
  componentDidMount() {
    fetch('https://ipinfo.io/json').then((response) => {
      return response.json().then((json) => {
        this.setState({
          city: json.city,
        })
      })
    });
  }
  render() {
    return (
      <div className="App">
        <h1>My React App</h1>
        <h2>I'm currently in {this.state.city}</h2>
        <Header />
        <Birds />
      </div>
    );
  }
}

export default App;
