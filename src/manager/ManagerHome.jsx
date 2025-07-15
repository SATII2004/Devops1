import { useState,useEffect } from 'react';

export default function ManagerHome() 
{
     const [manager, setManager] = useState("");
     
     useEffect(() => {
       const storedManager = sessionStorage.getItem('manager');
       if (storedManager) {
         setManager(JSON.parse(storedManager));
       }
     }, []);
     
  return (
    <div>
      <h3>Hello {manager.name}</h3>
    </div>
  )
}
