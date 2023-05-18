"use client"

import React from "react";

import {useCount} from "@mn-nx/eslib";

export const Count = () => {
  const [count,setCount] = useCount();

  return <div>{count}</div>
}
