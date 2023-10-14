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
            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log(user)
        } catch (error) {
            console.error(error);
        }

    }

    const signInWithGoogle = async () => {
        try {
            const user = await signInWithPopup(auth, provider);
            console.log(user)
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
