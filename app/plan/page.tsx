import React from "react";
import PlanHome from "@/components/plan/PlanHome";
import Plans from "@/components/plan/Plans";
import Featuresplans from "@/components/plan/Featuresplans";
import All from "@/components/plan/All";
// import ContactForm from "./ContactForm";

const Plan = () => {
  return (
    <section className="no-scrollbar">
      <PlanHome />
      <Plans/>
      <Featuresplans/>
      <All/>
    </section>
  );
};

export default Plan;
