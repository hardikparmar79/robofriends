import React, {Component} from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/searchbox';
import Scroll from '../components/Scroll.js';

class App extends Component {
constructor() {
	super()
	this.state = {
		robots:[],
		searchfield: ''
	}
}
	componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(users => this.setState({ robots : users}));
	}

 	onSearchChange = (event) => {
 	this.setState({ searchfield: event.target.value});
 	}

	render(){
	const filteredRobots = this.state.robots.filter(robots => {
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	})
	
	if (this.state.robots.length===0){
		return <h1 className="light-green">Loading...</h1> 
	} else {
		return(
		<div className="tc">
			<h1 className="light-green">RoboFriends</h1>
			<Searchbox SearchChange={this.onSearchChange}/>
			<br/>
			<Scroll>
    			<CardList robots={ filteredRobots }/>
    		</Scroll>
    	</div>
		);
	}
	}
}

export default App;