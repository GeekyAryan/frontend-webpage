import Header from "../usercomponents/Header";
import Footer from "../usercomponents/Footer";
import Banner from "../usercomponents/Banner";
import ElectronicAppliances from "../usercomponents/ElectronicAppliances";
import BannerItem from "../usercomponents/BannerItem";
import { AppBar } from "@mui/material";
import PaperBar from "../usercomponents/PaperBar";

export default function Home(props) {
  return (
    <div>
      <Header />

     {/* <AppBar /> */}

      {/* <PaperBar />  */}


      <div style={{width:'100%'}}>
        <Banner />
      </div>
      <div style={{width:'100%'}}>
        <BannerItem />
      </div>

      <div style={{width:'100%'}}>
        <ElectronicAppliances />
      </div>

      <div style={{width:'100%'}}>
        <Footer />
      </div>
    </div>
  );
}
