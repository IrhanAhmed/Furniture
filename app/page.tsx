import HeroSection from "./component/Hero";
import FeaturesSection from "./component/Feature";
import NewCeramicsSection from "./component/NewCeramicsSection ";
import PopularProducts from "./component/Popular";
import ProductCard from "./component/Product";



export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
    <NewCeramicsSection/>
      <PopularProducts />
      </div>

   )}
