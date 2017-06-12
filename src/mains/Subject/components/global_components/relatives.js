import React, { Component } from 'react';
import MapsPlace from 'material-ui/svg-icons/maps/place'
import ActionDone from 'material-ui/svg-icons/action/done'
import ContentClear from 'material-ui/svg-icons/content/clear'

export default class Relatives extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	
		    };
		  }

render(){
	var solve = this.props.solve
	var unsolve = this.props.unsolve
	var corner = solve/(solve+unsolve)*180+180
	return(<div style={{padding: 15}}>
				<div>
					<div style={{float: 'left'}}>
						<div style={{textAlign: 'center'}}>{solve}</div>
						<ActionDone color="#8cb8ff"/>
					</div>
					<div style={{float: 'right'}}>
						<div style={{textAlign: 'center'}}>{unsolve}</div>
						<ContentClear color="#d8d8d8"/>
					</div>
				</div>
				<div style={{maxHeight: 60, overflow: 'hidden'}}>
					<div style={{background: '#d8d8d8', height: 120, width: 120, borderRadius: 60, margin: 'auto', paddingTop: 10}}>
						<div style={{background: '#fff', height: 100, width: 100, borderRadius: 50, margin: 'auto'}}>
						</div>
					</div>
					<div style={{position: 'relative', bottom: 120, transform: "rotate("+corner+"deg)", minHeight: 120}}>
						<div style={{ overflow: "hidden", maxHeight: 60}}>
							<div style={{background: '#8cb8ff', height: 120, width: 120, borderRadius: 60, margin: 'auto', paddingTop: 10}}>
								<div style={{background: '#fff', height: 100, width: 100, borderRadius: 50, margin: 'auto'}}>
								</div>
							</div>
						</div>
					</div>
					<div style={{background: '#fff', height: 100, width: 100, borderRadius: 50,
						 margin: 'auto', position: 'relative', bottom: 230, textAlign: 'center'}}>
					</div>
				</div>
				<div style={{fontSize: 12, color: 'rgb(115, 135, 156)', textAlign: 'center', marginTop: 5}}>Соотношение заданий</div>
			</div>

		

		   )

}



}