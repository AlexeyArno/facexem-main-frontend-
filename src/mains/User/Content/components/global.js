import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ActionDescription from 'material-ui/svg-icons/action/description'
import ActionExtension from 'material-ui/svg-icons/action/extension'
import EditorFormatListBulleted from 'material-ui/svg-icons/editor/format-list-bulleted'
import Divider from 'material-ui/Divider';


export default class GlobalStatic extends Component{
			 constructor(props) {
			    super(props);
			    this.state = {};
			  }	
 render(){


 		var PaperStyle = {
 			background: 'rgb(178, 118, 178)'
 		}
 		var PaperStyle2 = {
 			background: 'rgba(255, 255, 255)'
 		}
 		var PaperStyle3 = {
 			background: 'rgb(96, 189, 104)'
 		}
 		var iconStyle={
 			width: 40,
 			height: 40,
 			margin: '30px',
 			marginBottom: '0px'
 		}
 		var count = {
 			fontSize: '35px',
 			position: 'absolute',
 			top: '20px',
 			right: '50px',
 			color: '#fff',
 			width: 100,
 			opacity: '1',
 			textAlign: 'center'
 		}

 		var iconShell={
 			display: 'inline-block',
 			width: 100
 		}
 		var label={
 			position: 'absolute',
 			fontSize: '16px',
 			color: '#fff',
 			right: '50px',
 			bottom: '20px',
 			width: 100,
 			textAlign: 'center'
 		}
 		var divider ={
 			background: '#fff',

 		}
 		var divider2={
 			background: 'rgb(178, 118, 178)',
 		}
 		var middle = this.props.data.middle
 		var tasks = this.props.data.tasks
 		var tests = this.props.data.tests
 	return(
 		<div>
	 		<div className="col-xs-12 col-sm-4 paper">
					<Paper style={PaperStyle} className='globalStaticPaper'>
						<div>
							<div style={iconShell}><ActionDescription style={iconStyle} color='#fff'/></div>
							<hr style={divider} className="dividerInGlobalStat"/>
							<div style={count}>{middle}</div>
							<div  style={label}>Общий бал</div>
						</div>
					</Paper>
			</div>
			<div className='col-xs-12 col-sm-4 paper'>		
					<Paper style={PaperStyle2} className='globalStaticPaper'>
						<div>
							<div style={iconShell}><ActionExtension style={iconStyle} color='rgb(178, 118, 178)'/></div>
							<hr style={divider2} className='dividerInGlobalStat'/>
							<div style={count} className='Purple'>{tasks}</div>
							<div style={label} className='Purple'>заданий</div>
						</div>
					</Paper>
			</div>
			<div className='col-xs-12 col-sm-4 paper'>
					<Paper style={PaperStyle3} className='globalStaticPaper'>
						<div>
							<div style={iconShell}><EditorFormatListBulleted style={iconStyle} color='#fff'/></div>
							<hr style={divider} className="dividerInGlobalStat"/>
							<div style={count}>{tests}</div>
							<div  style={label}>тестов</div>
						</div>
					</Paper>
			</div>
		</div>

 		)
 }
}