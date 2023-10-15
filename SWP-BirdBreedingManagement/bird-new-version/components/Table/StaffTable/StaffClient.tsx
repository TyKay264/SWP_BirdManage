"use client";

import { DataTable } from "@/components/ui/data-table";
import { StaffColumn, columns } from "./column";
import { useState } from "react";

interface StaffClientProps {
  data: StaffColumn[];
}

const StaffClient = ({ data }: StaffClientProps) => {
  const [loading, setLoading] = useState(false);

  // dữ liệu bên đây truyền qua table để xử lý
  return (
    <div>
      <DataTable
        searchKey="username"
        columns={columns}
        data={data}
        loading={loading}
      />
    </div>
  );
};

export default StaffClient;
