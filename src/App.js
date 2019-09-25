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
      type: ''
    }
    this.getCharacters = this.getCharacters.bind(this);
    this.getQueryData = this.getQueryData.bind(this);
    this.getType = this.getType.bind(this);
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

  getType(event) {
    const type = event.currentTarget.value;
    this.setState({
      type: type
    })
  }

  render() {
    const { characters, queryData, type } = this.state;
    return (
      <div className="app">
        <h1 className="main__title">Rick and Morty</h1>
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <CharacterHome
                getQueryData={this.getQueryData}
                getType={this.getType}
                queryData={queryData}
                characters={characters}
                type= {type}
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
