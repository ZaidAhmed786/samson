import React from 'react';
import TableComponent from '@/components/table/Table';

const TablePage = ({ orders }: any) => {
  return (
    <div>
      <TableComponent orders={orders} />
    </div>
  );
};

export default TablePage;

export async function getServerSideProps() {
  try {
    const res = await fetch('https://papa-johns.vercel.app/api/orders');
    if (res.ok) {
      const data = await res.json();
      return { props: { orders: data } };
    } else {
      console.error('Failed to fetch orders');
      return { props: { orders: [] } };
    }
  } catch (error) {
    console.error('An error occurred while fetching orders:', error);
    return { props: { orders: [] } };
  }
}