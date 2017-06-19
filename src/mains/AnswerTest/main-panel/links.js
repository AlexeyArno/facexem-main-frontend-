import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left'
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right'

export default class Links extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	pos: this.props.pos
		    };	
		  }


		  clickLink=(i)=>{
		  	this.setState({
		  		pos: i
		  	})
		  	this.props.changePos(i)
		  }
		  next=()=>{
		  	var i=(this.state.pos<this.props.data.length-1)? this.state.pos+1: this.state.pos
		  	this.setState({
		  		pos: i
		  	})
		  	this.props.changePos(i)

		  }
		  prev=()=>{
		  	var i=(this.state.pos>0)? this.state.pos-1: this.state.pos
		  	this.setState({
		  		pos: i
		  	})
		  	this.props.changePos(i)
		  }

		  getLinks = (data)=>{
		  	var pos = this.state.pos
		  	var area = [pos-1, pos, pos+1]
		  	var links = []
		  	links.push(<IconButton onClick={this.prev} style={{position: 'relative', top: 7}}>
		  					<NavigationChevronLeft/>
		  			</IconButton>)
		  	data.map(function(item, index){
		  		var color=(this.state.pos === index)? "rgb(33, 150, 243)": 'black'
		  		if(index!== 0 && index === area[0]){
		  		
		  			links.push(<div style={{display: 'inline-block'}}>...</div>)
		  		}

		  		if(area.indexOf(index) !== -1 ){
		  			links.push(<FlatButton label={index+1} labelStyle={{color}} style={{maxWidth: 20, height: 30, minWidth: 40, lineHeight: "20px", textAlign: 'center' }}
		  				key={index} onClick={()=>this.clickLink(index)}/>)
		  		}
		  		if(index !== data.length-1 && index === area[2]){
		  				links.push(<div style={{display: 'inline-block'}}>...</div>)
		  				
		  		}

		  	}.bind(this))
		  	links.push(<IconButton onClick={this.next} style={{position: 'relative', top: 7}}>
					  					<NavigationChevronRight/>
					  			</IconButton>)
		  	return links
		  }

render(){
	var links = this.getLinks(this.props.data)
	return(<div style={{textAlign: 'center'}}>
				{links}
			</div>

		

		   )

}



}