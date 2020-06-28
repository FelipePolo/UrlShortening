//DATA INIT

const dataInicial = {
  hashes: [],
};

//Types

const ADD_SHORT_URL_SUCCESS = "ADD_SHORT_URL_SUCCESS";

//REDUCER

export default function clientReducer(state = dataInicial, action) {
  console.log("action: ",action)
  switch (action.type) {
    case ADD_SHORT_URL_SUCCESS:
      return { ...state,hashes:action.payload.array};
    default:
      return { ...state };
  }
}

// ACTIONS

export const addShortUrlAction = (url) => async (dispath, getState) => {
  try {
    const post = await fetch("https://rel.ink/api/links/", {
      method: "POST",
      body: JSON.stringify({
        url: url,
      }),
      headers: {
        "Content-type": "application/json"
      },
    });
    const dataobj = await post.json();
    const hashes = getState().clientdata.hashes
    const newarray = [...hashes,dataobj]
    dispath({
      type:ADD_SHORT_URL_SUCCESS,
      payload:{
        array: newarray
      }
    })
  } catch (error) {
    console.log("error en add : " + error);
  }
};
