'use client'

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavHeader from "@/components/NavHeader";
import SideBar from "@/components/SideBar";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import ModalProvider from "@/provider/modal-provider";
import ToastProvider from "@/provider/toast-provider";

// npx json-server -w data/data.json -p 3001

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const router = useRouter();
  const { user } = useAuth()

  if (!user) {
    router.push('/login-in')
  }
  return (
    <div>

      <ModalProvider />
      <SideBar />
      <NavHeader />
      <Header />
      <div className="flex flex-col">
        <div className="flex-1">{children}</div>
        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
}
