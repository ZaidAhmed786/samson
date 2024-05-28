import React, { useEffect, useState } from 'react';
import CustomizationPage from "../../components/customization/Customization"
import { customPicks } from "@/data";
import { useRouter } from 'next/router';

const Customization = () => {
  const [isActive, setIsActive] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const productRes = customPicks.find(product => product.id === parseInt(id));
      setIsActive(productRes);
    }
  }, [id]);

  useEffect(() => {
    console.log("productRes", isActive);
  }, [isActive]);

  return (
    <>
          <CustomizationPage  product={isActive}/>

    </>
  );
};

export default Customization;