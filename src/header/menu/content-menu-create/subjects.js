import React, { Component } from 'react';
import LibraryBooks from 'material-ui/svg-icons/av/library-books';
import ActionStars 	from 'material-ui/svg-icons/action/stars'
import Share from 'material-ui/svg-icons/social/share'
import ActionTranslate 	from 'material-ui/svg-icons/action/translate'
import EditorFunctions from 'material-ui/svg-icons/editor/functions'
import ContentFontDownload from 'material-ui/svg-icons/content/font-download'
import ActionAccountBalance from 'material-ui/svg-icons/action/account-balance'
import ActionMemory from 'material-ui/svg-icons/hardware/memory'
import ImageFlashOn from 'material-ui/svg-icons/image/flash-on'
import MapsLocalFlorist from 'material-ui/svg-icons/maps/local-florist'
import MenuItem from 'material-ui/MenuItem';


export default class Subjects extends Component{

// constructor(props) {
		  //   super(props);
		  //   this.state = {
		    	
		  //   };
		  // }
		handllink=(link)=>{
			this.props.clickOnItem(link)
		}

render(){
	var subjects  = this.props.subjects.map(function(item, index){
			var icon = <LibraryBooks/>
			switch(item.link){
				case 'chemistry':
					icon =<Share/>
					break;
				case 'english':
					icon = <ActionTranslate/>
					break;
				case 'math-pro':
					icon = <EditorFunctions/>
					break;
				case 'math':
					icon = <EditorFunctions/>
					break;
				case 'russian':
					icon = <ContentFontDownload/>
					break;
				case 'history':
					icon = <ActionAccountBalance/>
					break;
				case 'computer-science':
					icon = <ActionMemory/>
					break;
				case 'physics':
					icon = <ImageFlashOn/>
					break;
				case 'biology':
					icon = <MapsLocalFlorist/>
					break;
			}
			return(
				<MenuItem key={index} onClick={()=>this.handllink(item.link)} primaryText={item.subjectName} leftIcon={icon}/>
				)
		}.bind(this))
	
	return(<div>{subjects}</div>)

		

		   

}



}