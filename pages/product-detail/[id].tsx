import React, { useEffect, useState } from 'react'
import CardDetails from "@/components/cardDetails/cardDeatils";
import { customPicks }  from "@/data";
import { useRouter } from 'next/router';

export default function ProductDetail(){
  const [isActive, setIsActive] = useState<any>(null);
  const router = useRouter();
  const { id } = router.query; 

  useEffect(() => {
    const productRes = customPicks.find(product => product.id === parseInt(id as any));
    setIsActive(productRes);
  }, [customPicks, id]);

  useEffect(()=>{
    console.log("productRes", isActive)
  },[isActive])
  return (
    <>
      <CardDetails  />
    </>
  )
}
