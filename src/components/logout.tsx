import React from 'react';
import Swal from 'sweetalert2';

interface PropsInterface {
  btnClass: string;
  btnText: string;
  redirect: string;
}

const Logout: React.FC<PropsInterface> = (props) => {
  const handleLogout = () => {
    sessionStorage.removeItem('userData');
    Swal.fire({
        title: 'Success!',
        text: "Logout successfully",
        icon: 'success'
    })
    .then(() => {
        window.location.href = props.redirect;
    });
    
  };

  return (
    <button onClick={handleLogout} className={props.btnClass}>
      {props.btnText}
    </button>
  );
};

export default Logout;
