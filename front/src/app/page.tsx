import ActionButton from "@/components/UI/ActionButton/ActionButton";
import LandingView from "@/components/UI/views/LandingView/LandingView";
import Image from "next/image";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <LandingView />
    </div>
  );
};

export default LandingPage;
