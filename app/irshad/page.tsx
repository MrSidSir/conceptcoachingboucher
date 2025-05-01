import Address from "@/components/irshad/Address";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-[80%] mx-auto border-2 border-red-100">
      <Address />
    </div>
  );
};

export default page;
