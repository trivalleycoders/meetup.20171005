// App
import React, { Component } from 'react';
import './style.css';
import Header from './Header'

// Class Component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birds: [
          {
            name: 'Blue Jay',
            color: 'blue',
          },
          {
            name: 'Red Robbin',
            color: 'red',
          }
        ],
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
      </div>
    );
  }
}

export default App;
