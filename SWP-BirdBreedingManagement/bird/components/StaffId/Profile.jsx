import React from 'react'

const Profile = () => {
  return (

    <div className="card">
      <div className="card-header">
        <h4 className="card-title">Thông Tin</h4>
      </div>
      <div className="card-body">
        <div className="basic-form">
          <form>
            <div className="row">

              <div className="col-xl-4">
                <div className="form-group row widget-3">
                  
                    <div className="form-input">
                      <label
                        className="labeltest"
                        htmlFor="file-ip-1"
                      >
                        <span>
                          {" "}
                          ... {" "}
                        </span>
                      </label>
                      <input
                        type="file"
                        id="file-ip-1"
                        accept="image/*"
                        onchange="showPreview(event);"
                      />
                      <div className="preview">
                        <img
                          id="file-ip-1-preview"
                          src="#"
                          alt="img"
                        />
                      
                    </div>
                  </div>
                </div>
              </div>


              <div className="col-xl-8 ">
                <div className="form-group">
                  <label>ID:</label>
                  <div className="static-data">A01</div>
                </div>

                <div className="form-group">
                  <label>User Name:</label>
                  <div className="static-data">Minh Lu</div>
                </div>

                <div className="form-group">
                  <label>Email:</label>
                  <div className="static-data">Minhlu@gmail.com</div>
                </div>

                <div className="form-group">
                  <label>Password:</label>
                  <div className="static-data">MyPassword123</div>
                </div>

                <div className="form-group">
                  <label>Full Name:</label>
                  <div className="static-data">Hoàng Minh Lu</div>
                </div>

                <div className="form-group">
                  <label>Created By:</label>
                  <div className="static-data">Mai Thị Khôi</div>
                </div>

                <div className="form-group">
                  <label>Created Date:</label>
                  <div className="static-data">12/09/2022</div>
                </div>

                <div className="form-group">
                  <label>Role:</label>
                  <div className="static-data">Nhân viên</div>
                </div>

                


              </div>

            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile