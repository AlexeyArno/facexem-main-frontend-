import React, { Component } from 'react';
import ActionLaunch from 'material-ui/svg-icons/action/launch'
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import Close from 'material-ui/svg-icons/navigation/close';


export default class ControlPanel extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	window: false
		    };
		  }

		  openChange=()=>{
				this.setState({
					window: !this.state.window
				})
			}

render(){
		const closeStyle={
			position: 'absolute',
			top: '18px',
			right: '20px'
		}
	var dialog1 = <Dialog
			          title="Объяснение"
			          open={this.state.window}
			          autoScrollBodyContent={true}
			          bodyClassName = 'dialogBodyTable'
			          onRequestClose={this.openChange}
			          contentStyle={{padding: 0,  maxWidth: 900, width: "90%"}}
			          autoDetectWindowHeight={false}
			          style ={{maxHeight: 500}}
			        >	
				        <IconButton onClick={this.openChange} style={closeStyle}><Close color='rgb(33, 150, 243)'/></IconButton>
				        {this.props.description}
			        </Dialog>
	
	return(	<div className='ControlPanelDescription'>
				<IconButton tooltip="Развернуть" onClick={this.openChange} className='deployDescription'>
						<ActionLaunch />
					</IconButton>
					{dialog1}
				</div>

		

		   )

}



}