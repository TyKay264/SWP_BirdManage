"use client";

import { DataTable } from "@/components/ui/data-table";
import { EggColumn, columns } from "./column";
import { useState } from "react";
import AddEggForm from "@/components/Form/AddEggForm";

interface EggClientProps {
  data: EggColumn[];
}

const EggClient = ({ data }: EggClientProps) => {
  const [loading, setLoading] = useState(false);

  // dữ liệu bên đây truyền qua table để xử lý
  return (
    <div>
      <DataTable
        searchKey="eggLaidDate"
        columns={columns}
        data={data}
        loading={loading}
      />
    </div>
  );
};

export default EggClient;
