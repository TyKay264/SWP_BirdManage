import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavHeader from "@/components/NavHeader";
import SideBar from "@/components/SideBar";


// npx json-server -w data/product.json -p 3001  

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
