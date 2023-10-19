"use client"
import Profile from '@/components/BirdId/Profile'
import BreadScrum from '@/components/BreadScrum'
// import { birds } from '@/data/data'
import useBirds from '@/hooks/useBirds'

import { useParams } from 'next/navigation'

import React from 'react'

const BirdIdPage = () => {
  const params = useParams();
  const { birds, loading } = useBirds()
  const IdFilter = birds.find((bird) => bird.id === params.birdId);
  return (
    <div id="main-wrapper" className="show">
      <div className="content-body">
        <div className="warper container-fluid">
          <div className="all-patients main_container">
            <BreadScrum title='Thông Tin Chích Chòe' subRouteTitle='bird' subTitle1='Tất Cả Chích Chòe' subTitle2='Thông Tin Chích Chòe' />
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <Profile
                    id={IdFilter?.id}
                    bird_type={IdFilter?.bird_type}
                    isMale={IdFilter?.sex}
                    hatch_date={IdFilter?.hatch_date}
                    father_id={IdFilter?.father_id}
                    mother_id={IdFilter?.mother_id}
                    cageid={IdFilter?.cageid}
                    isAlive={IdFilter?.isAlive}
                    ageRange={IdFilter?.ageRange}
                    mutationRate={IdFilter?.mutationRate}
                    mutation={IdFilter?.mutation}
                    weight={IdFilter?.weight}
                    featherColor={IdFilter?.featherColor}
                  // image = {IdFilter?.image}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BirdIdPage