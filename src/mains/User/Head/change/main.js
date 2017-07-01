import React, { Component } from 'react';
import TextField from 'material-ui/TextField';




//SELF MADE MODULES
// import Achievs from './achievs.js'


export default class Main extends Component{

constructor(props) {
		    super(props);
		    this.state = {
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
				    borderColor: this.props.color,
				    opacity: 0.5
				  },
				  floatingLabelFocusStyle: {
				    color: this.props.color,
				  }
				};
	return(<div>

			    <TextField
			    	id='cityContent'
			        defaultValue={this.state.city}
			        floatingLabelText="Ваш Город"
			        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			        underlineFocusStyle={styles.underlineStyle}
			        onChange={(event: object, newValue: string)=>
			        	this.chnageCount('city', newValue)}
			        fullWidth={true}
			        maxLength="30"
		    	/><br />
		    	<div className="characterCounter">
		    		<div id='countElem'>{this.state.city.length}</div>/30</div>
		    	<br />
		    	<TextField
			    	defaultValue={this.state.about}
			      	floatingLabelText="Ваша История"
			      	floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			      	underlineFocusStyle={styles.underlineStyle}
			      	fullWidth={true}
			      	maxLength="256"
			      	onChange={(event: object, newValue: string)=>
			      		this.chnageCount('about', newValue)}
			      	id="bioInput"
			      	rowsMax={4}
			      	multiLine={true}
			    />
			    <div className="characterCounter">
			    	<div id='countElem'>{this.state.about.length}</div>/256</div>
			    <br />
			</div>

		

		   )

}



}

			    // <Achievs achievements={achievs}/>
