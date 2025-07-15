import { useState,useEffect } from 'react';

export default function CustomerHome() 
{
     const [customer, setCustomer] = useState("");
     
     useEffect(() => {
       const storedCustomer = sessionStorage.getItem('customer');
       if (storedCustomer) {
        setCustomer(JSON.parse(storedCustomer));
       }
     }, []);
     
  return (
    <div>
      <h3>Hello {customer.name}</h3>
    </div>
  )
}
