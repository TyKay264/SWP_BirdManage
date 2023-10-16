"use client";

import { DataTable } from "@/components/ui/data-table";
import { ProcessColumn, columns } from "./column";
import { useState } from "react";

interface ProcessClientProps {
    data: ProcessColumn[];
}

const ProcessClient = ({ data }: ProcessClientProps) => {
    const [loading, setLoading] = useState(false);

    // dữ liệu bên đây truyền qua table để xử lý
    return (
        <div>
            <DataTable
                searchKey="id"
                columns={columns}
                data={data}
                loading={loading}
            />
        </div>
    );
};

export default ProcessClient;
