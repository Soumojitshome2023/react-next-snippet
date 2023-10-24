![MasterHead](https://bestanimations.com/media/sky/1088683783milky-way-night-sky-gif.gif)

# React Js Templates by [Soumojit Shome](https://www.soumojitshome.me/)

### 1. [Start React Js:](https://create-react-app.dev/ "Start React Js")

* ```
  npx create-react-app my-app
  ```
* ```
  cd my-app
  ```
* ```
  npm start
  ```

### 2. [React Router Dom :](https://github.com/Soumojitshome2023/React_Next_Snippet/tree/main/React%20Router%20Dom "Router Dom")

* ```
  npm install react-router-dom
  ```
* ```
  import { BrowserRouter, Route, Routes } from "react-router-dom";
  ```

### 3. [React UseState Hook :](https://github.com/Soumojitshome2023/React_Next_Snippet/tree/main/React%20useState%20Hook "Use State")

* ```
  import React, { useState } from 'react';
  ```

### 4. [React Props :](https://github.com/Soumojitshome2023/React_Next_Snippet/tree/main/React%20Props "Props")

* React props

### 5. [React Input :](https://github.com/Soumojitshome2023/React_Next_Snippet/tree/main/React%20User%20Input "Input")

* ```
  import { useState } from "react";
  ```

### 6. [React useEffect :](https://github.com/Soumojitshome2023/React_Next_Snippet/tree/main/React%20useEffect "Use Effect")

* ```
  import { useState, useEffect } from "react";
  ```

---

---

# Next Js Templates :

### 1. [Start Next Js:](https://nextjs.org/docs/pages/api-reference/create-next-app "Next Js Start")

* [Documentation](https://nextjs.org/docs)
* ```
  npx create-next-app@latest
  ```

  or,

  ```
  npx create-next-app
  ```
* > ```
  > What is your project named?  my-app
  > Would you like to use TypeScript?  No
  > Would you like to use ESLint?  No
  > Would you like to use Tailwind CSS?  Yes
  > Would you like to use src/ directory?  No / Yes
  > Would you like to use App Router? (recommended)  Yes
  > Would you like to customize the default import alias (@/*)?  No
  > ```
  >
* ```
  cd my-app
  ```
* ```
  npm run dev
  ```

### 2. [Next Function Call :](https://github.com/Soumojitshome2023/React_Next_Snippet/tree/main/Next%20Function%20Call "Function Call")

* ```
  onClick={()=>{change()}}
  ```
* ```
  onClick={change()}
  ```
* ```
  onClick={change}
  ```

### 3. [Next App Routing :](https://github.com/Soumojitshome2023/React_Next_Snippet/tree/main/Next%20App%20Routing/app "App Routing")

* [Nested and Dynamic Routes NextJs Doc](https://nextjs.org/docs/getting-started/project-structure#nested-routes)
* ```
  import Link from "next/link";
  ```

### 4. [Next API Call :](https://github.com/Soumojitshome2023/React_Next_Snippet/tree/main/Next%20API%20Call "API Call")

* ```
  axios.get("url")
  ```

### 5. [Next Dynamic Routing](https://github.com/Soumojitshome2023/React_Next_Snippet/tree/main/Next%20Dynamic%20Routing "Dynamic Routing") :

* [Nested and Dynamic Routes NextJs Doc](https://nextjs.org/docs/getting-started/project-structure#nested-routes)
* Way 1 : create [id] named folder
* Way 2 (Easy) : create [id] named folder

### 6. [Next Context API](https://github.com/Soumojitshome2023/React_Next_Snippet/tree/main/Next%20Context%20API "Context API")

### 7. [Next Toastify Flash Message](https://github.com/Soumojitshome2023/React_Next_Snippet/tree/main/Next%20Toastify%20Flash%20Message "Flash Message")

* [Website](https://www.npmjs.com/package/react-toastify "flash message")
* ```
  npm install --save react-toastify
  ```

  or

  ```
  yarn add react-toastify
  ```

### 8. [Next FireBase Realtime Database CRUD :](https://github.com/Soumojitshome2023/React_Next_Snippet/tree/main/Next%20FireBase%20Realtime%20Database%20CRUD "Firebase crud")

* ```
  npm install firebase
  ```
* Way 1 :

  * Set Data, set(dataRef, dataToSet)
  * Get Data
  * Update Data
  * Remove Data
* Way 2 :

  * Only Write, using POST method
* Way 3 (Best Way) :

  * Push Data
  * Set Data
  * Get Data
  * Remove Data

### 9. [Next FireBase FireStore :](https://github.com/Soumojitshome2023/React_Next_Snippet/tree/main/Next%20FireStore "FireStore")

* ```
  npm install firebase
  ```
* Add Data :

  * setDoc : Sets or overwrites a document with a specified ID.
  * addDoc : Adds a document to a collection with an automatically generated ID.
* Update Data :

  * updateDoc : Modifies the fields of an existing document.
* Delete Data :

  * deleteDoc : Removes a specific document, delete a specific document in Firestore.
* Read Data :

  * get : Retrieves the data from a document or a collection.
    * getDoc : Retrieves the data from a specific document / Fetch Data From Doc ID
    * getDocs : Retrieves the data from all documents in a collection / Fetch Data From Collection
  * onSnapshot : Listens to real-time changes in a document or collection.
* The database structure :

  * Project: MyWebsite
    * Default Database
      * Collection: Users
        * Document: User1
          * Fields: Name, Email
        * Document: User2
          * Fields: Name, Email
      * Collection: Products
        * Document: Product1
          * Fields: Name, Price
        * Document: Product2
          * Fields: Name, Price

### 10. [Next FireBase Auth : ](https://github.com/Soumojitshome2023/React_Next_Snippet/tree/main/Next%20FireBase%20Auth "Auth")

* [FireBase Documentation](https://firebase.google.com/docs/auth "Firebase doc")
* ```
  npm install firebase
  ```
* Sign In With Google
* LogIn With Google
* Sign In With Email and Password
* LogIn With Email and Password

### 11. [Next FireBase Storage :](https://github.com/Soumojitshome2023/React_Next_Snippet/tree/main/Next%20FireBase%20Storage)

* ```
  npm install firebase
  ```
* Upload Files
* Download Files

### 12. [Next Style as Module :](https://github.com/Soumojitshome2023/React_Next_Snippet/tree/main/Next%20Style%20as%20Module)

* ```
  import style1 from './Style/home.module.css'
  import style2 from './Style/about.module.css'
  ```

### 13. [Next Loading file :](https://github.com/Soumojitshome2023/React_Next_Snippet/tree/main/Next%20Loading)

* [App Routing Conventions NextJS Doc](https://nextjs.org/docs/getting-started/project-structure#app-routing-conventions)
* loading.js
* Loading UI

### 14. [Next Not-Found :](https://github.com/Soumojitshome2023/React_Next_Snippet/tree/main/Next%20Not%20Found)

* [App Routing Conventions NextJS Doc](https://nextjs.org/docs/getting-started/project-structure#app-routing-conventions)

### 15. [Next API :](https://github.com/Soumojitshome2023/React_Next_Snippet/tree/main/Next%20API)

* [NextRequest Doc](https://nextjs.org/docs/app/api-reference/functions/next-request)

### 16. [Next Mongo API](https://github.com/Soumojitshome2023/React_Next_Snippet/tree/main/Next%20Mongo%20API) :

* ```
  npm i mongoose
  ```
* Way 1 :

  * Test Using Thunder Client or Postman
* Way 2 (Easy to Learn) :

  * Test Using Create Functions and 'fetch'
* Way 3 :

  * ```
    npm install axios
    ```
  * Test Using axios and Create functions
  * [Doc Link](https://www.npmjs.com/package/axios)
* Structure of a MongoDB database :

  * Database (e.g., "UserDatabase")
    * Collection (e.g., "Users")
      * Document (e.g., User1)
        * Field ("_id": 1)
        * Field ("username": "johndoe")
        * Field ("firstName": "John")
        * Field ("lastName": "Doe")
      * Document (e.g., User2)
        * Field ("_id": 2)
        * Field ("username": "alicej")
        * Field ("firstName": "Alice")
        * Field ("lastName": "Johnson")

### 17. [Next Mongo Auth :](https://github.com/Soumojitshome2023/React_Next_Snippet/tree/main/Next%20Mongo%20Auth)

* ```
  npm install bcryptjs
  ```
  * [bcryptjs Doc](https://www.npmjs.com/package/bcrypt?activeTab=readme)

* ```
  npm install jsonwebtoken
  ```
  * [jsonwebtoken Doc](https://www.npmjs.com/package/jsonwebtoken)

* SignUp, LogIn, Log Out

### 18. [Next Sweet Alert :](https://github.com/Soumojitshome2023/React_Next_Snippet/tree/main/Next%20Sweet%20Alert)
* ```
  npm install sweetalert2
  ```
  * [Sweet Alert Doc](https://sweetalert2.github.io)

### 19. [Next Favicon and OpenGraph :](https://github.com/Soumojitshome2023/React_Next_Snippet/tree/main/Next%20Favicon%20and%20OpenGraph)
