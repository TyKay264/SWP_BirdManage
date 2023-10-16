'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


type BirdProps = {
    id: string,
    bird_type?: string,
    sex?: string,
    hatch_date?: string,
    father_id?: string,
    mother_id?: string,
    cage_id?: string,
    isAlive?: string,
    age_range?: string,
    mutation_rate?: number,
    mutation_note?: string,
    weight?: number,
    feather_color?: string,
    image?: string
}

const useBirds = () => {

    const [birds, setBirds] = useState<BirdProps[] | []>([]);
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        // CALL API (GET)

        // Hàm fetch staff
        const fetchBirds = async () => {
            try {
                const res = await axios.get(" http://localhost:3001/birds")

                setBirds(res.data)
                setLoading(true)
            } catch (error) {
                console.log(error)
            }
        }


        //Gọi lại hàm để chạy
        fetchBirds();
    }, [])

    return { birds, loading }
}

export default useBirds