import React from "react";
import "./index.css";

function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">
            <div className="text">
              <h1>Sign Up</h1>
            </div>
            <p>Use Your OpenID To Sign Up</p>
            <form>
              <div class="mb-3">
                <label className="text" for="exampleInputEmail1" class="form-label">
                  Email
                </label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label className="text" for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>
              <div class="mb-3">
                <label className="text" for="exampleInputPassword1" class="form-label">
                  Confirm Password
                </label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">
                  By SignUp | agree that I'm 18 years of age or older, to the User Agrements, Privacy Policy, Cookie Policy,E-sign Conset.
                </label>
              </div>
              <button class="mb-3" type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
