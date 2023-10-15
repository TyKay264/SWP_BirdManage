"use client"
import Profile from '@/components/BirdId/Profile'
import BreadScrum from '@/components/BreadScrum'
import { birds } from '@/data/data'
import { useParams } from 'next/navigation'

import React from 'react'

const BirdIdPage = () => {
  const params = useParams();

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
                    isMale={IdFilter?.isMale}
                    hatch_date={IdFilter?.hatch_date}
                    father_id={IdFilter?.father_id}
                    mother_id={IdFilter?.mother_id}
                    cage_id={IdFilter?.cage_id}
                    isAlive={IdFilter?.isAlive}
                    age_range={IdFilter?.age_range}
                    mutation_rate={IdFilter?.mutation_rate}
                    mutation_note={IdFilter?.mutation_note}
                    weight={IdFilter?.weight}
                    feather_color={IdFilter?.feather_color}
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