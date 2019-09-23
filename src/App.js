import React from 'react';
import { fetchCharacters } from './services/fetchCharacters';
import Filters from './components/Filters';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      queryData: ''
    }
    this.getCharacters = this.getCharacters.bind(this);
    this.getQueryData= this.getQueryData.bind(this);
  }
  componentDidMount() {
    this.getCharacters();
  }

  getCharacters() {
    fetchCharacters()
      .then(data => {
        this.setState({
          characters: data.results
        });
      })
  }

  getQueryData(event) {
    const queryData = event.currentTarget.value;
    this.setState({
      queryData: queryData
    });
  }

  render() {
    const {characters, queryData} = this.state;
    return (
      <React.Fragment>
      <div className="app">
        <h1 className="main__title">Rick and Morty</h1>
        <Filters 
            getQueryData={this.getQueryData}
            queryData={this.queryData}
            />
        <ol className="main__list-characters">
          {characters
          .filter(filterChar => filterChar.name.toUpperCase().includes(queryData.toUpperCase()))
          .map(item => {
            return (
              <li className="list__characters" key={item.id}>             
                <div className="box__name">
                  <div><img src={item.image} alt={item.name} /></div>
                  <h2 className="title__name">{item.name}</h2>
                  <h3 className="">{item.species}</h3>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
