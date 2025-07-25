import React from "react";
import {
  NannyIcon,
  PetCareICon,
  DriverICon,
  ChefICon,
  ElderCareICon,
  HousekeeperICon,
  LaundryICon,
  CleanerIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import BgImage from "@/public/images/image 6.svg";

const SERVICE_LIST = [
  {
    label: "Nanny",
    value: "CHILDCARE_NANNY",
    icon: <NannyIcon />,
    color: "#0E92C7",
  },
  {
    label: "Cleaner",
    value: "CLEANER",
    icon: <CleanerIcon />,
    color: "#009987",
  },
  {
    label: "Housekeeper",
    value: "HOUSEKEEPER",
    icon: <HousekeeperICon />,
    color: "#8F76B8",
  },
  { label: "Chef", value: "CHEF", icon: <ChefICon />, color: "#F1473C" },
  { label: "Driver", value: "DRIVER", icon: <DriverICon />, color: "#0D5EBA" },
  {
    label: "Elder care",
    value: "ELDER_CARE",
    icon: <ElderCareICon />,
    color: "#E74A8A",
  },
  {
    label: "Laundry man",
    value: "LAUNDRY_WASHER",
    icon: <LaundryICon />,
    color: "#AB5BA6",
  },
];

const ServiceSection = () => {
  return (
    <section
      className=" py-20"
      style={{
        backgroundImage: `url(${BgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1136px] mx-auto">
        <div className="w-full max-w-[640px] mx-auto text-center mb-12">
          <h2 className="text-[32px] text-[#344054] font-semibold mb-3">
            Because the right help changes everything
          </h2>
          <p className="text-base text-[#475367]">
            Getting the help you need shouldn’t be hard. With ULO, it isn’t. We
            bring you verified caregivers, fast matching, and support every step
            of the way.
          </p>
        </div>
        <div className="relative flex items-center justify-between gap-5 overflow-hidden scrollbar-hide overflow-x-scroll mt-10">
          <div className="absolute -left-10 top-0 bottom-0 w-[160px] bg-gradient-to-r from-[#fafafa] via-white to-transparent z-10 pointer-events-none" />

          {SERVICE_LIST.map((service) => (
            <div
              key={service.label}
              className="flex flex-col items-center justify-center gap-4 p-6 border border-[#E4E7EC] rounded-[24px] w-[160px] h-[120px]"
            >
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full"
                style={{ backgroundColor: `${service.color}1A` }}
              >
                {service.icon}
              </div>
              <p
                className="text-sm font-semibold whitespace-nowrap"
                style={{ color: service.color }}
              >
                {service.label}
              </p>
            </div>
          ))}
          <div className="absolute -right-10 top-0 bottom-0 w-[160px] bg-gradient-to-l from-[#fafafa] via-white to-transparent z-10 pointer-events-none" />
        </div>
        <div className="flex items-center justify-center mt-16">
          <Button className="shadow-md">Get started</Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
