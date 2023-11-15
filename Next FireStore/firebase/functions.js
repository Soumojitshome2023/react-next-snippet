import { auth, db, storage } from "./firebase";
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { collection, addDoc, getDocs, getDoc, where, query, deleteDoc, updateDoc, doc, setDoc, deleteField } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";


const Provider = new GoogleAuthProvider();

// ======================== Google Auth ========================
export const signInWithGoogle = async (setuserdata) => {
	// toast("Wait...");
	console.log("Run signInWithGoogle")
	try {
		const userData = await signInWithPopup(auth, Provider);
		const user = userData.user;
		// console.log(user);

		const user_uid = user.uid;
		const user_email = user.email;

		const user_displayName = user.displayName;
		const user_picurl = user.photoURL;
		const current_time = new Date().toLocaleString();
		if (user_uid != null) {

			const dataToSet = {
				User_Uid: user_uid,
				User_Name: user_email.split("@")[0],
				User_FirstName: user_displayName.split(" ")[0],
				User_LastName: user_displayName.split(" ")[1],
				User_Email: user_email,
				User_About: "Unknown",
				User_City: "Unknown",

				User_DisplayName: user_displayName,
				User_PicUrl: user_picurl,

				Auth_Method: "Google",
				Reg_Time: current_time,
				Last_Login_Time: current_time
			}
			const docRef = doc(db, "CertificateDistribution", user_uid);

			const docSnap = await getDoc(docRef);
			if (docSnap.exists() && docSnap.data().User_DisplayName != "anonymous") {
				// if (docSnap.data().User_DisplayName != "anonymous") {
				// 	await updateDoc(docRef, {
				// 		Last_Login_Time: current_time
				// 	});
				// }
				// else {
				// 	await updateDoc(docRef, dataToSet);
				// }
				await updateDoc(docRef, {
					Last_Login_Time: current_time
				});
			}
			else {
				await setDoc(docRef, dataToSet);
				setuserdata(dataToSet);
			}
			// setuserdata(dataToSet);
			// toast("Welcome");
		}

	} catch (error) {
		console.error("An error occured", error);
		toast.error("An error occured");
	}
};

// ======================== Get_Docs_Func ========================
export const Get_Docs_Func = async (path) => {
	return new Promise(async (resolve, reject) => {
		// setLoading(true);
		console.log("Run Get_Docs_Func")
		try {
			const querySnapshot = await getDocs(collection(db, path));
			if (querySnapshot.empty) {
				// setLoading(false);
				resolve([]);
				// setData([]);
				console.log("No data found.");
				// reject("No");
			}
			else {
				let obj = [];
				querySnapshot.forEach((doc) => {
					// console.log('Document ID: ', doc.id, 'Data: ', doc.data());
					obj.push(doc.data());
				});
				// setData(obj);
				// setLoading(false);
				resolve(obj);
			}
		} catch (error) {
			// setLoading(false);
			console.error('Error fetching documents: ', error);
			reject(error);
		}
	});
};


// ======================== Get_By_Query_Where ========================
export const Get_By_Query_Where = async (path, SearchFieldKey, SearchFieldValue) => {
	return new Promise(async (resolve, reject) => {
		// console.log("run 3")
		console.log("Run Get_By_Query_Where");
		// setLoading(true);
		try {
			const q = query(collection(db, path), where(SearchFieldKey, "==", SearchFieldValue));
			const querySnapshot = await getDocs(q);
			if (querySnapshot.empty) {
				// setLoading(false);
				console.log("No data found.");
				resolve([]);
			}
			else {
				let obj = [];
				querySnapshot.forEach((data) => {
					// console.log(data.data());
					// setData(data.data());
					// setLoading(false);
					// console.log("run 4")
					// resolve("done");
					obj.push(data.data());
				});
				// setData(obj);
				resolve(obj);
				// setLoading(false);
			}
		} catch (error) {
			// setLoading(false);
			console.log(error)
			reject(error);
		}
	});
}


// ======================== Delete_By_Id ========================
export const Delete_By_Id = async (path, DocId) => {
	// console.log("run 2")
	return new Promise(async (resolve, reject) => {
		// console.log("run 3")
		console.log("Run Delete_By_Id");
		// setLoading(true);
		try {
			const docRef = doc(db, path, DocId);
			await deleteDoc(docRef);
			console.log('Document deleted successfully!');
			// setLoading(false);
			resolve("done");
			// console.log("run 4")
		} catch (error) {
			// setLoading(false);
			reject(error);
			console.error('Error deleting document: ', error);
		}
	});
}


// ======================== Update_Doc_By_Id ========================
export const Update_Doc_By_Id = async (path, DocId, dataSet) => {
	return new Promise(async (resolve, reject) => {
		console.log("Run Update_Doc_By_Id");
		try {
			const docRef = doc(db, path, DocId);
			await updateDoc(docRef, dataSet);
			resolve("done");
		} catch (error) {
			reject(error);
			console.error('Error deleting document: ', error);
		}
	});
}

// ======================== Upload_File_Func ========================
export const Upload_File_Func = (path, ImageUpload) => {
	return new Promise(async (resolve, reject) => {

		console.log("Run Upload_File_Func");
		// console.log("run 6")
		try {

			const imageRef = ref(storage, path);
			uploadBytes(imageRef, ImageUpload).then((snapshot) => {
				getDownloadURL(snapshot.ref).then((url) => {
					// console.log(url);
					resolve(url);
					// console.log("run 7")
				});
			});

		} catch (error) {
			console.log(error);
			reject(error);
		}
	});
};


// ======================== Set_Doc_By_Id ========================
export const Set_Doc_By_Id = async (path, DocId, dataSet) => {
	console.log("Run Set_Doc_By_Id");
	return new Promise(async (resolve, reject) => {
		try {
			const PostDocRef = doc(db, path, DocId);
			await setDoc(PostDocRef, dataSet);
			resolve("Ok");
		} catch (error) {
			console.log(error);
			reject(error);
		}
	});
}


// ======================== Get_Doc_By_Id ========================
export const Get_Doc_By_Id = async (path, DocId) => {
	return new Promise(async (resolve, reject) => {
		console.log("Run Get_Doc_By_Id");
		try {
			const docRef = doc(db, path, DocId);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				// console.log(docSnap.data())
				// console.log("Run 3")
				resolve(docSnap.data());
			} else {
				console.log('No such document!');
				reject([]);
			}
		} catch (error) {
			console.error('Error fetching document: ', error);
			reject(error);
		}
	});
}



export const deleteEventAndCertificatesData = async (userId, eventId) => {
	return new Promise(async (resolve, reject) => {
		try {
			const eventRef = doc(db, 'CertificateDistribution', userId, 'Events', eventId);

			// Delete the "Eventid" document
			await deleteDoc(eventRef);

			// Get the "CertificatesData" subcollection
			const certificatesDataCollection = collection(eventRef, 'CertificatesData');

			// Delete all documents in the "CertificatesData" subcollection
			const certificatesDataDocuments = await getDocs(certificatesDataCollection);
			const deleteCertificatesDataPromises = certificatesDataDocuments.docs.map(async (document) => {
				await deleteField(document.ref, 'fieldNameToDelete'); // Optional: Delete specific fields in documents
				await deleteDoc(document.ref);
			});

			await Promise.all(deleteCertificatesDataPromises);
			resolve("Ok");

			// console.log(`Event document with ID ${eventId} and its CertificatesData subcollection deleted successfully.`);
		} catch (error) {
			reject(error);
		}
	});
};

