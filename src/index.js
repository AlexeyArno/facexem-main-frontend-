import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Application from './Application.js';
import './libs/grid12.css';
import './libs/circle.css';
// import './libs/preloader.css';
// import MyAwesomeReactComponent from './App.js';
import configureStore from './store/create-store';


import styles from './index.css';



const store = configureStore();

		// var userInfo = 
			// 	[{
			// 		name: 'Стив Джобс',
			// 		city: 'Сан-Франциско',
			// 		streack: '3',
			// 		roots: 'admin',
			// 		exp: '23232',
			// 		photo: 'http://localhost:3000/guys/jeorge.png',
			// 		background: 'http://localhost:3000/wall.jpg',
			// 		about: 'Компьютер — это самый удивительный инструмент, с каким я когда-либо сталкивался. Это велосипед для нашего сознания.'
			// 	}];
			// var subjects=[
			// {
			// 	image:"http://127.0.0.1:9999/subject_pic/chemistry",
			// 	subjectName:"Химия",
			// 	subjectCount: 17,
			// 	subjectAll: 32,
			// 	link:'chemistry'
			// },
			// {
			// 	image:"http://localhost:3000/math.png",
			// 	subjectName:"Математика",
			// 	subjectCount: 12,
			// 	subjectAll: 25,
			// 	link:'math'
			// },
			// {
			// 	image:"http://localhost:3000/english.png",
			// 	subjectName:"Английский язык",
			// 	subjectCount: 11,
			// 	subjectAll: 67,
			// 	link:'english'
			// },
			// {
			// 	image:"http://localhost:3000/history.png",
			// 	subjectName:"История",
			// 	subjectCount: 7,
			// 	subjectAll: 24,
			// 	link:'history'
			// },

			// ];
			// var achivs=[
			// {
			// 	name: 'Хоккинг',
			// 	key: 'Achiv1',
			// 	description: 'Пройди весь курс математики и физики',
			// 	img: 'http://localhost:3000/physics.svg',
			// 	state: '11',
			// 	need: '23',
			// 	choose: 'no'
			// },
			// {
			// 	name: 'Хоккинг',
			// 	key: 'Achiv2',	
			// 	description: 'Пройди весь курс математики и физики',
			// 	img: 'http://localhost:3000/physics.svg',
			// 	state: '1',
			// 	need: '2',
			// },
			// {
			// 	name: 'Хоккинг',
			// 	key: 'Achiv3',	
			// 	description: 'Пройди весь курс математики и физики',
			// 	img: 'http://localhost:3000/physics.svg',
			// 	state: '23',
			// 	need: '23',
			// 	choose: false
			// },
			// {
			// 	name: 'Хоккинг',
			// 	key: 'Achiv4',
			// 	description: 'Пройди весь курс математики и физики',
			// 	img: 'http://localhost:3000/physics.svg',
			// 	state: '23',
			// 	need: '23',
			// 	choose: true
			// },
			// {
			// 	name: 'Хоккинг',
			// 	key: 'Achiv5',
			// 	description: 'Пройди весь курс математики и физики',
			// 	img: 'http://localhost:3000/physics.svg',
			// 	state: '23',
			// 	need: '23',
			// 	choose: false
			// },
			// {
			// 	name: 'Хоккинг',
			// 	key: 'Achiv6',
			// 	description: 'Пройди весь курс математики и физики',
			// 	img: 'http://localhost:3000/physics.svg',
			// 	state: '23',
			// 	need: '23',
			// 	choose: true
			// },
			// {
			// 	name: 'Хоккинг',
			// 	key: 'Achiv7',
			// 	description: 'Пройди весь курс математики и физики',
			// 	img: 'http://localhost:3000/physics.svg',
			// 	state: '23',
			// 	need: '23',
			// 	choose: true

			// },
			// {
			// 	name: 'Хоккинг',
			// 	key: 'Achiv8',
			// 	description: 'Пройди весь курс математики и физики',
			// 	img: 'http://localhost:3000/physics.svg',
			// 	state: '23',
			// 	need: '23',
			// },
			// {
			// 	name: 'Хоккинг',
			// 	key: 'Achiv9',
			// 	description: 'Пройди весь курс математики и физики',
			// 	img: 'http://localhost:3000/physics.svg',
			// 	state: '23',
			// 	need: '23',
			// },



			// ];

			// var lastChanges = [
			// {
			// 	text: 'Основы алгебры',
			// 	img: 'http://localhost:3000/math.png',
			// 	link: 'math/lection/1'
			// },
			// {
			// 	text: 'Составные предложения',
			// 	img: 'http://localhost:3000/english.png',
			// 	link: 'english/lection/1'
			// },
			// {
			// 	text: 'Металлы',
			// 	img: 'http://localhost:3000/chemistry.png',
			// 	link: 'chemistry/lection/1'
			// },
			// {
			// 	text: 'Пределы',
			// 	img: 'http://localhost:3000/math.png',
			// 	link: 'math/test/3'
			// },
			// {
			// 	text: 'Поливалетности',
			// 	img: 'http://localhost:3000/chemistry.png',
			// 	link: 'math/test/3'
			// },
			// {
			// 	text: 'Что-то там про be',
			// 	img: 'http://localhost:3000/english.png',
			// 	link: 'math/test/3'
			// },




			// ]

			// var badges = [
			// 			{
			// 				image: 'https://cdn.kastatic.org/images/badges/master-challenge-blue-60x60.png',
			// 				tooltip: 'Луна'
			// 			},
			// 			{
			// 				image: 'https://cdn.kastatic.org/images/badges/master-challenge-blue-60x60.png',
			// 				tooltip: 'Луна'
			// 			},
			// 			{
			// 				image: 'https://cdn.kastatic.org/images/badges/master-challenge-blue-60x60.png',
			// 				tooltip: 'Луна'
			// 			},
			// 			{
			// 				image: 'https://cdn.kastatic.org/images/badges/master-challenge-blue-60x60.png',
			// 				tooltip: 'Луна'
			// 			},
			// 			{
			// 				image: 'https://cdn.kastatic.org/images/badges/master-challenge-blue-60x60.png',
			// 				tooltip: 'Луна'
			// 			},


			// ]

			// var newNotifications = [
			// {
			// 	author: 'jesus',
			// 	authorPhoto: 'http://localhost:3000/physics.svg',
			// 	text: "Hello, im broke my pencil 1",
			// 	type: 'new',
			// 	time: '99.07.12 13:07:23'
			// },
			// {
			// 	author: 'jesus',
			// 	authorPhoto: 'http://localhost:3000/physics.svg',
			// 	text: "Hello, im broke my pencil 2",
			// 	type: 'new',
			// 	time: '99.07.12 14:07:23'
			// },
			// {
			// 	author: 'jesus',
			// 	authorPhoto: 'http://localhost:3000/physics.svg',
			// 	text: "Hello, im broke my pencil 3",
			// 	type: 'new',
			// 	time: '99.07.12 15:07:23'
			// },
			// {
			// 	author: 'jesus',
			// 	authorPhoto: 'http://localhost:3000/physics.svg',
			// 	text: "Hello, im broke my pencil 4",
			// 	type: 'last',
			// 	time: '99.07.12 17:07:23'
			// },
			// {
			// 	author: 'jesus',
			// 	authorPhoto: 'http://localhost:3000/physics.svg',
			// 	text: "Hello, im broke my pencil 5",
			// 	type: 'last',
			// 	time: '99.07.12 18:07:23'
			// }

			// ] 

			// var info = [userInfo, subjects, achivs, lastChanges, badges, newNotifications]
			// var headerData={
			// 		data: info[5],
			// 		achivs: info[2],
			// 		usermenu: info[0],
			// 		subjects: info[1],
			// }
var Full = () =>{
	return(
 <div>
	 <MuiThemeProvider>
	 	<Application store={store}/>
	 </MuiThemeProvider>
 </div>)}
ReactDOM.render(
	<Full/>,
  document.getElementById('root')
);


// <Application data={info} headerData={headerData}/>