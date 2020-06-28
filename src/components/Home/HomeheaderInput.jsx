import React from "react";
import { useForm } from "react-hook-form";
function HomeheaderInput() {
  const { handleSubmit, register, errors } = useForm();
  return (
    <form
      action=""
      className="row justify-content-center"
      onSubmit={handleSubmit((data) => console.log(data + "enviado!"))}
    >
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
      <i className="error">{errors?.url?.message}</i>
      <button type="submit" className="col-12 ">
        SHORTEN IT!
      </button>
    </form>
  );
}

export default HomeheaderInput;
