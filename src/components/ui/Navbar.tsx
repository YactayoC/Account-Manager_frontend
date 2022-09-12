import { FC } from 'react';
import { useAtomValue } from 'jotai';

import { dataUser } from '../../store';
import { useUser } from '../../hooks';

const Navbar: FC = () => {
  const user = useAtomValue(dataUser);
  const { logoutUser } = useUser();
  const showOptions = () => {
    const optionsExit = document.getElementById('options-exit');

    if (optionsExit?.classList.contains('opacity-0')) {
      optionsExit.classList.remove('opacity-0');
      optionsExit.classList.add('opacity-100');
    } else {
      optionsExit?.classList.remove('opacity-100');
      optionsExit?.classList.add('opacity-0');
    }
  };

  return (
    <div className="grid items-center grid-cols-3 px-10 py-4 bg-gray-800 justify-items-center">
      <h2 className="text-2xl font-bold text-neutral-50">Manager Account</h2>
      <form className="w-full">
        <input
          className="bg-slate-50/30 text-white border-none outline-none rounded-md px-3 py-1.5 w-full"
          type="text"
          placeholder="Search account"
        />
      </form>
      <div className="flex items-center gap-4 text-neutral-50">
        <img className="w-12 rounded-full" src="../profile.jpg" alt="profile" />
        <div className="flex flex-col">
          <span className="font-bold">{user?.fullname}</span>
          <span className="text-sm text-gray-300">{user?.email}</span>
        </div>
        <div className="relative">
          <div className="cursor-pointer " onClick={showOptions}>
            <i className="fa-solid fa-chevron-down"></i>
            <div
              id="options-exit"
              className="w-[5rem] transition-all flex ease-linear group gap-2 py-1.5 px-3 bg-white rounded-lg cursor-pointer hover:bg-red-400 absolute left-[-2rem] top-[2rem] opacity-0"
              onClick={logoutUser}
            >
              <img className="w-6" src="../close-session.png" alt="close session" />
              <span className="text-red-400 transition-all ease-linear group-hover:text-white">Exit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
