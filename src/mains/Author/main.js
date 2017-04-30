import React, { Component } from 'react';
import GlobalStaticAuthor from './components/globalStatic.js'

export default class Main extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	
		    };
		  }

render(){
	
	return(<div className='contentRow'>
				<GlobalStaticAuthor/>
		

		   </div>)

}



}