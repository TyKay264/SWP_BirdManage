"use client";

import { DataTable } from "@/components/ui/data-table";
import { BirdColumn, columns } from "./column";
import { useState } from "react";

interface BirdClientProps {
    data: BirdColumn[];
}

const BirdClient = ({ data }: BirdClientProps) => {
    const [loading, setLoading] = useState(false);

    // dữ liệu bên đây truyền qua table để xử lý
    return (
        <div>
            <DataTable
                searchKey="bird_type"
                columns={columns}
                data={data}
                loading={loading}
            />
        </div>
    );
};

export default BirdClient;
