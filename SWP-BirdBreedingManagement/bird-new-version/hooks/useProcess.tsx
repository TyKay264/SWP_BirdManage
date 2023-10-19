'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


type ProcessProps = {
    id: string,
    mother_id: string,
    father_id: string,
    cageid: string,
    bird_type: string
}

const useProcesses = () => {

    const [processes, setProcesses] = useState<ProcessProps[] | []>([]);
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        // CALL API (GET)

        // Hàm fetch process
        const fetchProcesses = async () => {
            try {
                const res = await axios.get(" http://localhost:3001/processes")

                setProcesses(res.data)
                setLoading(true)
            } catch (error) {
                console.log(error)
            }
        }


        //Gọi lại hàm để chạy
        fetchProcesses();
    }, [])

    return { processes, loading }
}

export default useProcesses