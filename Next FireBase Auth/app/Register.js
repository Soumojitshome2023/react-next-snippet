import React, { useState } from "react";

import { auth } from "../FireBase/FireBase";
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

const RegisterForm = () => {
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const signupHandler = async () => {
        if (!email || !password || !username) return;
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            console.log(result);

            await updateProfile(auth.currentUser, {
                displayName: username,
            });

            const user = result.user;
            console.log(user);

            const userEmail = user.email;
            const userdisplayName = user.displayName;
            const userphotoURL = user.photoURL;
            const useruid = user.uid;

            console.log(userEmail);
            console.log(userdisplayName);
            console.log(userphotoURL); // null
            console.log(useruid);


        } catch (error) {
            console.error(error);
        }
    }
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result);

            const user = result.user;
            console.log(user);

            const userEmail = user.email;
            const userdisplayName = user.displayName;
            const userphotoURL = user.photoURL;
            const useruid = user.uid;

            console.log(userEmail);
            console.log(userdisplayName);
            console.log(userphotoURL);
            console.log(useruid);

        } catch (error) {
            console.error(error);
        }


    }
    return (
        <>
            <button onClick={signInWithGoogle}>Login with Google</button>

            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label>Name</label>
                    <input
                        type="text" required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email" required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password" required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button onClick={signupHandler}>
                    Sign Up
                </button>
            </form>
        </>

    );
};

export default RegisterForm;
