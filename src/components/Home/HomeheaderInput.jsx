import React from "react";
import { useForm } from "react-hook-form";
import {useDispatch} from 'react-redux'
import {addShortUrlAction} from '../../Redux/clientDucks'

function HomeheaderInput() {
  const { handleSubmit, register, errors } = useForm();
  const dispatch = useDispatch()
  //funcionality

  function onSubmit(data,e){
    e.target.reset()
    console.log(data)
    dispatch(addShortUrlAction(data.url))
  }

  return (
    <form
      action=""
      className="row justify-content-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <input
          type="text"
          className="col-12"
          name="url"
          placeholder = "Shorten a link here..."
          ref={register({
            required: {
              value: true,
              message: "Please add a link",
            },
          })}
        />
        <i className="error d-block">{errors?.url?.message}</i>
      </div>
      <button type="submit" className="col-12 ">
        SHORTEN IT!
      </button>
    </form>
  );
}

export default HomeheaderInput;
