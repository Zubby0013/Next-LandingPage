import Hero from "../Hero";
import LandingSections from "../LandingSections";
import ABetter from "./ABetter";
import Everything from "./Everything";
import StartUsing from "./StartUsing";
import TrustedBy from "./TrustedBy";
import WorkWithUs from "./WorkWithUs";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <ABetter/>
      <TrustedBy/>
      <Everything/>
      <StartUsing/>
      {/* <WorkWithUs/> */}
      {/* <LandingSections /> */}
    </div>
  );
};

export default HomeScreen;
