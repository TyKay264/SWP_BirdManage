import React from 'react'

const Profile = () => {
  return (

    <div className="card">
      <div className="card-header ">
        <h4 className="card-title ">Thông tin</h4>
      </div>
      <div className="card-body">
        <div className="basic-form">
          <form>
            <div className="row">

              <div className="image col-xl-4">
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
                  <label>Bird Type:</label>
                  <div className="static-data">Chích Chòe Than</div>
                </div>

                <div className="form-group">
                  <label>Sex:</label>
                  <div className="static-data">Trống</div>
                </div>

                <div className="form-group">
                  <label>Date Of Birth:</label>
                  <div className="static-data">08/09/2023</div>
                </div>

                <div className="form-group">
                  <label>Father Id:</label>
                  <div className="static-data">A02</div>
                </div>

                <div className="form-group">
                  <label>Mother Id:</label>
                  <div className="static-data">A03</div>
                </div>
                
                <div className="form-group">
                  <label>Cage Id:</label>
                  <div className="static-data">B01</div>
                </div>

                <div className="form-group">
                  <label>Range:</label>
                  <div className="static-data">Trưởng Thành</div>
                </div>

                <div className="form-group">
                  <label>Mutation(%):</label>
                  <div className="static-data">5</div>
                </div>

                <div className="form-group">
                  <label>Weight(g):</label>
                  <div className="static-data">300</div>
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