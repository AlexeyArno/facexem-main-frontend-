import React, { Component } from 'react';
import Main from './change/main.js'
import CircularProgress from 'material-ui/CircularProgress';


export default class Change extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	achievs: 0,
		    	load: 0,
		    	pics: [],
		    	persondata: this.props.data,
		    	backgrounds: []
		    };
		  }

	componentWillMount=()=>{

			this.LoadData();
		
	}




	LoadData=()=>{
				var xmlhttp = new XMLHttpRequest()
				var body =  JSON.stringify({token: this.props.token})  
				xmlhttp.open('POST', 'http://127.0.0.1:9999/api/user/get_change_data', false);
				xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
				xmlhttp.send(body);  
				if(xmlhttp.status == 200) {
				var data = JSON.parse(xmlhttp.responseText)
				if (data.result != 'Error' ){
					this.setState({pics: data.pics,backgrounds: data.backgrounds, load: 1})
				}
			}

			
	}



render(){
	if(this.state.load === 0){
		const style = {
			margin: "auto",
			maxWidth: '50px',
			marginTop: (screen.height-100)/4,
			marginBottom: (screen.height-100)/4
		}

		return(<div style={style} >

					<CircularProgress size={40} thickness={3} mode={'indeterminate'} color={this.props.color}/>
				</div>)
	}
	return(<div>
				<Main person={this.state.persondata} color={this.props.color}
					 pics={this.state.pics} change={this.props.change} backgrounds={this.state.backgrounds}/>
			</div>

		

		   )

}



}