import React, { Component } from 'react';
import Paper from 'material-ui/Paper';


export default class MenuUp extends Component{

// constructor(props) {
// 		    super(props);
// 		    this.state = {
		    	
// 		    };
// 		  }

render(){
	var data = this.props.data[0]
	 var photo = data.photo
    var bg = data.background
    var name = data.name
    var city = data.city
    var exp = data.exp
	const stylePhoto = {
      backgroundImage: 'url(/avatars/' + photo + ')',
      width: 60,
      height: 60,
      margin: 15,
      marginTop: 0,
      marginRigth: 160,
      backgroundSize: '100%'     
    }
      const styleBg = {
      backgroundImage: 'url(' + bg + ')',
      width: '100%',
      height: 150,
      paddingTop: 20,
    }
    const styleName={
      color: '#fff',
      fontWeight: '400',
      paddingLeft: 15,
      fontSize: 18,
    }
    const styleCity={
      color: '#fff',
      fontWeight: '300',
      fontSize: 15,
      paddingLeft: 15,
      float: 'left',      
      width: '150px'      
    }
    const styleExp={
      color: '#fff',
      fontWeight: '300',
      fontSize: 15,
      float: 'right',
      width: '80px',
      textAlign: 'center',
      background: 'rgba(3, 169, 244, 0.8)',
      borderRadius: '2px 0 0 2px',
      cursor: 'default'
    }
	
	return(<div style= {styleBg}>
        <Paper style={stylePhoto} zDepth={3} circle={true}></Paper>
        <div style={styleName}>{name}</div>
        <div style={styleCity}>{city}</div>
        <div style={styleExp}>{exp}</div>
      </div>

		
		   )

}



}