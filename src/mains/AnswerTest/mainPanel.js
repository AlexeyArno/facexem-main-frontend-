import React, { Component } from 'react';
import Links from  './main-panel/links.js'
import Tasks from './main-panel/tasks.js'


export default class MainPanel extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	pos: 0
		    };
		  }
		  changePos=(i)=>{
		  	this.setState({
		  		pos: i
		  	})
		  }

render(){
	console.log(this.props.data)
	return(<div>
			<Links data={this.props.data} changePos={this.changePos} pos={this.state.pos}/>
			<Tasks pos={this.state.pos}/>
		</div>

		

		   )

}



}