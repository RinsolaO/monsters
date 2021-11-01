import React, { Component } from "react";
import CardList from "./components/card-list/CardList";
import "./App.css";
import Searchbox from "./components/search-box/Searchbox";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        this.setState({ isLoading: true });
        if (!res.ok) {
          throw Error(console.log("Couldn't Load EndPoint"));
        } else {
          return res.json();
        }
      })
      .then((users) => {
        this.setState({ monsters: users });
        this.setState({ isLoading: false });
        this.setState({ error: null });
      })
      .catch((err) => {
        this.setState({ error: Error });
        this.setState({ isLoading: false });
      });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField, isLoading, error } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Frenzy Monsters</h1>
        <Searchbox
          placeholder="search a monster"
          className="search-field"
          onChange={this.handleChange}
        />
        {isLoading && <h1> Loading...</h1>}
        {error && <h1> Please Check That You Have An Active Connection</h1>}

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
