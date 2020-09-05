import React from "react";

const AuthForm = () => {
  return (
    <div className="container text-left">
      <div className="row justify-content-center">
        <form
          className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 p-5 mt-5 rounded shadow-lg"
        >
          <legend className="mt-5 mb-4 font-weight-bold text-center">
            title
          </legend>

          <div className="form-row">
            <div className="col-12 mb-3">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="col-12 mb-1">
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-success btn-lg col-12 p-1 mt-4 mb-5"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
