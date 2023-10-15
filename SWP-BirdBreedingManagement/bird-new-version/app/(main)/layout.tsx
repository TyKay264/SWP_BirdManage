import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavHeader from "@/components/NavHeader";
import SideBar from "@/components/SideBar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SideBar />
      <NavHeader />
      <Header />
      {children}
      <Footer/>
    </div>
  );
}
