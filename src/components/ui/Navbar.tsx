import React, { FC, useState } from 'react';
import { useAtom, useAtomValue } from 'jotai';

import { dataAccounts, dataUser } from '../../store';
import { useAccount, useUser } from '../../hooks';

const Navbar: FC = () => {
  const user = useAtomValue(dataUser);
  const { logoutUser } = useUser();
  const [valueSearch, setValueSearch] = useState("");
  const [, setAccounts] = useAtom(dataAccounts);
  const { searchAccount, getAccounts } = useAccount();

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

  const showOptionsMobile = () => {
    const optionsMobile = document.getElementById('menu-mobile');

    if (optionsMobile?.classList.contains('h-16')) {
      optionsMobile.classList.remove('h-16');
      optionsMobile.classList.add('h-72');
    } else {
      optionsMobile?.classList.remove('h-72');
      optionsMobile?.classList.add('h-16');
    }
  };

  const onSearch = async (e: React.FormEvent<EventTarget>): Promise<void> => {
    e.preventDefault()

    if(valueSearch){
      const { accounts } = await searchAccount(valueSearch);
      setAccounts(accounts!)
    } else {
      const { accounts } = await getAccounts();
      setAccounts(accounts!)
    }
  }

  return (
    <nav className="w-screen bg-gray-800">
      {/* Navbar Desktop */}
      <div className="navbar-desktop">
        <h2 className="text-2xl font-bold text-neutral-50">Manager Account</h2>
        <form className="hidden w-full md:block" onSubmit={onSearch}>
          <input
            className="bg-slate-50/30 text-white border-none outline-none rounded-md px-3 py-1.5 w-full"
            type="text"
            placeholder="🔍 Search account"
            name='valueSearch'
            onChange={(e) => setValueSearch(e.target.value)}
          />
        </form>
        <div className="items-center hidden gap-4 text-neutral-50 md:flex">
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

      {/* Navbar Mobile */}
      <div id="menu-mobile" className="h-16 navbar-mobile">
        <h2 className="text-2xl font-bold text-neutral-50">Manager Account</h2>

        <div className="cursor-pointer" onClick={showOptionsMobile}>
          <i className="block text-2xl font-bold fa-sharp fa-solid fa-bars md:hidden text-neutral-50"></i>
        </div>

        {/* Options */}
        <div className="flex flex-col items-center justify-center w-full gap-8 pt-8 transition-all duration-300 ease-linear">
          <form className="w-full" onSubmit={onSearch}>
            <input
              className="bg-slate-50/30 text-white border-none outline-none rounded-md px-3 py-1.5 w-full"
              type="text"
              placeholder="🔍 Search account"
              name='valueSearch'
              onChange={(e) => setValueSearch(e.target.value)}
            />
          </form>
          <div className="flex justify-center gap-4 text-neutral-50">
            <img className="w-12 rounded-full" src="../profile.jpg" alt="profile" />
            <div className="flex flex-col">
              <span className="font-bold">{user?.fullname}</span>
              <span className="text-sm text-gray-300">{user?.email}</span>
            </div>
          </div>
          <div
            className="w-1/3 transition-all flex ease-linear group gap-2 py-1.5 px-3 bg-white rounded-lg cursor-pointer hover:bg-red-400 justify-center"
            onClick={logoutUser}
          >
            <img className="w-6" src="../close-session.png" alt="close session" />
            <span className="text-red-400 transition-all ease-linear group-hover:text-white">Exit</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
