import React, { Component } from 'react';
import ActionDoneAll from 'material-ui/svg-icons/action/done-all'


export default class Tasks extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	
		    };
		  }

render(){
	
	return(<div style={{textAlign: 'center', paddingTop:0}}>
			<div style={{paddingLeft: 40, marginBottom: -2}}>
				<div style={{display:'inline-block', fontSize: 35}}>{this.props.data}</div>
				<ActionDoneAll style={{display:'inline-block', position: 'relative', top: 5, width: 40, height: 40}} color="#9ee05c"/>
			</div>
			<div style={{color: 'rgb(115, 135, 156)', fontSize: 12}}>Выполнено заданий</div>
			</div>

		

		   )

}



}