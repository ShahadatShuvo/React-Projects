import React from "react";

function Form2() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    doJoin: true,
  });

  function onFormDataChange(event) {
    const { name, value } = event.target;
    console.log(name + " " + value);
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }
  function onHandleSubmit(event) {
    event.preventDefault();
    if (
      formData.email === "" ||
      formData.password === "" ||
      formData.confirmPassword === ""
    ) {
      alert("Please fill-up all empty boxes.");
    } else {
      alert("Successfully submitted. ");
    }
  }
  return (
    <div className="form2-wrapper pt-3">
      <h3 className="text-center">Form practice project</h3> <hr />
      <div className="container">
        <div className="row">
          <div className="col-4 mx-auto">
            <form onSubmit={onHandleSubmit}>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={onFormDataChange}
              />
              <br />
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={onFormDataChange}
              />
              <br /> <br />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={onFormDataChange}
              />{" "}
              <br />
              <br />
              <input
                type="checkbox"
                name="doJoin"
                id="doJoin"
                checked={formData.doJoin}
                onChange={onFormDataChange}
              />
              <label htmlFor="doJoin" className="ps-2">
                I want to join the newsletter
              </label>{" "}
              <br /> <br />
              <button className="btn btn-success">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form2;
