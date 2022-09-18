import { FC, useEffect } from 'react';
import { useAtom } from 'jotai';
import { useForm } from 'react-hook-form';

import { useAccount } from '../../hooks';
import { IRequestAccount } from '../../interfaces';
import { dataAccounts, dataAccountSelected, dataModalAdd, dataModalDelete, dataModalEdit } from '../../store';
import { hidePassword, isEmail, showMessageModal, showPassword } from '../../utils';
import { AccountsList, Navbar } from '../ui';

const AccountManagerHome: FC = () => {
  document.title = 'Account Manager | Home';
  const { register, handleSubmit, reset, formState: { errors } } = useForm<IRequestAccount>();
  const { isLoading, getAccounts, updateAccount, addAccount } = useAccount();
  const [accounts, setAccounts] = useAtom(dataAccounts);
  const [isOpenAdd, setIsOpenAdd] = useAtom(dataModalAdd);
  const [isOpenEdit, setIsOpenEdit] = useAtom(dataModalEdit);
  const [isOpenDelete, ] = useAtom(dataModalDelete);
  const [accountSelected, setAccountSelected] = useAtom(dataAccountSelected);

  useEffect(() => {
    onGetAccounts();
  }, [isOpenAdd, isOpenEdit, isOpenDelete]);

  const onGetAccounts = async () => {
    const { ok, accounts } = await getAccounts();

    if (!ok) return;
    setAccounts(accounts!);
  };

  const onAddAccount = async (dataAddAccount: IRequestAccount) => {
    const { ok, msg } = await addAccount(dataAddAccount);
    showMessageModal(ok, msg);
    setIsOpenAdd(false);
    reset();
  };

  const onUpdateAccount = async (dataAddAccount: IRequestAccount) => {
    if (!accountSelected) return;
    const { ok, msg } = await updateAccount(dataAddAccount, accountSelected.aid);
    showMessageModal(ok, msg);
    setIsOpenEdit(false);
    setAccountSelected(null)
    reset();
  };

  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        {accounts && <AccountsList accounts={accounts} isLoading={isLoading} />}
        <div
          className="fixed bottom-0 px-4 py-3 mb-10 transition-all ease-linear bg-blue-600 rounded-full cursor-pointer right-10 hover:bg-blue-800"
          onClick={() => setIsOpenAdd(true)}
        >
          <i className="text-lg font-bold fa-sharp fa-solid fa-plus text-neutral-50"></i>
        </div>
      </div>

      {/* Modal */}
      {(isOpenAdd || isOpenEdit) && (
        <div className="modal-fadeIn ">
          <div className="w-auto h-auto p-10 px-12 m-auto opacity-100 rounded-3xl bg-neutral-50">
            <div className="relative">
              <h1 className="py-4 pb-8 text-2xl font-bold text-center text-black">
                {isOpenAdd ? 'Add account' : 'Edit account'}
              </h1>
              <i
                className="absolute top-0 right-0 text-3xl text-red-400 transition ease-linear cursor-pointer fa-solid fa-xmark hover:text-red-600"
                onClick={() => {
                  setIsOpenAdd(false);
                  setIsOpenEdit(false);
                  setAccountSelected(null);
                  reset();
                }}
              ></i>
            </div>
            <form
              className="flex flex-col gap-12"
              onSubmit={isOpenAdd ? handleSubmit(onAddAccount) : handleSubmit(onUpdateAccount)}
            >
              <div className="relative form-group-auth">
                <div className="flex gap-4">
                  <input
                    className="form-input-add-account"
                    type="text"
                    placeholder="Title"
                    defaultValue={accountSelected?.title}
                    {...register('title', {
                      required: 'This field is required',
                      minLength: { value: 4, message: 'Minimum 4 characters' },
                    })}
                  />
                  {errors.title && <p className="text-red-500 absolute bottom-[-2rem]">{errors.title.message}</p>}
                </div>
              </div>
              <div className="relative form-group-auth">
                <div className="flex gap-4">
                  <input
                    className="form-input-add-account"
                    type="email"
                    placeholder="Email"
                    defaultValue={accountSelected?.email}
                    {...register('email', {
                      required: 'This field is required',
                      validate: isEmail,
                    })}
                  />
                  {errors.email && <p className="text-red-500 absolute bottom-[-2rem]">{errors.email.message}</p>}
                </div>
              </div>
              <div className="relative form-group-auth">
                <div className="flex gap-4">
                  <input
                    id="password"
                    className="form-input-add-account relative"
                    type="password"
                    placeholder="Password"
                    defaultValue={accountSelected?.password}
                    {...register('password', {
                      required: 'This field is required',
                      minLength: { value: 6, message: 'Minimum 6 characters' },
                    })}
                  />
                  <i
                    className="fa-sharp fa-solid fa-eye absolute right-0 cursor-pointer"
                    onMouseDown={showPassword}
                    onMouseOut={hidePassword}
                  ></i>
                  {errors.password && <p className="text-red-500 absolute bottom-[-2rem]">{errors.password.message}</p>}
                </div>
              </div>
              <div className="relative form-group-auth">
                <div className="flex gap-4">
                  <input
                    className="form-input-add-account"
                    type="text"
                    placeholder="Category"
                    defaultValue={accountSelected?.category}
                    {...register('category', {
                      required: 'This field is required',
                      minLength: { value: 5, message: 'Minimum 5 characters' },
                    })}
                  />
                  {errors.category && <p className="text-red-500 absolute bottom-[-2rem]">{errors.category.message}</p>}
                </div>
              </div>
              <div className="relative form-group-auth">
                <div className="flex gap-4">
                  <textarea
                    className="w-full pt-2 pl-2 border-2 border-gray-400 outline-none resize-none rounded-xl"
                    cols={20}
                    rows={4}
                    placeholder="Description"
                    defaultValue={accountSelected?.description}
                    {...register('description')}
                  ></textarea>
                </div>
              </div>

              <button
                className="w-full px-6 py-2 m-auto text-white transition-all ease-linear bg-blue-600 hover:bg-blue-800 rounded-2xl"
                type="submit"
              >
                {isOpenAdd ? "Add" : "Update"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AccountManagerHome;
