import { useAtom } from 'jotai';
import { FC } from 'react';
import Swal from 'sweetalert2';
import { useAccount } from '../../hooks';

import { IAccount } from '../../interfaces';
import { dataAccountSelected, dataModalDelete, dataModalEdit } from '../../store';
import { showMessageModal } from '../../utils';

interface Props {
  account: IAccount;
}

const AccountElement: FC<Props> = ({ account }) => {
  const [, setIsOpenEdit] = useAtom(dataModalEdit);
  const [, setAccountSelected] = useAtom(dataAccountSelected);
  const [, setIsOpenDelete] = useAtom(dataModalDelete);
  const { deleteAccount } = useAccount();

  const onDeleteAccount = async () => {
    setIsOpenDelete(true);
    const result = await Swal.fire({
      title: '¿Seguro que quieres eliminar tu publicación?',
      showCancelButton: true,
      focusCancel: true,
      cancelButtonText: 'Cancel',
      cancelButtonColor: '#9e98b3',
      confirmButtonText: 'Delete',
      confirmButtonColor: '#fd0f1b',
    });

    if (result.isConfirmed) {
      const { ok, msg } = await deleteAccount(account.aid);
      showMessageModal(ok, msg);
      setIsOpenDelete(false);
    }
  };

  return (
    <div key={account.aid} className="account-card relative">
      <i
        className="fa-sharp fa-solid fa-trash absolute right-4 top-0 text-red-400 hover:text-red-600 transition-all ease-linear text-xl"
        onClick={onDeleteAccount}
      ></i>
      <div
        className="flex flex-col gap-4 py-4"
        onClick={() => {
          setIsOpenEdit(true);
          setAccountSelected(account);
        }}
      >
        <img className="m-auto w-14" src="../twitter.png" alt="red social" />
        <div className="flex flex-col pl-4">
          <h4 className="font-bold">{account.title}</h4>
          <span className="text-gray-400">{account.email}</span>
        </div>
      </div>
    </div>
  );
};

export default AccountElement;
