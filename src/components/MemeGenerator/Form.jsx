import React from "react";

function Form(props) {
  const { formData, setFormData } = props;

  function onHandleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }
  function onHandleSubmit(event) {
    event.preventDefault();
    props.btnClick();
  }
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 mx-auto">
          <form onSubmit={onHandleSubmit}>
            <div className="row justify-content-center">
              <div className="col-4">
                <input
                  type="text"
                  name="topText"
                  placeholder="Top Text"
                  className="form-control"
                  value={formData.topText}
                  onChange={onHandleChange}
                />
              </div>
              <div className="col-4">
                <input
                  type="text"
                  name="bottomText"
                  placeholder="Bottom Text"
                  className="form-control"
                  value={formData.bottomText}
                  onChange={onHandleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4 mx-auto">
                <button className="btn btn-primary mt-3 navbarColor meme--btn">
                  Get a new meme image
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
