import React, { Component } from 'react';
import NewsContent from '../NewsPage/NewsContent.js'

export default class NewsPage extends Component{

	render(){
		var data={
		threepage: [
			{
				img: 'http://www.hdwallpapervalley.com/file/396/1440x900/crop/hd-wallpaper-norway-mountains--free-download-for-backgrounds-2.jpg',
				name: 'How long we are live, abracadabra',
				time: '9 мин',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae porro quod nostrum corrupti maxime quis doloribus debitis id consectetur laudantium. Porro quis consequuntur modi accusamus molestias asperiores alias, id rem.',
				url: '1'

				},
			{
				img: 'https://pp.vk.me/c638822/v638822038/4140/2lSjRMLYVHs.jpg',
				name: 'How long we are live',
				time: '21 час',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae porro quod nostrum corrupti maxime quis doloribus debitis id consectetur laudantium. Porro quis consequuntur modi accusamus molestias asperiores alias, id rem.',
				url: '2'
				},
			{
				img: 'http://www.hdwallpapervalley.com/file/396/1440x900/crop/hd-wallpaper-norway-mountains--free-download-for-backgrounds-2.jpg',
				name: 'How long we are live',
				time: '1 месяц',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae porro quod nostrum corrupti maxime quis doloribus debitis id consectetur laudantium. Porro quis consequuntur modi accusamus molestias asperiores alias, id rem.',
				url: '3'
				}
		],
		top:[
		{
			name: 'How long we are live',
			url: '56'
		},
		{
			name: 'How long we are live',
			url: '56'
		},
		{
			name: 'How long we are live',
			url: '56'
		},
		{
			name: 'How long we are live',
			url: '56'
		},
		{
			name: 'How long we are live',
			url: '56'
		}
		]

		}
		return(	
			<div className="UserRow">
				<NewsContent data={data}/>
			</div>
		)

	}
}