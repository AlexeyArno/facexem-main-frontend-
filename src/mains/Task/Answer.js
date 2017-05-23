import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';


export default class Answer extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	
		    };
		  }

		   click=()=>{
		  	this.props.next()
		  }
render(){
	
	return(<div>

				Answer
				<RaisedButton
				          primary={true}
				          label='Next'
				          disableTouchRipple={true}
				          disableFocusRipple={true}
				          onClick={this.click}
				          labelColor='#fff'
				          style={{ marginTop: 0 }}
					        />
			</div>

		

		   )

}



}