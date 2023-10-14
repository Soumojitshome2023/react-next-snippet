"use client"
import { useState } from "react"
import firebaseConfig from "../FireBaseConfig/FireBaseConfig"
import { ref, set, get, update, remove, child } from "firebase/database"

const database = firebaseConfig();

function FirebaseCrud() {
    let [data1, setdata1] = useState('');
    let [data2, setdata2] = useState('');
    let [data3, setdata3] = useState('');
    let [data4, setdata4] = useState('');

    // ====================== Insert Data ======================
    let InsertData = () => {
        set(ref(database, 'customer'), {
            data1: data1,
            data2: data2,
            data3: data3,
            data4: data4,
        }).then(() => {
            console.log("Insert Done")
        }).catch(() => {
            console.log("Error on Insert")
        });
    }

    // ====================== Select Data ======================
    let SelectData = () => {
        const dbref = ref(database);
        get(child(dbref, 'customer')).then(snapshot => {
            if (snapshot.exists()) {
                console.log(snapshot.val().data1);
                console.log(snapshot.val().data2);
                console.log(snapshot.val().data3);
                console.log(snapshot.val().data4);
            }
        }).catch((error) => {
            console.log(error);
        })
    }

    // ====================== Update Data ======================
    let UpdateData = () => {
        update(ref(database, 'customer'), {
            data1: data1,
            data2: data2,
            data3: data3,
            data4: data4,
        }).then(() => {
            console.log("Update Done")
        }).catch(() => {
            console.log("Error on Update")
        });
    }

    // ====================== Delete Data ======================
    let DeleteData = () => {
        remove(ref(database, 'customer')).then(() => {
            console.log("Delete Done")
        }).catch(() => {
            console.log("Error on Delete")
        });
    }

    // ============================================

    return (
        <>
            <input type="text" name='data1' value={data1} onChange={e => { setdata1(e.target.value) }} />
            <input type="text" name='data2' value={data2} onChange={e => { setdata2(e.target.value) }} />
            <input type="text" name='data3' value={data3} onChange={e => { setdata3(e.target.value) }} />
            <input type="text" name='data4' value={data4} onChange={e => { setdata4(e.target.value) }} />
            <button onClick={InsertData}>Insert</button>
            <button onClick={SelectData}>Select</button>
            <button onClick={UpdateData}>Update</button>
            <button onClick={DeleteData}>Delete</button>

        </>
    )
}

export default FirebaseCrud;