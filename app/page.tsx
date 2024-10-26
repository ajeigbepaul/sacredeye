import Benefits from "@/components/Benefits";
import Feature from "@/components/Feature";
import HomePage from "@/components/homecomponent/HomePage";
import How from "@/components/How";
import SacredEye from "@/components/SacredEye";
import Why from "@/components/Why";
export default function Home() {
  return (
    <div className="no-scrollbar ">
      <HomePage />
      <Feature/>
      <Why/>
      <How/>
      <Benefits/>
      <SacredEye/>
    </div>
  );
}
