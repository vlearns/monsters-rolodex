import "./App.css";
import React, { Component } from "react";
import { CardList } from './components/card-list/card-list.component'
//import Form from "./Form";
import { SearchBox } from './components/search-box/search-box.component'
import State from "./State";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
      title:''
    };

    // Method 1 Part of Video #44
    //this.handleChange = this.handleChange.bind(this)

  }
  //#30 Fetching Content
  /*
  componentDidMount
  when this component mounts, when it renders it onto the DOM for the first time
  */
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  //Method 1 Function
  // handleChange(e){
  //   this.setState({ searchField: e.target.value })
  // }


  //Method 2 Arrow Function does not need the binding above which is required in Method 1
  //Lexical scope
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }


  render() {
    const { monsters, searchField, title } = this.state;
    // const filteredMonsters = monsters.filter(monster =>
    //   monster.name.toLowerCase().includes(searchField.toLowerCase())
    // )

    return (
      
      //if you don't put key={monster.id} then you will get Warning: Each child in a list should have a unique "key" prop
      <div className="App">
        {/* <input type="search" placeholder="Search Monsters" onChange={ e => this.setState({ searchField: e.target.value })}/> */}
        {/* <h1>Monsters Rolodex</h1> */}
        <h1>{ title }</h1>
        <SearchBox
          placeholder='Search Monsters'
          handleChange={e => this.setState({ searchField: e.target.value, title: e.target.value })}
        />
        {/* Pass in monsters as a prop from the app component */}
        <CardList
          // monsters={filteredMonsters}
          monsters={monsters}
          onChange={this.handleChange}
          // onChange={e => this.setState({ searchField: e.target.value })}
        />
        {/* Commented part below gets moved into the card-list component file after the above statement */}
        {/* {this.state.monsters.map(monster => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))} */}
        {/* </CardList> */}

        {/* <Form /> */}
        <State increment={1}/>
      </div>
    );
  }
}

// onChange={ e => {this.setState({ searchField: e.target.value}); console.log(this.state)}} makes the search one letter slower
// <input type="search" placeholder="Search Monsters" onChange={ e => {this.setState({ searchField: e.target.value },  () => console.log(this.state));}}/> makes the search accurate w callback




export default App;
      // Write curly braces whenever you want to render JS
      //MAP returns us the return of whatever function we pass to.
