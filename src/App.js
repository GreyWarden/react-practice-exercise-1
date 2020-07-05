import React, {Component} from 'react';
import './App.css';
import UserInput from './Components/UserInput/UserInput'
import UserOutput from './Components/UserOutput/UserOutput'

class App extends Component {
  state = {
    name: 'Piter'
  }

  onNameChangeHandler (event) {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
        <div className="App">
          <h1>Hi! Please enter your name and it will be shown down below!</h1>
          <div className='InputOutputContainer'>
            <UserOutput
                styleClasses='Output'
                name={ this.state.name }
            />
            <UserInput
                styleClasses='Input'
                value={ this.state.name }
                onChangeHandler={ this.onNameChangeHandler.bind(this) }
            />
          </div>
        </div>
    );
  }
}

export default App;
