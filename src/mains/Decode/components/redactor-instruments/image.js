import React, { Component } from 'react';
import Dropzone  from 'react-dropzone';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import FlatButton from 'material-ui/FlatButton';
import TaskImages from './image/tasksimages.js'


export default class ImageSettings extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	load: false,
		  		files: []
		    };
		  }


		  takeYetDownloaded=(url)=>{
		  	console.log(url)
		  	var host = 'http://127.0.0.1:9999/task_img/2'
		  	var real = host+'/'+url
		  		this.setState({
		  			load: true,
		  			files: [{preview: real, name_url: url}]
		  		})
		  }

		


		  download=()=>{
		  	var formData = new FormData();
		  	formData.append('token',this.props.token);
		  	formData.append('code','232323');
		  	formData.append('file', this.state.files[0], 'new.png');
		  	var xmlhttp = new XMLHttpRequest()
			xmlhttp.open('POST', 'http://127.0.0.1:9999/api/author/download_task_img/2', false);
			xmlhttp.send(formData);
			if(xmlhttp.status == 200) {
				var request = JSON.parse(xmlhttp.responseText)
				if(request.result!='Error'){
					this.props.change('url', request)
				}
			}
		  
		  }

		  save=()=>{
		  	if(this.state.files[0].name){
		  		this.download()
		  	}else{
		  		this.props.change('url', this.state.files[0].name_url)
		  	}
		  		this.props.close()
		  	
		  }




		  onDrop=(acceptedFiles)=>{
		  	if(acceptedFiles.length == 0){
		  		this.setState({
		  			load: false,
		  			files: []
		  		})
		  		return 0
		  	}
		  	// this.props.setImageInRedux(acceptedFiles[0])
		  this.setState({
		  	load: true,
	        files: acceptedFiles
	      });	
		  }

		  getloadfiles=()=>{
		  	var file = this.state.files[0]
		  	var myfiles =  <img className='upload' src={file.preview} />
		  	return(myfiles)
		  }


render(){
	var files = this.state.files
	if(this.state.load){
		var images = this.getloadfiles()
		return(<div >	
					<Dropzone onDrop={this.onDrop} accept="image/png" className='DropZone' > 
					{images}
					</Dropzone>
					<TaskImages token={this.props.token}  takeYetDownloaded={this.takeYetDownloaded} />
					 <FlatButton label="Сохранить" primary={true} onClick={()=>this.save()}/>
				</div>)
	}
	return(<div>
		
            <Dropzone onDrop={this.onDrop} accept="image/png" className='DropZone'>
	            <ReactCSSTransitionGroup
						transitionName="example"
			               transitionAppear = {true} transitionAppearTimeout = {3000}
			               transitionEnter = {false} transitionLeave = {false}>
		            <div style={{textAlign: 'center',marginTop: 75 }}>
		            	<img src='cloud-computing.svg' style={{width: 50}}/>
		              <div >Кликни или перетащи PNG картинку</div>
		              </div>
	              </ReactCSSTransitionGroup>
            </Dropzone>

			<TaskImages token={this.props.token} takeYetDownloaded={this.takeYetDownloaded}/>
            </div>
		   )


}



}