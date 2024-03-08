import React from "react";

import { partners } from "@/data/partners";

import DetailCard from "@/components/ui/detailCard/DetailCard";

const Partners = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-32 sm:px-6 lg:px-32">
      <div className="space-y-12">
        <h3 className="mx-auto text-center text-4xl font-medium">Our mates</h3>

        <ul
          role="list"
          className="grid auto-rows-fr space-y-12 sm:gap-x-16 sm:gap-y-12 sm:space-y-0 md:grid-cols-2 lg:gap-x-16"
        >
          {partners.map((partner) => (
            <DetailCard key={partner.name} DetailCardData={partner} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Partners;
