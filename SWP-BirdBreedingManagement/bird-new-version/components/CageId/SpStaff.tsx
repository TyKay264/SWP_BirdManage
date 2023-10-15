import React from 'react'

const SpStaff = () => {
    return (
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Nhân Viên Phụ Trách</h4>
            </div>
            <div className="card-body">
                <div className="basic-form">
                    <form>
                        <div className="row">

                            <div className="col-xl-4">
                                <div className="form-group row widget-3">
                                    <div className='text-center'>
                                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOyyYZ2N2uQrOktRkIsi1ZS0NBnq5VVXlpAw&usqp=CAU' className='mx-auto' alt='Centered Image' />
                                    </div>
                                  
                                </div>
                            </div>


                            <div className="col-xl-8 ">
                                <div className="flex justify-between mb-2.5;">
                                    <label className='basis-[30%]'>ID:</label>
                                    <div className="grow pl-2.5">A01</div>
                                </div>

                                <div className="flex justify-between mb-2.5;">
                                    <label className='basis-[30%]' >User Name:</label>
                                    <div className="grow pl-2.5">Minh Lu</div>
                                </div>                                                          

                                <div className="flex justify-between mb-2.5;">
                                    <label className='basis-[30%]'>Full Name:</label>
                                    <div className="grow pl-2.5">Hoàng Minh Lu</div>
                                </div>
                             
                           
                                <div className="flex justify-between mb-2.5;">
                                    <label className='basis-[30%]'>Role:</label>
                                    <div className="grow pl-2.5">Nhân viên</div>
                                </div>




                            </div>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default SpStaff