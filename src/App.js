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
      });
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
      <div className="app">
        <h1 className="main__title">Rick and Morty</h1>
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <CharacterHome
                getQueryData={this.getQueryData}
                queryData={queryData}
                characters={characters}
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
