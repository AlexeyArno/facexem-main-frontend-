import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Close from 'material-ui/svg-icons/navigation/close';
import DropDownMenu from 'material-ui/DropDownMenu';
import ToggleCheckBox from 'material-ui/svg-icons/toggle/check-box'
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';


export default class ChooseModal extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	data: this.props.data,
		    	answer: this.props.answer
		    };
		  }

		  save=()=>{
		    this.props.save('chooseBox',  {content: this.state.data, answer:this.state.answer})
		  }

		 changeRadio = (event, index, value) => this.setState({answer: value});

		  getAnswersRadio = ()=>{
		  	return(this.state.data.map(function(item, index){
		  		return(<MenuItem value={index+1} key={index} primaryText={index+1} />)
		  	}))
		  }

		  changeCheck=(value, index)=>{
		  	var state = this.state.answer
		  	state[index] = value
		  	this.setState({
		  		state: state
		  	})
		  }

		  getAnswersCheck = ()=>{
		  	return(this.state.data.map(function(item, index){
		  		return(<Checkbox
		  				   	key={index}
						    label={index+1}
						    onCheck={(event: object, isInputChecked: boolean)=>this.changeCheck(isInputChecked, index)}
						    checked={this.state.answer[index]}
						    checkedIcon={<ToggleCheckBox/>}
						    iconStyle={{fill: '#4285f4'}}
						    style={{ padding: 16, paddingLeft: 0, display: 'inline-block'}}
						    />)
		  	}.bind(this)))
		  }


		 add=()=>{
		 	var data = this.state.data
		 	if(data.length == 0){
		 		data.push({type: 'box',
				content: 'Hello',
				id: this.props.id+'1'})
		 	}else{
		 		data.push({type: 'box',
				content: 'Hello',
				id: data[data.length-1].id+'1'})
		 	}
		 	if(this.props.type =='check'){
		 		this.setState({data, state: this.state.answer.push(false)})
		 	}else{
		 		this.setState({data})
		 	}
		 }
		 delete=(index)=>{
		 	var data = this.state.data
		 	data.splice(index, 1)
		 	if(this.props.type=='check'){
		 		var answer = this.state.answer
		 		answer.splice(index, 1)
		 		this.setState({answer})
		 	}
		 	this.setState({data})
		 }


		  change=(event, index )=>{
		  	var data = this.state.data
		  	data[index].content = event.target.value
		 	this.setState({data})
		  	var element = document.getElementById('someChoose'+index)
		  	element.style.height = "5px";
    		element.style.height = (element.scrollHeight)+"px";
		  }

		  getContent=()=>{
		  	return(this.state.data.map(function(item, index){
		  			var closeStyle ={

		  			}
		  			return(<div key={index}>
			  				
		  					<div style={{display: 'inline-block', verticalAlign: 'top', paddingTop: 13}}>
		  						{index+1+'.'}
		  					</div>
			  				<textarea className="redactorText" cols="40"  id={'someChoose'+index} 
			  					 value={item.content} onChange={(event)=>this.change(event, index)}
			  					 style={{display: 'inline-block', width: '80%'}}/>
			  					<div style={{display: 'inline-block', verticalAlign: 'top',
			  				 paddingTop: 11, opacity: 0.5, cursor:'pointer', marginRight: 10}}
			  				 onClick={()=>this.delete(index)}>
			        	 		<Close />
			        	 	</div>
		  					</div>
		  				)

				  	}.bind(this))


		  		)
		  }

render(){
	var content = this.getContent()
	if(this.props.type == 'check'){
		var answers = this.getAnswersCheck()
	}else{
		var answers = this.getAnswersRadio()
		var answers = <DropDownMenu value={this.state.answer} onChange={this.changeRadio}>
						{answers}
					</DropDownMenu>
	}

	const style = {
	  margin: 12,

	};
	return(<div>
				<div>
					{content}
				</div>
				<div>
					<div style={{display: 'inline-block', verticalAlign: 'middle', marginBottom: 30}}>
		  						Ответ:
		  					</div>
					{answers}
				</div>
				<div style={{textAlign: 'right', zIndex: 999999999,
				textAlign: "right",
			    position: "absolute",
			    bottom: 0,
			    right: 10}}>
					  <RaisedButton label="Добавить" style={style} onClick={()=>this.add()}/>
					   <RaisedButton label="Сохранить" onClick={()=>this.save()}  
					   backgroundColor="rgb(66, 133, 244)" labelColor='#fff' style={style}/>
				</div>
			</div>

		

		   )

}



}