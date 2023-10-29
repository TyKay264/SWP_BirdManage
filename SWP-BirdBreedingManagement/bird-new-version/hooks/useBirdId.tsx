'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Bird } from '@/type';



const useBirdId = (id: any) => {

    const [birdId, setBirds] = useState<Bird | []>([]);
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        // CALL API (GET)

        // Hàm fetch staff
        const fetchBirds = async () => {
            try {
                const res = await axios.get(`https://bird-swp.azurewebsites.net/api/birds/view/${id}`)

                //const res = await axios.get("http://localhost:3001/birds")

                setBirds(res.data)
                //console.log(res.data)
                setLoading(true)
            } catch (error) {
                console.log(error)
            }
        }

        //Gọi lại hàm để chạy
        fetchBirds();
    }, [])

    return { birdId, loading }
}

export default useBirdId