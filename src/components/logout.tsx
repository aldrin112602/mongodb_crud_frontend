import React from 'react';
import Swal from 'sweetalert2';

interface PropsInterface {
  btnClass: string;
  btnText: string;
  redirect: string;
}

const Logout: React.FC<PropsInterface> = (props) => {
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure to Logout?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Continue!"
    }).then((result) => {
      if (result.isConfirmed) {

        sessionStorage.removeItem('userData');
        
        Swal.fire({
          title: 'Success!',
          text: "Logout successfully",
          icon: 'success'
        })
          .then(() => {
            window.location.href = props.redirect;
          });
      }
    });

  };

  return (
    <button onClick={handleLogout} className={props.btnClass}>
      {props.btnText}
    </button>
  );
};

export default Logout;
