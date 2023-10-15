"use client"
import { useState } from 'react';
import { database, push, ref, set, get, remove } from '../firebase/firebase';

export default function Page() {
  const [data1, setData1] = useState('');
  const [data2, setData2] = useState('');
  const [data3, setData3] = useState('');
  const [data4, setData4] = useState('');

  // ============================ Push Data ============================ 
  const pushData = () => {
    const dataRef = ref(database, 'yourDatabasePath'); // Replace 'yourDatabasePath'

    const dataToPush = {
      data1,
      data2,
      data3,
      data4,
    };

    // Push the data to the node, which will automatically generate a unique key
    push(dataRef, dataToPush);
    console.log("Data Push Done");
  }
  // ====================================================================
  // ============================= Set Data =============================
  const setData = () => {
    const dataRef = ref(database, 'yourDatabasePath/myFolder'); // Replace 'yourDatabasePath'

    const dataToSet = {
      data1,
      data2,
      data3,
      data4,
    };

    // Set the data at the specified path
    set(dataRef, dataToSet);
    console.log("Data Set Done");
  }

  // ====================================================================

  // ============================ Fetch Data ============================
  const fetchData = async () => {
    const dataRef = ref(database, 'yourDatabasePath'); // Replace 'yourDatabasePath'

    try {
      const snapshot = await get(dataRef);

      if (snapshot.exists()) {
        const fetchedData = snapshot.val();

        console.log('Fetched Data:', fetchedData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  // ====================================================================

  // ============================ Delete Data ============================
  const deleteData = async () => {
    const dataRef = ref(database, 'yourDatabasePath/myFolder'); // Replace 'yourDatabasePath'

    try {
      const snapshot = await get(dataRef);

      if (snapshot.exists()) {
        const fetchedData = snapshot.val();

        await remove(dataRef);
        console.log('Data deleted successfully.');
      }
    }
    catch (error) {
      console.error('Error deleting data:', error);
    }
  };
  // ====================================================================


  return (
    <div>
      <input type="text" value={data1} onChange={(e) => setData1(e.target.value)} />
      <input type="text" value={data2} onChange={(e) => setData2(e.target.value)} />
      <input type="text" value={data3} onChange={(e) => setData3(e.target.value)} />
      <input type="text" value={data4} onChange={(e) => setData4(e.target.value)} />
      <br />

      <button onClick={pushData}>Push Data</button>
      <button onClick={setData}>Set Data</button>
      <button onClick={fetchData}>Fetch Data</button>
      <button onClick={deleteData}>Delete Data</button>

    </div>
  );
}
