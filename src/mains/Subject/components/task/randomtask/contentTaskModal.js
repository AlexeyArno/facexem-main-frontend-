import React, { Component } from 'react';
import TaskWorkWindow from '../decode/task.js'

export default class ContentTask extends Component{

constructor(props) {
		    super(props);
		    var data = {
					name: 'J1',
					type: 'task',
					id: 12,
					content:[
										{
							type: 'img',
							name: 'Картинка',
							id: 245,
							url: 'http://333v.ru/uploads/ea/eaecdf3747af323e763870f7e492a01e.jpg',
							size: 'half',
							center: false
						},
						{
							type: 'img',
							name: 'Картинка',
							id: 246,
							url: 'http://333v.ru/uploads/ea/eaecdf3747af323e763870f7e492a01e.jpg',
							size: 'half',
							center: false
						},
						{
							type: 'img',
							name: 'Картинка',
							id: 247,
							url: 'http://333v.ru/uploads/ea/eaecdf3747af323e763870f7e492a01e.jpg',
							size: 'full',
							center: true
						},
						{
							name: 'SomeText',
							type: 'paragraph',
							style: {color: 'black'},
							id: 45,
							content:[
								{
									type: 'text',
									content: 'Repellendus possimus voluptas at reprehenderit optio consectetur doloremque officia nulla officiis, provident eos similique enim dolorum, ducimus, quaerat eveniet alias recusandae, molestiae.',
									name: 'Jesus',
									id: 451,
								},
								{
									type: 'text',
									content: ' officia nulla officiis, provident eos similique enim dolorum, ducimus, quaerat eveniet alias recusandae, molestiae.',
									name: 'Jesus',
									id: 452,
								},
								{
									type: 'text',
									id: 459,
									content: 'Repellendus possimus voluptas at reprehenderit optio consectetur doloremque officia nulla officiis, provident eos similique enim dolorum, ducimus, quaerat eveniet alias recusandae, molestiae.',
									name: 'Jesus'
								},
							]
						},
						{
							type: 'formul',
							name: 'Формула 1',
							id: 2,
							content: "\\int_{a}^{\\int_{\\int_{}}}",
						},

						{
							type: 'code',
							language: 'python',
							name: 'Код',
							id: 11,
							content: "# Язык программирования - Python 3 \nR_0 = R_1 = R_2_1 = R_2_2 = -2000 \n# Переменные, в которых мы будем хранить числа \nN = int(input())\n# Не будем проверять входные данные на корректность \n# В ЕГЭ (но не в реальной жизни!) это не нужно \nfor i in range(N):",
						},
						{
							type: 'text',
							view: 'content',
							content: 'Repellendus possimus voluptas at reprehenderit optio consectetur doloremque officia nulla officiis, provident eos similique enim dolorum, ducimus, quaerat eveniet alias recusandae, molestiae.',
							name: 'Jesus',
							id: 122,
						},

						{
							type: 'answer',
							answer: '23'
						},


					]
				}
		    this.state = {
		    	data: data,
		    	id: data.id
		    };
		  }

render(){
	var content = <TaskWorkWindow item={this.state.data}/>
	return(<div>
			{content}
		   </div>)

}



}