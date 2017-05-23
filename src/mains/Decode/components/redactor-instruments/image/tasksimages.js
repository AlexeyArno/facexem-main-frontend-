import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Paper from 'material-ui/Paper';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export default class TaskImages extends Component{

constructor(props) {
		    super(props);
		    var images = this.getImages()
		    this.state = {
		    	images: images
		    };
		  }

		  takeSmth=(url)=>{
		  	this.props.takeYetDownloaded(url)
		  }

		  deleteElemente=(name)=>{
		  	var xmlhttp = new XMLHttpRequest()
					var body =  JSON.stringify({token: this.props.token, code: '232323', id: 2, name: name})
					xmlhttp.open('POST', 'http://127.0.0.1:9999/api/author/delete_img', false);
					xmlhttp.send(body);  
					if(xmlhttp.status == 200) {
					var request = JSON.parse(xmlhttp.responseText)
					if (request.result == 'Success'){
						var images = this.getImages()
						this.setState({
							images: images
						})
					}
				}
		  }

		    getImages=()=>{
		  			var xmlhttp = new XMLHttpRequest()
					var body =  JSON.stringify({token: this.props.token, code: '232323'})
					xmlhttp.open('POST', 'http://127.0.0.1:9999/api/author/task_images/2', false);
					xmlhttp.send(body);  
					if(xmlhttp.status == 200) {
					var request = JSON.parse(xmlhttp.responseText)
					if (request){
						return(request)
					}
				}
		  }

		  renderImages=(images)=>{
		  	var host = 'http://127.0.0.1:9999/task_img/2'
		  	var final = images.map(function(item, index){
		  		var url = host+'/'+item.slice(0,-4)
		  			return(<div key={index} style={{display: 'inline-block'}}>
		  					
		  				<div  className="coub"  onClick={()=>this.takeSmth(item.slice(0,-4))} >
							<Paper className="coub coub-inside">
								<div className="DownCountSubject">
									<img src={url}  style={{width: 100, height: 100}}/>
								</div>
							</Paper>
						</div>
						<div className='menuInImage'>
								<IconMenu
							      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
							      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
							      targetOrigin={{horizontal: 'left', vertical: 'top'}}
							    >
							      <MenuItem primaryText="Удалить" onClick={()=>this.deleteElemente(item.slice(0,-4))}/>
							    </IconMenu>
							</div>
						</div>)
			  		}.bind(this)
			  	)
		  	return(final)
		  }

render(){
	var images = this.state.images
	var picture_images = this.renderImages(images)
	const host = 'http://127.0.0.1:9999/task_img/2/'
	return( <div className="col-xs-12 col-md-12 paper">
				<Paper >

					<div className='subjectLine'>
					<ReactCSSTransitionGroup
					transitionName="example"
	               transitionAppear = {true} transitionAppearTimeout = {2000}
	               transitionEnter = {false} transitionLeave = {false}>
					{picture_images}
					</ReactCSSTransitionGroup>
					</div>
				</Paper>
			</div>)

}



}