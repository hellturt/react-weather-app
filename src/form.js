import React from 'react';

const Form = (props) => {
  return(
    <form className="form_container" onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="Location..." />
      <button>Search</button>
    </form>
  )
}

export default Form;
