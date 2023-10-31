import LoginForm from "@/components/Form/LoginForm";
import React from "react";

const page = () => {
  return (
    <>
      <div id="main-wrapper" className="show">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 ">
              <div className="p-5">
                <div className="px-5">
                  <div className="px-5">
                    <div className="text-center">
                      <a className="logo flex" href="/login-in">
                        <img
                          className="img-fluid w-[20%]"
                          src="assets/images/download.png"
                          alt="icon page"

                        />
                        <img
                          className="img-fluid"
                          src="assets/images/logo.png"
                          alt="login page"
                        />
                      </a>
                    </div>
                    <div className="login-main">
                      <LoginForm />
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-6 login-page min-vh-100"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
