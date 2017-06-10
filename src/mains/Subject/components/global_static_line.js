import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Points from './global_components/points.js'
import Relatives from './global_components/relatives.js'
import Tasks from './global_components/tasks.js'

export default class GlobalStaticLine extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	
		    };
		  }

render(){
	const paper_style ={
		height: 100

	}
	const content_style= {
		position: 'absolute',
		top: 0
	}
	return(<div >
				<div className="col-xs-12 col-sm-4 paper variants">
					<Paper style={paper_style}> 
							<Points/>
					</Paper>

				</div>
				<div className="col-xs-12 col-sm-4 paper variants" >
					<Paper style={paper_style}>
						<Tasks/>
					</Paper>

				</div>
				<div className="col-xs-12 col-sm-4 paper variants" >
					<Paper style={paper_style}>
						<Relatives/>
					</Paper>

				</div>
		
		   </div>)

}



}