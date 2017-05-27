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


export default class Variants extends Component{

		 constructor(props) {
			    super(props);
			    this.state = { 
			    count: 19,
			    open: false,
				nowvalue: 0,
				nowid: '' 
			};
	 }
	 Modal=(id)=>{
	 
	 	if (id){
	 		var value = document.getElementById(id).innerHTML
	 		this.setState({
	 			nowvalue: Number(value),
	 			nowid: id
	 		})
	 	}
	 	this.setState({
	 		open: !this.state.open
	 	})

	 }

	 acceptCount=()=>{
	 	document.getElementById(this.state.nowid).innerHTML = this.state.nowvalue
	 	this.Modal()
	 }



	 changeSlider=(event, value)=>{
	 	  this.setState({nowvalue: value});
	 }


	 shutdown=(n)=>{
	 	for(var i=1; i<=this.state.count;i++){
	 		var id = i+'tab'
	 		document.getElementById(id).innerHTML = n
	 	}
	 }

	getCountsTasks=(number)=>{
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
		var tasks = new Array
		for (var n=1; n<=number; n++){
			tasks.push({number: n})
		}
		var final = tasks.map(function(item, index){
			var id = item.number+'tab'
			return(
				<FlatButton
				style={{height: 80, margin: 5, minWidth: 60}} key={index}>
					<Paper style={style} onClick={()=>this.Modal(id)} >
							<div style={{background: 'rgb(33, 150, 243)'}}>
								{item.number}
							</div>
							<div style={count} id={id}>
								1
							</div>
					</Paper>
				</FlatButton>)
		}.bind(this))

		return final		
	}

	render(){
		const actions=[<FlatButton label="применить" primary={true} onClick={()=>this.acceptCount()}/>]

		const closeStyle={
			position: 'absolute',
			top: '18px',
			right: '20px'
		}
		var number = Number(this.state.count)
		var elPerRow = Math.ceil(number/3)*90
		if(elPerRow<700){elPerRow=700}
		var elements = this.getCountsTasks(this.state.count)
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
		          actions={actions}
		          modal={false}
		          bodyClassName="contentModalCountVariants"
		          contentStyle={{width: 300, padding: 0}}
		          onRequestClose={this.Modal}
		        >
		        	<IconButton onClick={()=>this.Modal()} style={closeStyle}><Close color='rgba(0, 0, 0, 0.6)'/></IconButton>
		        	<div style={{textAlign: "center", 'fontSize': 22}}>{this.state.nowvalue}</div>
		          	<Slider value={this.state.nowvalue} min={0} max={9} step={1} onChange={this.changeSlider}/>
		        </Dialog>
			</div>)

	}
}
Variants.contextTypes	=	{		
}

					// <FlatButton label="Обычный" style={{color:"rgb(33, 150, 243)", marginTop: 5, float: 'right', marginRight: 20}}  onClick={()=>this.shutdown(1)}/>
					// <FlatButton label="Сбросить" style={{color:"rgb(247, 89, 89)", marginTop: 5, float: 'right', marginRight: 20}} onClick={()=>this.shutdown(0)} />
