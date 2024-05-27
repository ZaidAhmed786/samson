import React from 'react';
import Menu from '@/components/papajhon_menu/Menu';
// import CardDetails from '@/components/cardDetails/cardDeatils';
// import Customization from '@/components/customization/Customization';
// import AddressForm from '@/components/address_form/AddressForm';
// import Cart from '@/components/cart/Cart';
// import AddToCardPopUp from '@/components/add_to_card_popup/AddToCardPopUp';

export async function getServerSideProps() {
  const response = await fetch('https://papa-johns.vercel.app/api/products');
  const data = await response.json();

  return {
    props: { data },
  };
}

const PizzaMenu = ({ data }) => {
  return (
    <div>
      {/* <AddToCardPopUp /> */}
      <Menu data={data} />
      {/* <CardDetails /> */}
      {/* <Customization /> */}
      {/* <Cart /> */}
      {/* <AddressForm /> */}
    </div>
  );
};

export default PizzaMenu;
