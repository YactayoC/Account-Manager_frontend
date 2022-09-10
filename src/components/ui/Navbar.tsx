import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <div className="grid grid-cols-3 bg-gray-800 py-4 px-10 justify-items-center items-center">
      <h2 className="text-neutral-50 font-bold text-2xl">Manager Account</h2>
      <form className="w-full">
        <input
          className="bg-slate-50/30 text-white border-none outline-none rounded-md px-3 py-1.5 w-full"
          type="text"
          placeholder="Search account"
        />
      </form>
      <div className="text-neutral-50 flex items-center gap-4">
        <img className="w-12 rounded-full" src="../profile.jpg" alt="profile" />
        <div className="flex flex-col">
          <span className="font-bold">Sebastian Yactayo</span>
          <span className="text-gray-300 text-sm">sebas@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
