'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Bird } from '@/type';
import { useParams } from 'next/navigation';


const useBirdId = () => {

    const params = useParams();

    const [bird, setBird] = useState<Bird | null>(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // CALL API (GET)

        // Hàm fetch staff
        const fetchBirds = async () => {
            try {
                const res = await axios.get(`https://bird-swp.azurewebsites.net/api/birds/view/${params.birdId}`)

                //const res = await axios.get("http://localhost:3001/birds")

                setBird(res.data)
                //console.log(res.data)
                setLoading(true)
            } catch (error) {
                console.log(error)
            }
        }

        //Gọi lại hàm để chạy
        fetchBirds();
    }, [params.birdId])

    return { bird, loading }
}

export default useBirdId