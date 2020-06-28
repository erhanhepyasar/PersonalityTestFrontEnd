import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  } 

  componentDidMount() {
    var urlApp = 'http://localhost:8085/api/question'
    fetch(urlApp)
          .then(res => res.json())
          .then(json => {
                this.setState({
                  isLoaded: true,
                  items: json,
                })
          });
  }

  render() {
    var { isLoaded, items } = this.state;

   
    
    if(!isLoaded) {
      return <div>Loading...</div>
    }
    
    return (  
      <div className="App">
          <div className="App-header">Personality Test</div>
          <ol>
              {items.map(item => (
                <li key={item.id}>
                    {item.questionText} <br/>
                    Category: {item.category.name} <br/>
                    Options:
                    <ul>
                      {item.options.map(opt => (
                        <li>
                          {opt.optionText}
                        </li>
                      ))} 
                    </ul>
                </li>
              ))}
          </ol>
      </div>
    );

  }
}



export default App;
