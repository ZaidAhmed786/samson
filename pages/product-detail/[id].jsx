// pages/products/[id].tsx

import React, { useEffect, useState } from 'react';
import CardDetails from '../../components/cardDetails/cardDeatils'; // Adjust the import path as needed
import { useRouter } from 'next/router';

const Customization = ({ product }) => {
  // const [isActive, setIsActive] = useState(product);
  
  const router = useRouter();

  console.log('product details data active<><>', product);;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <CardDetails product= {product} />
    </>
  );
};



export async function getStaticProps(context) {
  const { id } = context.params;
  console.log("id...", id)
  // Fetch the product data based on the 'id' from your API
  const res = await fetch(`https://papa-johns.vercel.app/api/products/${id}`);
  const product = await res.json();
console.log(product)
  return {
    props: {
      product: product.data || null, // Pass the product data or null if not found
    },
    revalidate: 10, // Optionally revalidate the data every 10 seconds
  };
}

export default Customization;
export async function getStaticPaths() {
  // Fetch the list of valid product IDs from your API
  const res = await fetch('https://papa-johns.vercel.app/api/products?limit=1');
  const products = await res.json(); 
  const paths = products.data.map((product) => ({
    params:  {id: product._id.toString()} ,
  }));
   
  return {
    paths,
    fallback: true, // Set to 'true' or 'blocking' as needed
  };
}