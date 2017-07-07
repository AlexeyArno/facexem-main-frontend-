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
      backgroundPositionX: 4,
      height: 60,
      margin: 15,
      marginTop: 0,
      display: 'inline-block'   
    }
      const styleBg = {
      backgroundImage: 'url(/bg/' + bg + ')',
      width: '100%',
      backgroundSize: "250%",
      height: 100,
      paddingTop: 20,
    }
    const styleName={
      color: '#fff',
      maxWidth: 160,
      overflowX: "hidden", 
      whiteSpace: "nowrap",
      display: 'inline-block',
      fontWeight: '400',
      position: 'absolute',
      top: 30,
      left: 70,
      paddingLeft: 15,
      fontSize: 18,
    }
    const styleCity={
      color: '#fff',
      fontWeight: '300',
      fontSize: 15,
      display: 'inline-block',
      paddingLeft: 15,
      position: 'absolute',
      top: 50,
      left: 70,
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
        <Paper style={stylePhoto} zDepth={3} circle={true} className='userAvatar'></Paper>
        <div style={styleName}>{name}</div>
        <div style={styleCity}>{city}</div>
      </div>

		
		   )

}



}