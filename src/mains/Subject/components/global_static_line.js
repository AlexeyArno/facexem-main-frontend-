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

	return(<div >
				<div className="col-xs-12 col-sm-4 paper variants">
					<Paper style={paper_style}> 
							<Points data={this.props.data}/>
					</Paper>

				</div>
				<div className="col-xs-12 col-sm-4 paper variants" >
					<Paper style={paper_style}>
						<Tasks data={this.props.data.solve_tasks}/>
					</Paper>

				</div>
				<div className="col-xs-12 col-sm-4 paper variants" >
					<Paper style={paper_style}>
						<Relatives solve={this.props.data.solve_tasks} unsolve={this.props.data.unsolve_tasks}/>
					</Paper>

				</div>
		
		   </div>)

}



}