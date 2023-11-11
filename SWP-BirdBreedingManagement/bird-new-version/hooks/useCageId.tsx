'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Cage } from '@/type';
import { useParams } from 'next/navigation';


const useCageId = () => {

    const params = useParams();

    const [cage, setCage] = useState<Cage | null>(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // CALL API (GET)

        // Hàm fetch staff
        const fetchCages = async () => {
            try {
                const res = await axios.get(`https://bird-swp.azurewebsites.net/api/cages/view/${params.cageId}`)

                //const res = await axios.get("http://localhost:3001/birds")

                setCage(res.data)
                //console.log(res.data)
                setLoading(true)
            } catch (error) {
                console.log(error)
            }
        }

        //Gọi lại hàm để chạy
        fetchCages();
    }, [params.cageId, cage])

    return { cage, loading }
}

export default useCageId