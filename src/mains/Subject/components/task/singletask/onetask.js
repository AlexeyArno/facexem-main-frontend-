import React, {Component , PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Dialog from 'material-ui/Dialog';
import DialogContent from './contentDialog.js'
import IconButton from 'material-ui/IconButton';
import Close from 'material-ui/svg-icons/navigation/close';
import ContentTask from '../randomtask/contentTaskModal.js'

export default class Onetask extends Component{


constructor(props) {
		    super(props);
		    this.state = {
		    	openchange: false,
		    	number: 19,
		    	opentask: false 
		    };
		  }

		  handllink=(name)=>{
			this.context.router.push({
				 pathname: window.location.pathname+'/'+name
			});
					
			 }
		 openChange=()=>{
		 	 this.setState({openchange: !this.state.openchange});

		 }

		chooseNumberClick=(n)=>{
			this.setState({
				number: n,
				openchange: false
			})
		}

		openTasks=()=>{
		 	 // this.setState({opentask: !this.state.opentask});
		 	 var link = 'singletask/'+this.state.number
		 	 this.handllink(link)

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
	return(
		<div>
		<ReactCSSTransitionGroup
				 transitionName="example"
	               transitionAppear = {true} transitionAppearTimeout = {2000}
	               transitionEnter = {false} transitionLeave = {false}>

	
	               		<div className="lastResult" style={{cursor: 'pointer'}} onClick={this.openChange} >
							{this.state.number}
						</div>
						<div className="lastResultTitle">
							Номер
						</div>
						<hr style={hr}/>

						<RaisedButton
				          backgroundColor= {this.props.color}
				          label='начать'
				          disableTouchRipple={true}
				          disableFocusRipple={true}
				          onClick={this.openTasks}
				          labelColor='#fff'
				          style={{ margin: 10,  }}
					        />
					        <RaisedButton
				          
				          label='Изменить'
				          disableTouchRipple={true}
				          disableFocusRipple={true}
				          onClick={this.openChange}
				          labelColor={this.props.color}
				          style={{ margin: 10 }}
					        />
					        </ReactCSSTransitionGroup>
					       <Dialog
				          title="Случайные задания"
				          modal={false}
				          open={this.state.opentask}
				          autoScrollBodyContent={true}
				          onRequestClose={this.openTasks}
				           contentStyle={{padding: 0,  maxWidth: 900, width: "90%"}}
				           autoDetectWindowHeight={true}
				           task={true}
				           style ={{maxHeight: 500}}
				        >	
					        <IconButton onClick={this.openTasks} style={closeStyle}><Close color='rgb(33, 150, 243)'/></IconButton>
					         <ContentTask/>
				        </Dialog>

				       <Dialog
				          title="Случайные задания"
				          modal={false}
				          open={this.state.openchange}
				          autoScrollBodyContent={true}
				          bodyClassName = 'dialogBodyTable'
				          onRequestClose={this.openChange}
				          contentStyle={{padding: 0,  maxWidth: 900, width: "90%"}}
				          autoDetectWindowHeight={false}
				          style ={{maxHeight: 500}}
				        >	
				        <IconButton onClick={this.openChange} style={closeStyle}><Close color='rgb(33, 150, 243)'/></IconButton>
				         <DialogContent style={{marginTop: 5, padding: 0}} id='myTableDialog' number={this.state.number} chooseNumberClick={this.chooseNumberClick}/>
				        </Dialog>
		</div>

		

		   )

}



}


Onetask.contextTypes	=	{		
	router:	PropTypes.object.isRequired 
}