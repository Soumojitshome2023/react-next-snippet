"use client"

import { useEffect } from 'react';
import Swal from 'sweetalert2';

const HomePage = () => {
  const sweetalert = () => {
    // Show a SweetAlert alert when the component mounts
    // Swal.fire({
    //   title: 'Hello, SweetAlert in Next.js!',
    //   text: 'This is a simple SweetAlert example.',
    //   icon: 'success',
    // });

    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })

  }

  return (
    <div>
      <h1>Welcome to Next.js with SweetAlert!</h1>
      <p>Check out this SweetAlert example.</p>
      <button onClick={sweetalert}>Run Sweet Alert</button>
    </div>
  );
};

export default HomePage;
