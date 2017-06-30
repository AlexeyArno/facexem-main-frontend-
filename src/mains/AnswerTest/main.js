import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import UpPanel from './upPanel.js' 
import MainPanel from './mainPanel.js'

export default class AnswerMainPaper extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	
		    };
		  }


render(){
	console.log(this.props.data)
	return(<div >
				<Paper style={{margin: 12, padding: 15}} zDepth={1} >
					<UpPanel data={this.props.data.main}/>
					<MainPanel data={this.props.data.detail} token={this.props.token}/>
				</Paper>
			</div>

		

		   )

}



}