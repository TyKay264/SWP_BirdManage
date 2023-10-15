import React from 'react'


import TableFemale from './TableFemale'
import TableMale from './TableMale'

const Table = () => {
  return (
    <div className='container'>
      <div className='row my-3'>
        <div className='col-md-6'>
          <div className="card">
            <div className="card-header fix-card">
              <div className="row">
                <div className="col-8">
                  <h4 className="card-title">Chọn Chim Trống </h4>
                </div>
              </div>
            </div>
            <div className='p-3'><TableMale /></div>
          </div>
        </div>
        <div className='col-md-6'>
          <div className="card">
            <div className="card-header fix-card">
              <div className="row">
                <div className="col-8">
                  <h4 className="card-title">Chọn Chim Mái </h4>
                </div>
              </div>
            </div>
            <div className='p-3'><TableFemale /></div>
          </div>
        </div>
      </div>
      <div className='text-center mb-3'> <button type="button" className="btn btn-primary ">Ghép Giống</button> </div>
    </div>
  )
}

export default Table
