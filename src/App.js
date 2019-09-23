import React from 'react';
import { fetchCharacters } from './services/fetchCharacters';
import {logo} from './logoRick.png'
import CharacterList from './components/CharacterList';
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
    this.getQueryData = this.getQueryData.bind(this);
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
    const { characters, queryData } = this.state;
    return (
      <React.Fragment>
        <div className="app">
          <h1 className="main__title">
            <img className="logo__title" src={logo} alt="Rick and Morty"></img>
          </h1>
          <Filters
            getQueryData={this.getQueryData}
            queryData={this.queryData}
          />
          <CharacterList
            characters={characters}
            queryData={queryData}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
