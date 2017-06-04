import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import TextField from 'material-ui/TextField';


export default class Settings extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	publick_key: 0
		    };
		  }


	

		  componentWillMount=()=>{
		  			var xmlhttp = new XMLHttpRequest()
		  			var body = JSON.stringify({token: this.props.token})  
					xmlhttp.open('POST', 'http://127.0.0.1:9999/api/user/get_my_settings', true);
					xmlhttp.send(body);  
					xmlhttp.onload = function (e) {
					    if (xmlhttp.status === 200) {
					      if(JSON.parse(xmlhttp.responseText).result != 'Error'){
					      	var data = JSON.parse(xmlhttp.responseText)
					      	this.setState({
					      		publick_key: data.key
					      	})	
					      }
					    }
					}.bind(this) 


		  }



render(){
	if(this.state.publick_key == 0){
		return(<div style={{height: 200, textAlign: 'center', paddingTop: 60}}>
				 <CircularProgress size={60} thickness={7} color={this.props.color}/>
			 </div>
			 )
	}
	const styles = {
				  underlineStyle: {
				    borderColor: this.props.color,
				    opacity: 0.5
				  },
				  floatingLabelFocusStyle: {
				    color: this.props.color,
				  },
				};

	return(<div>
		<div>
			<TextField
		      value={this.state.publick_key}
		      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
			  underlineFocusStyle={styles.underlineStyle}
			  fullWidth={true}
			  floatingLabelText="Персональный ключ"
		    /><br/>
		</div>
	</div>

		

		   )

}



}