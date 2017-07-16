import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ActionDone from 'material-ui/svg-icons/action/done';
import ActionCached from 'material-ui/svg-icons/action/cached'



export default class Settings extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	publick_key: 0,
		    	name: 0,
		    	save: 0
		    };
		  }


		  change=(v, t)=>{
		  	switch(t){
		  		case 'name':
		  			if(v.length>30){return 0}
		  			this.setState({
		  				name: v
		  			})
		  			break
		  	}
		  }



		  save=()=>{
		  	this.setState({save: 1})
		  	var xmlhttp = new XMLHttpRequest()
		  			var body = JSON.stringify({token: this.props.token, name: this.state.name})  
					xmlhttp.open('POST', 'http://127.0.0.1:9999/api/user/save_settings', true);
					xmlhttp.send(body);  
					xmlhttp.onload = function (e) {
					    if (xmlhttp.status === 200) {
					      if(JSON.parse(xmlhttp.responseText).result != 'Error'){
					      	this.props.reload({name: this.state.name})
					      	this.setState({save: 2})
					      	return 0	
					      }
					    }
					   this.setState({save: 3})
					}.bind(this) 
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
					      		publick_key: data.key,
					      		name: data.name
					      	})	
					      }
					    }
					}.bind(this) 


		  }



render(){
	if(this.state.publick_key == 0){
		return(<div style={{height: 200, textAlign: 'center', paddingTop: 60}}>
				 <CircularProgress size={60} thickness={3} color={this.props.color}/>
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
	var button =  <RaisedButton label="Сохранить" style={{float: 'right', marginTop: 10}} labelColor={this.props.color} onClick={this.save}/>
	switch(this.state.save){
		case 1:
			button = <RaisedButton style={{float: 'right', marginTop: 10}}>
						<CircularProgress size={25} style={{verticalAlign: 'middle'}} color={this.props.color}/>
					</RaisedButton>
			break
		case 2:
			button = <RaisedButton style={{float: 'right', marginTop: 10, maxWidth: 50}} onClick={()=>this.props.close()}>
						<ActionDone color={this.props.color} style={{verticalAlign: 'middle'}}/>
					</RaisedButton>
			break
		case 3:
			button = <RaisedButton style={{float: 'right', marginTop: 10, maxWidth: 50}} onClick={this.save}>
						<ActionCached color='red' style={{verticalAlign: 'middle'}}/>
					</RaisedButton>
			break
	}
	return(<div>
			<div>
				<TextField
			      value={this.state.name}
			      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
				  underlineFocusStyle={styles.underlineStyle}
				  fullWidth={true}
				  floatingLabelText="Имя / Никнейм"
				  onChange={(e,v)=>this.change(v, 'name')}
			    /><br/>
			    <div className="characterCounter">
		    		<div id='countElem'>{this.state.name.length}</div>/30</div>
				<TextField
			      value={this.state.publick_key}
			      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
				  underlineFocusStyle={styles.underlineStyle}
				  fullWidth={true}
				  floatingLabelText="Персональный ключ 🔒"
			    /><br/>
			    {button}
		</div>
	</div>

		

		   )

}



}