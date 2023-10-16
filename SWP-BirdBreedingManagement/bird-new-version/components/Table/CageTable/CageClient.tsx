"use client";

import { DataTable } from "@/components/ui/data-table";
import { CageColumn, columns } from "./column";
import { useState } from "react";

interface CageClientProps {
    data: CageColumn[];
}

const CageClient = ({ data }: CageClientProps) => {
    const [loading, setLoading] = useState(false);

    // dữ liệu bên đây truyền qua table để xử lý
    return (
        <div>
            <DataTable
                searchKey="location"
                columns={columns}
                data={data}
                loading={loading}
            />
        </div>
    );
};

export default CageClient;
