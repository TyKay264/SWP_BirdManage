'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


type StaffProps = {
    id: string
    username: string,
    email: string,
    password: string,
    fullname: string,
    createAt: Date,
    roleId: number,
}

const useStaffs = () => {

    const [staffs, setStaffs] = useState<StaffProps[] | []>([]);
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        // CALL API (GET)

        // Hàm fetch staff
        const fetchStaffs = async () => {
            try {
                const res = await axios.get(" http://localhost:3001/staffs")

                setStaffs(res.data)
                setLoading(true)
            } catch (error) {
                console.log(error)
            }
        }


        //Gọi lại hàm để chạy
        fetchStaffs();
    }, [])

    return { staffs, loading }
}

export default useStaffs