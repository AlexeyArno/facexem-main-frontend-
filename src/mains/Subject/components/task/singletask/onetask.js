import React, {Component , PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Dialog from 'material-ui/Dialog';
import DialogContent from './contentDialog.js'
import IconButton from 'material-ui/IconButton';
import Close from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

export default class Onetask extends Component{


constructor(props) {
		    super(props);
		    this.state = {
		    	openchange: false,
		    	number: this.props.data.task_table[0].num,
		    	opentask: false 
		    };
		  }

		  handllink=(name)=>{
			this.context.router.push({
				 pathname: window.location.pathname+'/'+name
			});
					
			 }
		 openChange=()=>{
		 	if(this.state.openchange){
		 		document.getElementById('root').style.filter = 'blur(0px)'
		 	}else{
		 		document.getElementById('root').style.filter = 'blur(2px)'
		 	}
		 	 this.setState({openchange: !this.state.openchange});
		 	}
		 	

		chooseNumberClick=(n)=>{
			document.getElementById('root').style.filter = 'blur(0px)'
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
	               transitionAppear={true} transitionAppearTimeout={2000}
	               transitionEnter={false} transitionLeave={false}>

	
	               		<div className="lastResult" style={{cursor: 'pointer'}} onClick={this.openChange} >
							{this.state.number}
						</div>
						<div className="lastResultTitle">
							Номер
						</div>
						<hr style={hr}/>

						<RaisedButton
				          backgroundColor={this.props.color}
				          label='начать'
				          disableTouchRipple={true}
				          disableFocusRipple={true}
				          onClick={this.openTasks}
				          labelColor='#fff'
				          style={{ margin: 10,  }}
					        />
					        <FlatButton label="Изменить"
					         	style={{ margin: 10 }}
					            onClick={this.openChange}
					            labelStyle={{color: this.props.color}}/>
				
					       </ReactCSSTransitionGroup>
					

				       <Dialog
				          title="Выбор задания"
				          modal={false}
				          titleStyle={{color: 'rgb(33, 150, 243)'}}
				          open={this.state.openchange}
				          autoScrollBodyContent={true}
				          bodyClassName='dialogBodyTable'
				          onRequestClose={this.openChange}
				          contentStyle={{padding: 0,  maxWidth: 400, width: "90%"}}
				          autoDetectWindowHeight={false}
				          style={{maxHeight: 500}}
				        >	
				        <IconButton onClick={this.openChange} style={closeStyle}><Close color='rgb(33, 150, 243)'/></IconButton>
				         <DialogContent style={{marginTop: 5, padding: 0}} id='myTableDialog'
				          number={this.state.number} data={this.props.data.task_table}
				          chooseNumberClick={this.chooseNumberClick}/>
				        </Dialog>
				         
		</div>

		

		   )

}



}


Onetask.contextTypes	=	{		
	router:	PropTypes.object.isRequired 
}

