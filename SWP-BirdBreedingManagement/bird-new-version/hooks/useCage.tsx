'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


type CageProps = {
    id: string,
    location: string;
    quantity: number;
}

const useCages = () => {

    const [cages, setCages] = useState<CageProps[] | []>([]);
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        // CALL API (GET)

        // Hàm fetch cage
        const fetchCages = async () => {
            try {
                const res = await axios.get(" http://localhost:3001/cages")

                setCages(res.data)
                setLoading(true)
            } catch (error) {
                console.log(error)
            }
        }


        //Gọi lại hàm để chạy
        fetchCages();
    }, [])

    return { cages, loading }
}

export default useCages