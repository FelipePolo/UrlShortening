//DATA INIT

const dataInicial = {
  hashes: []
}

//Types

const ADD_SHORT_URL_SUCCESS = 'ADD_SHORT_URL_SUCCESS'


//REDUCER 

export default function clientReducer(state = dataInicial,action){
  switch(action.type){
    case ADD_SHORT_URL_SUCCESS:
      return {...state}
    default:
      return{...state}
  }
}

// ACTIONS 

export const addShortUrlAction = (url) => async (dispath,getState) => {
    try {
      const post = await fetch("https://rel.ink/api/links/",{
        method: "POST",
        body: JSON.stringify({
          url:url
        }),
        headers:{
          'Conten_Type':'app/Json'
        }
      })
      console.log(post)
      const dataobj = await post.json()
      console.log(dataobj)
    } catch (error) {
      console.log("error en add : " + error)
    }
}