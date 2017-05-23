import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export default class TextFieldModal extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	data: this.props.data.ext,
		    	answer: this.props.data.answer
		    };
		  }

		   save=()=>{
		    this.props.save('input',  {extension: this.state.data, answer: this.state.answer})
		  }

render(){
	const style = {
	  margin: 12,

	};
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

	return(<div>
		

		<div style={{marginRight: 10, display: 'inline-block'}}>Единицы размерности</div>
			<TextField
				name={this.props.data.id+'TextField1'}
				style={{display: 'inline-block', maxWidth: 200}}
				underlineStyle ={styles.underlineStyle}
				underlineFocusStyle={styles.underlineStyle}
				defaultValue={this.state.data}
				onChange={(event: object, newValue: string)=>this.setState({data: newValue})}
				 /><br/>
				<div style={{marginRight: 10, display: 'inline-block'}}>Ответ:</div>
				 <TextField
				name={this.props.data.id+'TextField2'}
				style={{display: 'inline-block', maxWidth: 200}}
				underlineStyle ={styles.underlineStyle}
				underlineFocusStyle={styles.underlineStyle}
				defaultValue={this.state.answer}
				onChange={(event: object, newValue: string)=>this.setState({answer: newValue})}
				 />
				 <div style={{textAlign: 'right',
				textAlign: "right",
			    position: "absolute",
			    bottom: 0,
			    right: 10}}>
					   <RaisedButton label="Сохранить" onClick={()=>this.save()}
					   backgroundColor="rgb(66, 133, 244)" labelColor='#fff' style={style}/>
				</div>
	</div>

		

		   )

}



}