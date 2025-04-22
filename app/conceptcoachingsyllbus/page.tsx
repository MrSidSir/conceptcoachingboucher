"use client";
import React from "react";
import Button from "@/components/button1";
import Boucherbutton from "@/components/homePageButton";

const page = () => {
  return (
    <div>
      {" "}
      This page is about tutor
      <h1> I am mr sid sir ,</h1>
      <p> I have done master in chemistry </p>
      <button> ok </button>
      {/* <Button /> */}
      <br />
      <div className=" border-2 border-red-950 p-10">
        {" "}
        <Boucherbutton />
      </div>
    </div>
  );
};

export default page;
