import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

// Messages
const required = "This field is required";
const maxLength = "Your input exceed maximum length";

// Error Component
const errorMessage = error => {
  return <div className="invalid-feedback">{error}</div>;
};

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="container-fluid">
      <div className="col-sm-12">
        <h3>Profile</h3>
      </div>
      <div className="col-sm-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Username"
              name="Username"
              ref={register({ required: true, maxLength: 20 })}
            />
            {errors.Username &&
              errors.Username.type === "required" &&
              errorMessage(required)}
            {errors.Username &&
              errors.Username.type === "maxLength" &&
              errorMessage(maxLength)}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Name"
              name="Name"
              ref={register({ required: true, maxLength: 50 })}
            />
            {errors.Name &&
              errors.Name.type === "required" &&
              errorMessage(required)}
            {errors.Name &&
              errors.Name.type === "maxLength" &&
              errorMessage(maxLength)}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="tel"
              placeholder="Mobile number"
              name="MobileNumber"
              ref={register({ maxLength: 12 })}
            />
            {errors.MobileNumber &&
              errors.MobileNumber.type === "maxLength" &&
              errorMessage(maxLength)}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              name="Email"
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.Email &&
              errors.Email.type === "required" &&
              errorMessage(required)}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Password"
              name="Password"
              ref={register({ required: true })}
            />
            {errors.Password &&
              errors.Password.type === "required" &&
              errorMessage(required)}
          </div>
          <div className="form-group">
            <label>Gender</label>
            <br />
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="genderOptions"
                value="Male"
                id="inlineRadio1"
                ref={register}
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="genderOptions"
                value="Female"
                id="inlineRadio2"
                ref={register}
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Female
              </label>
            </div>
          </div>
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
              ref={register}
              name="Check me out"
            />
            <label class="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>

          <div className="form-group">
            <input className="btn btn-primary" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
