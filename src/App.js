import React from 'react';
import { fetchCharacters } from './services/fetchCharacters';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: []
    }
    this.getCharacters = this.getCharacters.bind(this);
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

  render() {
    const { characters } = this.state;
    return (
      <div className="app">

        <ol className="main__list-characters">
          {characters.map(item => {
            return (
              <li className="list__char" key={item.id}>
                <div className="box__name">
                  <h1 className="title__name">{item.name}</h1>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default App;
