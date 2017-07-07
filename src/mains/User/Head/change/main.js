import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';



//SELF MADE MODULES
// import Achievs from './achievs.js'


export default class Main extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	// city: this.props.person.city,
		    	// about: this.props.person.about,
		    	// nowavatar: this.props.person.photo
		    	data: this.props.person,
		    };
		  }


	chnageCount=(type, word)=>{
		var some = this.state.data
		some[type] = word
		this.setState(some)
		this.props.change(some)
	}

	changeavatar=(str)=>{
		this.setState({
			nowavatar: str
		})
	}



	getBackgrounds=()=>{
		return this.props.backgrounds.map(function(item, index){
			var color = (item == this.state.data.background)?this.props.color:'#fff'
			var style={
				background: 'url(/bg/'+item+')',
				width: 100,
				height: 50,
				display: 'inline-block',
				cursor: 'pointer',
				border: '3px solid '+color,
				margin: 10
			}
			return <Paper style={style} zDepth={1} className="chooseAvatar"
							 onClick={()=>this.chnageCount('background',item)}/>
		}.bind(this))
	}


	getAvatars=()=>{
		return this.props.pics.map(function(item, index){
			var color = (item == this.state.data.photo)?this.props.color:'#fff'
			var style={
				background: 'url(/avatars/'+item+')',
				width: 50,
				height: 50,
				display: 'inline-block',
				cursor: 'pointer',
				border: '3px solid '+color,
				margin: 10
			}
			return <Paper style={style} zDepth={1} circle={true} className="chooseAvatar"
							 onClick={()=>this.chnageCount('photo',item)}/>
		}.bind(this))
	}


render(){
	var backgrounds = this.getBackgrounds()
	var achievs = this.props.achievs
	var avatars = this.getAvatars()
	const styles = {
				  underlineStyle: {
				    borderColor: this.props.color,
				    opacity: 0.5
				  },
				  floatingLabelFocusStyle: {
				    color: this.props.color,
				  }
				};
	return(<div>
				<div style={{marginTop: 11, fontSize: 13, color: 'rgba(0, 0, 0, 0.3)'}}>Аватар</div>
				<div style={{whiteSpace: "nowrap", width: '100%', overflowX: 'auto'}}>
					{avatars}
				</div>
			    <TextField
			        value={this.state.data.city}
			        floatingLabelText="Ваш Город"
			        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			        underlineFocusStyle={styles.underlineStyle}
			        onChange={(event: object, newValue: string)=>
			        	this.chnageCount('city', newValue)}
			        fullWidth={true}
			        maxLength="30"
		    	/><br />
		    	<div className="characterCounter">
		    		<div id='countElem'>{this.state.data.city.length}</div>/30</div>
		    	<br />
		    	<TextField
			    	value={this.state.data.about}
			      	floatingLabelText="Ваша История"
			      	floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			      	underlineFocusStyle={styles.underlineStyle}
			      	fullWidth={true}
			      	maxLength="256"
			      	onChange={(event: object, newValue: string)=>
			      		this.chnageCount('about', newValue)}
			      	rowsMax={4}
			      	multiLine={true}
			    />
			    <div className="characterCounter">
			    	<div id='countElem'>{this.state.data.about.length}</div>/256</div>
			    <br />
			    <div style={{marginTop: 11, fontSize: 13, color: 'rgba(0, 0, 0, 0.3)'}}>Фон</div>
			    <div style={{whiteSpace: "nowrap", width: '100%', overflowX: 'auto'}}>
					{backgrounds}
				</div>
			</div>

		

		   )

}



}

			    // <Achievs achievements={achievs}/>
