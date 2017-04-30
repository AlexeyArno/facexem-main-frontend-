import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import StatiscGraph from './components/staticGraph.js'



export default class SubjectRow extends Component{
	
	render(){
		const style={
			// background: 'url(http://localhost:3000/physic-bg.gif)',
			backgroundSize: '60%',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			height: 150
		}
		var dataSubject=[
		{
			toollip: 'Учи физику, и все будет хорошо'
		}
		]
		return(	
			<div>
					<Paper className="UserRow" style={style}>
						<StatiscGraph data={this.props.data}/>

					</Paper>

	</div>)

	}
}