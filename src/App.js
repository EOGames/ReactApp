import './index.css';
import CardList from './CardList.js';
import React from 'react';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends React.Component {

  constructor()
  {
    super()
    this.state = {
      robots:robots,
      searchfield: ''          
    }
  }
  onSearchChange = (event) =>
  {
    this.setState({searchfield: event.target.value});
    console.log(event.target.value); 
  }
  render()
  {

    const fillteredList = this.state.robots.filter (robo =>
    {      
      return robo.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

  return (
    <div>

        <h1 className='center'>Robots</h1>
        <SearchBox className =".searchBox" searchChange ={this.onSearchChange} />
           <div className="App">
             <CardList robots = {fillteredList} />
           </div>
    </div>
     );
  }
}

export default App;
