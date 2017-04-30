import React, { Component } from 'react';
// import SubjectLectionContent from './SubjectLectionContent.js'
import SubjectYetContent from './SubjectYetContent.js'
// import SwipeableViews from 'react-swipeable-views';


export default class SubjectContent extends Component{
			 constructor(props) {
			    super(props);
			    this.state = {
			    	subject: window.location.pathname,
			    	position: 0
			    };
			  }	


	clickOnLi = (id, color) => {
		var listBox = document.getElementById('listBox')
		var lections = document.getElementById('lections')
		var add = document.getElementById('add')
		var choose = document.getElementById('ChooseInSubjectContent')
		var stick = document.getElementById('stick')
		switch(id){
			case 'lections':
				this.setState({
					position: 0
				})

				listBox.style.height = 'auto'

				var mainleft = lections.offsetLeft
				var mainwidth = lections.offsetWidth
				
				lections.style.color = color
				add.style.color = 'black'
				
				var left = choose.offsetLeft
				var finishLeft = mainleft-left
				
				stick.style.left = finishLeft+'px'
				stick.style.width = mainwidth+'px'
				break;
			case 'add':
				this.setState({
					position: 1
				})
				var mainheight = "800px"

				if(screen.width<768){
					mainheight=5*380+'px'
					console.log('JH')
				}

				listBox.style.height = mainheight
				listBox.style.overflow = 'hidden'

				var mainleft = add.offsetLeft
				var mainwidth = add.offsetWidth

				lections.style.color = 'black'
				add.style.color = color

				var left = choose.offsetLeft
				var finishLeft = mainleft-left

				stick.style.left = finishLeft+'px'
				stick.style.width = mainwidth+'px'

				break;
		}
	
	};
	handleChangeIndex=(color)=>{
		if(this.state.position==0){
			this.clickOnLi('add', color)
		}else{
			this.clickOnLi('lections', color)
		}
	}
	render(){
		var path = window.location.pathname;
		var name;
		var color = '#2196F3';
		var closeColor;
		// switch(path){
		// 	case '/':
		// 		color = '#2196F3';
		// 		name = 'Facexem';
		// 		closeColor = '#2196F3'
		// 		break;
		// 	case '/chemistry':
		// 		color = '#2196F3';
		// 		name = 'Химия';
		// 		closeColor = '#2196F3'
		// 		break;
		// 	case '/math':
		// 		color = '#2196F3';
		// 		name = 'Математика';
		// 		closeColor = '#2196F3'
		// 		break;
		// 	case '/russian':
		// 		color = '#2196F3';
		// 		name = 'Русский язык';
		// 		closeColor = '#2196F3'
		// 		break;
		// 	case '/english':
		// 		color = '#2196F3';
		// 		name = 'Английский язык';
		// 		closeColor = '#2196F3'
		// 		break;
		// 	case '/physics':
		// 		color = '#2196F3';
		// 		name = 'Физика';
		// 		closeColor = '#2196F3'
		// 		break;
		// 	case '/history':
		// 		color = '#2196F3';
		// 		name = 'История';
		// 		closeColor = '#2196F3'
		// 		break;
		// 	case '/information':
		// 		color = '#2196F3';
		// 		name = 'Информатика';
		// 		closeColor = '#2196F3'
		// 		break;
		// }
		var content;
		var style={
			color: color
		}
		const styles = {
			slide:{
				height: '100%'
			},
			slide1:{
				maxHeight: 1750,
			}
		}

				
		return(	<div>
				
				<div className="contentRow" id='contentRowSubjectPage'>
					<div >
					      <SubjectYetContent  data={color}  />
					</div>

					
				</div>

	</div>)

	}
}