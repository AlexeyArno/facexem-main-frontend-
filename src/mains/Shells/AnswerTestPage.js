import React, { Component } from 'react';
import { connect } from 'react-redux'
import AnswerMainPaper from '../AnswerTest/main.js'
class AnswerTest extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	data: 0
		    };
		  }

		  getTestId=()=>{
		  	var name = window.location.pathname
			name = Array.from(name)
			var id = []
			var subject = []
			var point= 0
			for (var i =0; i<name.length;i++){
				if(name[i]=='/' ){
					point++
				}
				if(i==0){continue}
				if(point==3){
					if(name[i]!== '/'){
						id.push(name[i])
					}
				}
				if(point==1){
					if(name[i]!== '/'){
						subject.push(name[i])
					}
				}
			}
			return {test:id.join(''), subject: subject.join('')} 
		  }

		  componentWillMount=()=>{
		  	var data = this.getTestId()
		  	const {token} = this.props.user
		  	var xmlhttp = new XMLHttpRequest()
		  	var body=  JSON.stringify({token: token, id: data.test, codename: data.subject})
			xmlhttp.open('POST', 'http://127.0.0.1:9999/api/user/test-result', true);
			xmlhttp.send(body); 
			xmlhttp.onload  = function(e){
				if(xmlhttp.status === 200) {

					var request = JSON.parse(xmlhttp.responseText)
					if (request.result !== 'Error' || !request.result ){
							this.setState({
								data: request
							})
						}
				}
			}.bind(this) 
		  }

render(){
	if(this.state.data === 0){
		return(<div>Загрузка...</div>)
	}
	return(<div style={{maxWidth: 700, margin: 'auto',marginTop: 60}} id="nowpage">
				<AnswerMainPaper data={this.state.data} />
			</div>

		

		   )

}



}
function mapStateToProps (state) {
  return {
    user: state.user,
  }
}


export default connect(mapStateToProps)(AnswerTest)