import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Dialog from 'material-ui/Dialog';
import ContentTask from './contentTaskModal.js'
import IconButton from 'material-ui/IconButton';
import Close from 'material-ui/svg-icons/navigation/close';


export default class Random extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	open: false,
		    };
		  }
		 openTasks=()=>{
		 	 this.setState({open: !this.state.open});

		 }


render(){

	var styleBad={
			backgroundColor: 'rgb(247, 89, 89)',
			width: 100,
			height: 40,
			borderRadius: 20,
			color: '#fff',
			fontSize: 22,
			lineHeight: 2,
			margin: "auto",
			marginTop: 15,
			marginBottom: 15
		}

	var hr ={
		margin: "10px 40px",
		opacity: 0.1,
		border: "0.5px solid rgb(115, 135, 156)"
	}
	const closeStyle={
			position: 'absolute',
			top: '18px',
			right: '20px'
		}

	var last = 10
	return(<div>
				<ReactCSSTransitionGroup
				 transitionName="example"
	               transitionAppear = {true} transitionAppearTimeout = {2000}
	               transitionEnter = {false} transitionLeave = {false}>

					<div className="lastResult">
							{last}
						</div>
						<div className="lastResultTitle">
							Лучший результат
						</div>
						<hr style={hr}/>
						<Paper style={styleBad}>
						        	17 12 13
						</Paper>
						<div className="lastResultTitle">
							Наиболее провальные 
						</div>
						
						<hr style={hr}/>

						<RaisedButton
				          backgroundColor= {this.props.color}
				          label='начать'
				          disableTouchRipple={true}
				          disableFocusRipple={true}
				          onClick={this.openTasks}
				          labelColor='#fff'
				          style={{ marginTop: 0 }}
					        />
					        </ReactCSSTransitionGroup>
				       <Dialog
				          title="Случайные задания"
				          modal={false}
				          open={this.state.open}
				          autoScrollBodyContent={true}
				          onRequestClose={this.openTasks}
				           contentStyle={{padding: 0,  maxWidth: 900, width: "90%"}}
				           autoDetectWindowHeight={false}
				           style ={{maxHeight: 500}}
				        >	
				        <IconButton onClick={this.openTasks} style={closeStyle}><Close color='rgb(33, 150, 243)'/></IconButton>
				         <ContentTask/>
				        </Dialog>

				</div>

		

		   )

}



}