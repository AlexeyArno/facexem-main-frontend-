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