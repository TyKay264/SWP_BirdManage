import React from 'react'
import CageDiagramItem from './CageDiagramItem'
import { birds } from '@/data/data'
const CageDiagramList = () => {

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="widget-media list-doctors best-doctor">
                    <div className="timeline row">

                        {birds.map((bird) => (
                            <CageDiagramItem
                                key={bird.id}
                                id={bird.id}
                                name={bird.name}
                                specialty={bird.specialty}
                                imageSrc={bird.imageSrc}
                                starReview={bird.starReview}
                                process={bird.process}
                            />

                        ))}


                    </div>
                </div>
            </div>
        </div>
    )
}

export default CageDiagramList