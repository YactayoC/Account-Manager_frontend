import Swal from 'sweetalert2';

export const showMessageModal = (ok: boolean, msg?: string) => {
  if (!ok) {
    return Swal.fire({
      title: 'Error',
      icon: 'error',
      text: msg,
    });
  }

  Swal.fire({
    title: msg,
    icon: 'success',
  });
};
