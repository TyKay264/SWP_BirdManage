import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavHeader from "@/components/NavHeader";
import SideBar from "@/components/SideBar";
import ModalProvider from "@/provider/modal-provider";


// npx json-server -w data/data.json -p 3001

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ModalProvider />
      <SideBar />
      <NavHeader />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
