'use client'

import Error from "@/components/Error";
import { useAuth } from "@/context/authContext"
import { useRouter } from "@/node_modules/next/navigation"

export default function ManagerRoute({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user } = useAuth();
    const router = useRouter();

    if (!user || user.role === "STAFF") {
        return <div className="content-body">
            <Error />
        </div>
    }
    return <div>{children}</div>
}