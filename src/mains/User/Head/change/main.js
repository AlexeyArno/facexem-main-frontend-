import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {green500, red500} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';




//SELF MADE MODULES
import Achievs from './achievs.js'


export default class Main extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	name: this.props.person.name,
		    	city: this.props.person.city,
		    	about: this.props.person.about 
		    };
		  }


	chnageCount=(type, word)=>{
		var some = {}
		some[type] = word
		this.setState(some)
	}


render(){
	var achievs = this.props.achievs
	const styles = {
				  underlineStyle: {
				    borderColor: green500,
				    opacity: 0.5
				  },
				  floatingLabelFocusStyle: {
				    color: green500,
				  },
				};
	return(<div>
				<TextField
					id='nameContent'
			        defaultValue= {this.state.name}
			        floatingLabelText="Ваше Имя"
			        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			        underlineFocusStyle={styles.underlineStyle}
			        onChange={(event: object, newValue: string)=>
			        	this.chnageCount('name', newValue)}
			        maxLength="50"
			        fullWidth={true}
			    /><br />
			    <div className="characterCounter">
			    	<div id='countElem'>{this.state.name.length}</div>/50</div>
			    <br />
			    <TextField
			    	id='cityContent'
			        defaultValue= {this.state.city}
			        floatingLabelText="Ваш Город"
			        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			        underlineFocusStyle={styles.underlineStyle}
			        onChange={(event: object, newValue: string)=>
			        	this.chnageCount('city', newValue)}
			        fullWidth={true}
			        maxLength="50"
		    	/><br />
		    	<div className="characterCounter">
		    		<div id='countElem'>{this.state.city.length}</div>/50</div>
		    	<br />
		    	<TextField
			    	defaultValue= {this.state.about}
			      	floatingLabelText="Ваша История"
			      	floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			      	underlineFocusStyle={styles.underlineStyle}
			      	fullWidth={true}
			      	maxLength="256"
			      	onChange={(event: object, newValue: string)=>
			      		this.chnageCount('about', newValue)}
			      	id="bioInput"
			      	rowsMax = {4}
			      	multiLine={true}
			    />
			    <div className="characterCounter">
			    	<div id='countElem'>{this.state.about.length}</div>/256</div>
			    <br />
			    <Achievs achievements={achievs}/>
			</div>

		

		   )

}



}