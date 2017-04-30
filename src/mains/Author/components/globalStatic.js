import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import ActionDescription from 'material-ui/svg-icons/action/description'
import ActionExtension from 'material-ui/svg-icons/action/extension'
import EditorFormatListBulleted from 'material-ui/svg-icons/editor/format-list-bulleted'

export default class GlobalStaticAuthor extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	
		    };
		  }

render(){

	var PaperStyle1 = {
		background: 'linear-gradient(to top left, #00c0ef, #47daff) ',
	};
	var PaperStyle2 = {
		background: 'linear-gradient(to top left, #dd4b39, #f97868)  ',
	};
	var PaperStyle3 = {
		background: 'linear-gradient(to top left, #00a65a, #36e293)  ',
	};
	var icon ={
		width: 60,
		height: 60,
		color: '#fff',
		marginTop: 20,
		marginLeft: 20
	}
	var label={
	    display: "inline-block",
	    position: "relative",
    	top: "-60px",
    	left: "20px",
    	width: "100px"
	}
	var count={
		display: 'inline-block',
		fontSize: '32px',
		position: 'relative',
		left: '-80px',
		width: '100px',
		top: '-20px'
	}
	
	return(<div>
				<div className="col-xs-12 col-sm-4 paper">
					<Paper  className='globalStaticPaper'>
						<div className="staticAuthor" style={PaperStyle1}>
							<ActionDescription style={icon} />
						</div>
						<div style={label}>
							Лекций
						</div>
						<div style={count}>
							117
						</div>
					</Paper>
				</div>
				<div className="col-xs-12 col-sm-4 paper">
					<Paper className='globalStaticPaper'>
						<div className="staticAuthor" style={PaperStyle2}>
							<ActionExtension style={icon}/>
						</div>
						<div style={label}>
							Заданий
						</div>
						<div style={count}>
							117
						</div>
					</Paper>
				</div>
				<div className="col-xs-12 col-sm-4 paper">
					<Paper className='globalStaticPaper'>
						<div className="staticAuthor" style={PaperStyle3}>
							<EditorFormatListBulleted style={icon}/>
						</div>
						<div style={label}>
							Тестов
						</div>
						<div style={count}>
							117
						</div>
					</Paper>
				</div>
		
		
		   </div>)

}



}