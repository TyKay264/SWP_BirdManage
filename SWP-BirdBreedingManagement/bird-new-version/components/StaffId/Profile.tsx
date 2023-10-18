import { Staff } from '@/type'
import React from 'react'



const Profile = ({ id, username, email, password, fullname, createdBy, createdDate, role }: Staff) => {
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
                    // onchange="showPreview(event);"
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
                <div className="flex justify-between mb-2.5;">
                  <label className='basis-[30%]'>ID:</label>
                  <div className="grow pl-2.5">{id}</div>
                </div>

                <div className="flex justify-between mb-2.5;">
                  <label className='basis-[30%]' >User Name:</label>
                  <div className="grow pl-2.5">{username}</div>
                </div>

                <div className="flex justify-between mb-2.5;">
                  <label className='basis-[30%]'>Email:</label>
                  <div className="grow pl-2.5">{email}</div>
                </div>

                <div className="flex justify-between mb-2.5;">
                  <label className='basis-[30%]'>Password:</label>
                  <div className="grow pl-2.5">{password}</div>
                </div>

                <div className="flex justify-between mb-2.5;">
                  <label className='basis-[30%]'>Full Name:</label>
                  <div className="grow pl-2.5">{fullname}</div>
                </div>

                <div className="flex justify-between mb-2.5;">
                  <label className='basis-[30%]'>Created By:</label>
                  <div className="grow pl-2.5">{createdBy}</div>
                </div>

                <div className="flex justify-between mb-2.5;">
                  <label className='basis-[30%]'>Created Date:</label>
                  <div className="grow pl-2.5">{createdDate}</div>
                </div>

                <div className="flex justify-between mb-2.5;">
                  <label className='basis-[30%]'>Role:</label>
                  <div className="grow pl-2.5">{role}</div>
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