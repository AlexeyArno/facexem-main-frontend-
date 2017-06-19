import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import MainDecodeWorkDisplay from '../modules.js'

export default class Tasks extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	
		    };
		  }

render(){
	
	return(<div>
			<Paper style={{padding: 15, textAlign: 'center', marginTop: 20}}>
				{this.props.pos+1}
			</Paper>
		</div>

		

		   )

}



}