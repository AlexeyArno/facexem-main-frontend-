import React, { Component } from 'react';
import Main from './change/main.js'
import CircularProgress from 'material-ui/CircularProgress';


export default class Change extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	achievs: 0,
		    	persondata: this.props.data
		    };
		  }

	componentDidMount=()=>{

		if (this.state.achievs == 0){
			this.LoadData();
		}
		
	}




	LoadData=()=>{
				if (this.state.achievs == 0){
				var xmlhttp = new XMLHttpRequest()
				var body =  JSON.stringify({token: this.props.token})  
				xmlhttp.open('POST', 'http://127.0.0.1:9999/api/user/get_achievements', false);
				xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
				xmlhttp.send(body);  
				if(xmlhttp.status == 200) {
				var data = JSON.parse(xmlhttp.responseText)
				if (data.result != 'Error' ){
					this.setState({achievs: data})
					// return(data)
				}else{
				}
			}
		}
			
	}



render(){
	if(this.state.achievs == 0){
		const style = {
			margin: "auto",
			maxWidth: '50px',
			marginTop: (screen.height-100)/4,
			marginBottom: (screen.height-100)/4
		}

		return(<div style={style} >

					<CircularProgress size={40} thickness={5} mode={'indeterminate'}/>
				</div>)
	}
	console.log(this.state.persondata)
	return(<div>
				<Main person={this.state.persondata} achievs={this.state.achievs}/>
			</div>

		

		   )

}



}