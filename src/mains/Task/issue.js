import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import ActionDone from 'material-ui/svg-icons/action/done';

export default class Issue extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	data: '',
		    	type: 0
		    };
		  }



		  sendController=()=>{
		  		this.setState({type: 1})
	  			this.send(this.props.token, this.props.id, this.state.data)
	  			return 
		  }


		  send=(token, id, content)=>{
		  	var body_data = {token, id, content}
			var xmlhttp = new XMLHttpRequest()
			var body =  JSON.stringify(body_data)  
			xmlhttp.open('POST', 'http://127.0.0.1:9999/api/user/set_report_task', true);
			xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
			xmlhttp.send(body);  
			xmlhttp.onreadystatechange = function() { // (3)
				  if (xmlhttp.status !== 200) {
				    this.setState({type: 3})
				  } else {
					this.setState({type: 2})
				}
			  }.bind(this)	
	}



		 change=(event, newValue)=>{
		 	if(newValue.length<=255){
		 		this.setState({
		 			data: newValue
		 		})
		 	}
		 }

render(){
	const styles = {
				  underlineStyle: {
				    borderColor: '#4285f4',
				    opacity: 0.5
				  },
				   underlineStyle1: {
				    borderColor: '#4285f4',
				    opacity: 0.5
				  }
				};
	var button = <RaisedButton
			      style={{float: 'right', marginTop: 10}}
			      label="Отправить"
			      labelStyle={{color: '#4285f4'}}
			      onClick={this.sendController}
			    />
	switch(this.state.type){
		case 1:
			button = <RaisedButton style={{float: 'right', marginTop: 10}}>
						<CircularProgress size={25} style={{verticalAlign: 'middle'}} color='#4285f4'/>
					</RaisedButton>
			break;
		case 2:
			button = <RaisedButton style={{float: 'right', marginTop: 10, maxWidth: 50}} onClick={()=>this.props.close()}>
						<ActionDone color='#4285f4' style={{verticalAlign: 'middle'}}/>
					</RaisedButton>
			break;
		case 3:
			button = <RaisedButton style={{float: 'right', marginTop: 10}} label='Ошибка!'/>
			break;
	}
	return(<div style={{paddingTop: 20}}>
			<div>Если вы нашли ошибку, то напишите о ней внизу, и мы исправим её как только сможем!</div>
			<TextField
		    	hintText="Описание ошибки"
		    	multiLine={true}
		    	value={this.state.data}
		    	underlineStyle={styles.underlineStyle}
				underlineFocusStyle={styles.underlineStyle}
				fullWidth={true}
				style={{overflow: 'hidden'}}
				onChange={this.change}
				rowsMax={6}
		    /><br />
		    <div className="characterCounter" style={{textAlign: 'right'}}>
			    	<div id='countElem'>{this.state.data.length}</div>/255</div>
		   {button}
		</div>

		

		   )

}



}