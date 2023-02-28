import './index.css';
import CardList from './CardList.js';
import React from 'react';
// import { robots } from './robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll.js';
import ErrorBoundary from './ErrorBoundary';

class App extends React.Component {

  constructor()
  {
    super()
    this.state = {
      robots:[],
      searchfield: ''          
    }
  }

  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')

    .then(response=> response.json()).then(users=> this.setState({robots:users}));
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

    if (this.state.robots.length <= 0)
    {
      return <h1 className='center'> Loading...</h1>
    }
    else 
    {

      return (
        <div>

        <h1 className='center'>Robots</h1>
        <SearchBox className =".searchBox" searchChange ={this.onSearchChange} />
            <Scroll>
              <ErrorBoundary>
           <div className="App">
             <CardList robots = {fillteredList} />
            </div>
              </ErrorBoundary>
             </Scroll>

           
    </div>
     );
    }
  }
}

export default App;
