"use client";
import React, { useEffect } from "react";
import { WOW } from "wowjs";

const WowOver = () => {
  useEffect(() => {
    new WOW().init();
  }, []);
  return <></>;
};

export default WowOver;
