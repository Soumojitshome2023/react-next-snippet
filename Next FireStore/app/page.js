"use client"
import { useState } from 'react';
import { firestore, collection, addDoc, doc, setDoc, updateDoc, getDocs, getDoc, onSnapshot, deleteDoc } from '../FireBase/FireBase';
import { where, query } from "firebase/firestore";

export default function Page() {
  const [data1, setData1] = useState('');
  const [data2, setData2] = useState('');
  const [data3, setData3] = useState('');
  const [data4, setData4] = useState('');

  // ============================= Add Data =============================
  const AddData = async () => {
    const dataToAdd = {
      data11: data1,
      data22: data2,
      data33: data3,
      data44: data4,
    };

    try {
      const docRef = await addDoc(collection(firestore, 'yourCollectionName'), dataToAdd);
      console.log('Document added with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  }
  // ====================================================================

  // ============================= Set Data =============================
  const SetData = async () => {
    const dataToSet = {
      data11: data1,
      data22: data2,
      data33: data3,
      data44: data4,
    };

    const docRef = doc(firestore, 'yourCollectionName', 'documentId');

    try {
      await setDoc(docRef, dataToSet);
      console.log('Document set successfully!');
    } catch (error) {
      console.error('Error setting document: ', error);
    }
  }
  // ====================================================================

  // ============================ Update Data ===========================
  const UpdateData = async () => {
    const dataToUpdate = {
      data11: data1,
      data22: data2,
      data33: data3,
      data44: data4,
    };

    const docRef = doc(firestore, 'yourCollectionName', 'documentId'); // Replace 'yourCollectionName' and 'documentId'

    try {
      await updateDoc(docRef, dataToUpdate);
      console.log('Document updated successfully!');
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  }
  // ====================================================================

  // ==================== Fetch Data From Collection ====================
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, 'yourCollectionName')); // Replace 'yourCollectionName'
      querySnapshot.forEach((doc) => {
        console.log('Document ID: ', doc.id, 'Data: ', doc.data());
      });
    } catch (error) {
      console.error('Error fetching documents: ', error);
    }
  };

  // ====================================================================

  // ====================== Fetch Data From Doc ID ======================
  const fetchData_doc = async () => {
    try {
      const docRef = doc(firestore, 'yourCollectionName', 'documentId'); // Replace 'yourCollectionName' and 'yourDocumentID'
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log('Document Data: ', docSnap.data());
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.error('Error fetching document: ', error);
    }
  };

  // ====================================================================

  // ============================= Snapshot =============================
  const get_snapshot = () => {
    const collectionRef = collection(firestore, 'yourCollectionName'); // Replace 'yourCollectionName'
    onSnapshot(collectionRef, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log('Document ID: ', doc.id, 'Data: ', doc.data());
      });
    });
  };
  // ====================================================================

  // =========================== Delete Data ============================
  const DeleteData = async () => {
    try {
      const docRef = doc(firestore, 'yourCollectionName', 'documentId'); // Replace 'yourCollectionName' and 'documentId'
      await deleteDoc(docRef);
      console.log('Document deleted successfully!');
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  }
  // ====================================================================

  // ========================= Get Data By Query ========================
  const get_data_query = async () => {
    const q = query(collection(firestore, "yourCollectionName"), where("data33", "==", "d"));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot)
    querySnapshot.forEach((todo) => {
      console.log(todo.data());
    });
  }
  // ====================================================================


  return (
    <div>
      <input type="text" name='data1' value={data1} onChange={e => setData1(e.target.value)} placeholder='data1' />
      <input type="text" name='data2' value={data2} onChange={e => setData2(e.target.value)} placeholder='data2' />
      <input type="text" name='data3' value={data3} onChange={e => setData3(e.target.value)} placeholder='data3' />
      <input type="text" name='data4' value={data4} onChange={e => setData4(e.target.value)} placeholder='data4' />
      <br />
      <button onClick={AddData}>Add Data</button>
      <button onClick={SetData}>Set Data</button>
      <button onClick={UpdateData}>Update Data</button>
      <button onClick={fetchData}>Fetch Data From Collection</button>
      <button onClick={fetchData_doc}>Fetch Data From Doc ID</button>
      <button onClick={get_snapshot}>Snapshot</button>
      <button onClick={DeleteData}>Delete Data</button>
      <button onClick={get_data_query}>Get Data By Query</button>

    </div>
  );
}
