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
        <h1 className="main__title">Rick and Morty</h1>
        <ol className="main__list-characters">
          {characters.map(item => {
            return (
              <li className="list__char" key={item.id}>
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
    );
  }
}

export default App;
