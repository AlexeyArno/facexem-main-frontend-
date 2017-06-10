import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import Close from 'material-ui/svg-icons/navigation/close';
import Slider from 'material-ui/Slider';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


export default class Variants extends Component{

		 constructor(props) {
			    super(props);
			    this.state = { 
			    count: this.props.data.task_table.length,
			    open: false,
			    index: -1,
			    value: 0
			};
	 }

	 componentWillMount=()=>{
	 	var stories = []
	 	for (var i=0;i<this.props.data.task_table.length;i++){
	 		stories.push(1)
	 	}
	 	this.setState({stories})
	 }

	 open=(index)=>{
	 	this.setState({
	 		open: true, index, value: this.state.stories[index]
	 	})
	 }

	 changeSlider=(e, v)=>{
	 	this.setState({value: v})
	 }

	 Modal=()=>{
	 	this.setState({
	 		open: false
	 	})
	 }


	 acceptCount=()=>{
	 	var stories = this.state.stories
	 	stories[this.state.index] = this.state.value
	 	this.setState({stories, index: -1, value: 0, open: false})
	 }
	 

	getCountsTasks=()=>{
		var style ={
			display: 'inline-block',
			color: '#fff',
			fontSize: '20px',
			width: 50,
			cursor: 'pointer',
			textAlign: 'center'
		}
		var count={
			width: 45,
			background: '#fff',
			borderRadius: 5,
			margin: 'auto',
			color: 'rgb(33, 150, 243)'
		}
		var final = this.state.stories.map(function(item, index){
			return(
				<FlatButton
				style={{height: 80, margin: 5, minWidth: 60}} key={index} onClick={()=>this.open(index)}>
					<Paper style={style}  >
							<div style={{background: 'rgb(33, 150, 243)'}}>
								{index+1}
							</div>
							<div style={count}>
								{item}
							</div>
					</Paper>
				</FlatButton>)
		}.bind(this))

		return final		
	}

	render(){
		const muiTheme = getMuiTheme({
		  slider: {
		      handleSize: 15,
		      handleSizeDisabled: 10,
		      handleSizeActive: 15,
		  },
		});

		const actions=[<FlatButton label="применить" style={{color: 'rgb(33, 150, 243)'}} onClick={()=>this.acceptCount()}/>]

		const closeStyle={
			position: 'absolute',
			top: '18px',
			right: '20px'
		}
		var number = this.state.count
		var elPerRow = Math.ceil(number/3)*90
		if(elPerRow<700){elPerRow=700}
		var elements = this.getCountsTasks()
		return(	<div className="col-xs-12 col-sm-8 paper variants">
				<Paper className="preferencepaper variants" >
					<div className="Up">Тест</div>
					<hr/>
					<div className="testContent">
						<div style={{minWidth: elPerRow}}>
							{elements}
						</div>
					</div>
					<hr/>
					<IconMenu
					className='iconMenuVariants'
				    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
				    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      				targetOrigin={{horizontal: 'left', vertical: 'top'}}
				    >
				      <MenuItem primaryText="Обычный" onClick={()=>this.shutdown(1)}/>
				      <MenuItem primaryText="Сбросить" onClick={()=>this.shutdown(0)}/>
				    </IconMenu>
					<RaisedButton  label="Вперед!" labelColor="#fff" style={{marginTop: 5, float:'right', marginRight: 20}} backgroundColor="rgb(33, 150, 243)"/>


				</Paper>
				<Dialog
		          title="Количество"
		          open={this.state.open}
		          titleStyle={{color: "rgb(33, 150, 243)"}}
		          actions={actions}
		          modal={false}
		          bodyClassName="contentModalCountVariants"
		          contentStyle={{width: 300, padding: 0}}
		          onRequestClose={this.Modal}
		        >
		        	<IconButton onClick={()=>this.Modal()} style={closeStyle}><Close color='rgb(33, 150, 243)'/></IconButton>
		        	<div style={{textAlign: "center", 'fontSize': 22}}>{this.state.value}</div>
		        	<hr style={{position: 'relative', top: 32.5}}/>
		        	 <MuiThemeProvider muiTheme={muiTheme}>
			          	<Slider value={this.state.value} min={0} max={5} step={1}
			          	 onChange={this.changeSlider}/>
			           </MuiThemeProvider>
		        </Dialog>
			</div>)

	}
}
Variants.contextTypes	=	{		
}

					// <FlatButton label="Обычный" style={{color:"rgb(33, 150, 243)", marginTop: 5, float: 'right', marginRight: 20}}  onClick={()=>this.shutdown(1)}/>
					// <FlatButton label="Сбросить" style={{color:"rgb(247, 89, 89)", marginTop: 5, float: 'right', marginRight: 20}} onClick={()=>this.shutdown(0)} />
