import React from 'react';
import { fetchCharacters } from './services/fetchCharacters';
import CharacterHome from './components/CharacterHome';
import CharacterDetail from './components/CharacterDetail';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      queryData: '',
      gender: 'all'
    }
    this.getCharacters = this.getCharacters.bind(this);
    this.getQueryData = this.getQueryData.bind(this);
    this.getFilter = this.getFilter.bind(this);
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
      });
  }

  getQueryData(event) {
    const queryData = event.currentTarget.value;
    this.setState({
      queryData: queryData
    });
  }
  getFilter(event) {
    const newGender = event.currentTarget.value;
    this.setState({
      gender: newGender
    });
  }

  render() {
    const { characters, queryData, gender } = this.state;
    return (
      <div className="app">
        <h1 className="main__title">Rick and Morty</h1>
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <CharacterHome
                getQueryData={this.getQueryData}
                queryData={queryData}
                characters={characters}
                gender={gender}
                getFilter={this.getFilter}
              />
            );
          }} />
          <Route path="/Char-detail/:charId" render={routerProps => {
            return (
              <CharacterDetail
                routerProps={routerProps}
                characters={characters}
              />
            );
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;
