import React, {useState,useEffect} from "react";

export const useCount = () => {
  const [count,setCount] = useState(0);

  useEffect(() => {
    setCount(prev => prev + 1)
  },[])

  return [count,setCount];
}
