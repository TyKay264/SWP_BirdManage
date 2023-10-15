import React from 'react'

const BabyBirdCard = () => {
    return (
        <div className="col-lg-4 ">
            <div className="items widget-4 p-4 mb-4">
                <div className="bootstrap-media">
                    <div className="d-flex media">
                        <img
                            className="mr-3 img-fluid rounded"
                            width={60}
                            src="https://miluxinh.com/wp-content/uploads/2018/05/chich-choe-than-non.jpg"
                            alt="img"
                        />
                        <div className="media-body">
                            <a href="/bird/id">
                                <h4 className="mt-0 mb-1">ID vòng : B011  </h4>
                            </a>
                            <p className="mb-0">Chích Chòe Lửa mái</p>
                            <p className="mb-0">Giống: mái</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BabyBirdCard