export function setToken(token) {

  return {
    type: 'SET_TOKEN',
    payload: token
  }

}
export function setData(data){
	return{
	type: 'SET_DATA',
    payload: data
	}
}

export function setTestDate(data){
	console.log('YEAH')
	return{
	type: 'SET_TEST_DATA',
    payload: data
	}
}