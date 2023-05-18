import React, {useEffect, useState} from "react";

export const useTest = () => {
  const [count,setCount] = useState(0);

  useEffect(() => {
    setCount(prev => prev + 1)
  },[])

  return [count,setCount];
}
