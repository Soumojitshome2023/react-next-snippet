import React, { useState } from "react";

import { auth } from "../FireBase/FireBase";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

const LoginForm = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const loginHandler = async () => {
        if (!email || !password) return;
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            console.log(result)


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
            console.log(result)

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
                <button onClick={loginHandler}>
                    Sign in
                </button>
            </form>
        </>
    );
};

export default LoginForm;
