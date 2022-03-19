import React from "react";
import { Link } from "react-router-dom";

function Forms() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
  });
  console.log(formData.employment);

  function onHandleChange(event) {
    const { name, value, type, checked } = event.target;
    console.log(name + " " + value);
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function onHandleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted!");
  }

  return (
    <div className="forms-wrapper pt-3">
      <h1 className="text-center">Form</h1>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 mx-auto">
            <form className="pt-3" onSubmit={onHandleSubmit}>
              <input
                type="text"
                name="firstName"
                id=""
                placeholder="First Name"
                value={formData.firstName}
                onChange={onHandleChange}
              />
              <br />
              <br />
              <input
                type="text"
                name="lastName"
                id=""
                placeholder="Last Name "
                value={formData.lastName}
                onChange={onHandleChange}
              />
              <br />
              <br />
              <input
                type="text"
                name="email"
                id=""
                placeholder="Email  "
                value={formData.email}
                onChange={onHandleChange}
              />
              <br />
              <br />
              <textarea
                name="comments"
                id=""
                cols="22"
                rows="5"
                placeholder="type your comment..."
                value={formData.comments}
                onChange={onHandleChange}
              />
              <br />
              <br />
              <input
                type="checkbox"
                name="isFriendly"
                id="isFriendly"
                checked={formData.isFriendly}
                onChange={onHandleChange}
              />
              <label htmlFor="isFriendly" className="ps-2">
                Are you friendly?
              </label>
              <br />
              <br />
              <fieldset>
                <legend>Current employment status</legend>

                <input
                  type="radio"
                  id="unemployed"
                  name="employment"
                  value="unemployed"
                  checked={formData.employment === "unemployed"}
                  onChange={onHandleChange}
                />
                <label htmlFor="unemployed" className="ps-2">
                  Unemployed
                </label>
                <br />

                <input
                  type="radio"
                  id="part-time"
                  name="employment"
                  value="part-time"
                  checked={formData.employment === "part-time"}
                  onChange={onHandleChange}
                />
                <label htmlFor="part-time" className="ps-2">
                  Part-time
                </label>
                <br />
                <input
                  type="radio"
                  id="full-time"
                  name="employment"
                  value="full-time"
                  checked={formData.employment === "full-time"}
                  onChange={onHandleChange}
                />
                <label htmlFor="full-time" className="ps-2">
                  Full-time
                </label>
                <br />
              </fieldset>
              <button className="btn btn-success">Submit</button>
            </form>
            <div className="pt-2">
            <Link to="/form2">Another Form</Link>
            </div>
          </div>
        </div>
        <small>[ Topic: React Form]</small>
      </div>
    </div>
  );
}

export default Forms;
