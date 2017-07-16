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
	console.log(this.props.data)
	return(<div >
				<div className="col-xs-12 col-sm-4 paper variants">
					<Paper style={paper_style}> 
							<Points data={this.props.data.test_info}/>
					</Paper>

				</div>
				<div className="col-xs-12 col-sm-4 paper variants" >
					<Paper style={paper_style}>
						<Tasks data={this.props.data.task_info.solve_tasks}/>
					</Paper>

				</div>
				<div className="col-xs-12 col-sm-4 paper variants" >
					<Paper style={paper_style}>
						<Relatives solve={this.props.data.task_info.solve_tasks} unsolve={this.props.data.task_info.unsolve_tasks}/>
					</Paper>

				</div>
		
		   </div>)

}



}