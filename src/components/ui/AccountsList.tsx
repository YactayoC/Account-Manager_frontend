import { FC } from 'react';

const AccountsList: FC = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <h2 className="pt-10 pl-10 text-2xl font-bold">Social Networks</h2>
      <div className="grid grid-cols-1 gap-12 px-10 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {array.map(arr => (
          <div
            key={arr}
            className="flex flex-col gap-4 py-4 transition-all ease-linear bg-white shadow-md cursor-pointer hover:shadow-xl"
          >
            <img className="m-auto w-14" src="../twitter.png" alt="red social" />
            <div className="flex flex-col pl-4">
              <h4 className="font-bold">Twitter</h4>
              <span className="text-gray-400">cuentatwitter@gmail.com</span>
            </div>
          </div>
        ))}

        <div></div>
      </div>

      <h2 className="pt-10 pl-10 text-2xl font-bold">SVideoGames</h2>
      <div className="grid grid-cols-1 gap-12 px-10 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {array.map(arr => (
          <div key={arr} className="flex flex-col gap-4 py-4 bg-white shadow-lg cursor-pointer">
            <img className="m-auto w-14" src="../twitter.png" alt="red social" />
            <div className="flex flex-col pl-4">
              <h4 className="font-bold">Twitter</h4>
              <span className="text-gray-400">cuentatwitter@gmail.com</span>
            </div>
          </div>
        ))}

        <div></div>
      </div>
    </>
  );
};

export default AccountsList;
