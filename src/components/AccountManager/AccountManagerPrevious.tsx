import { FC } from 'react';
import { Link } from 'react-router-dom';

const AccountManagerPrevious: FC = () => {
  return (
    <>
      {/* Hero */}
      <header className="flex flex-col px-10">
        <nav className="flex items-center justify-between pt-5 pb-10">
          <h3 className="text-2xl font-bold cursor-pointer">Account Manager</h3>
          <Link to="/auth/login">
            <button className="button">Ingresar</button>
          </Link>
        </nav>
        <div className="w-full grid-cols-2 sm:grid justify-items-center">
          <div className="flex flex-col items-start gap-8">
            <h1 className="text-5xl font-bold lg:text-7xl">Take control of your buying power</h1>
            <p className="text-lg leading-10 lg:text-xl lg:leading-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempore libero possimus odio repudiandae,
              eligendi ea laudantium ipsa earum veniam rerum amet explicabo quae. Placeat nesciunt harum suscipit
              dolorem eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempore libero possimus odio
              repudiandae, eligendi ea laudantium ipsa earum veniam rerum amet explicabo quae. Placeat nesciunt harum
              suscipit dolorem eos!
            </p>
          </div>
          <div className="items-end hidden sm:flex ">
            <img src="person.png" alt="asd" />
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="px-10 pb-10 bg-gray-800 text-neutral-50">
        <h2 className="py-20 m-auto text-4xl font-bold after:mt-2 w-max after:m-auto after:block after:h-2 after:w-full after:bg-neutral-50">
          ¿What do we offer?
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col h-min">
            <div className="overflow-hidden">
              <img className="image-scale" src="bg-1.jpg" alt="bg-1" />
            </div>
            <div className="text-center ">
              <h4 className="py-4 text-2xl font-bold">Private</h4>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis eveniet quos incidunt.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis eveniet quos incidunt.
              </p>
            </div>
          </div>
          <div className="flex flex-col h-min">
            <div className="overflow-hidden">
              <img className="image-scale" src="bg-2.jpg" alt="bg-2" />
            </div>
            <div className="text-center ">
              <h4 className="py-4 text-2xl font-bold">Insurance</h4>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis eveniet quos incidunt.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis eveniet quos incidunt.
              </p>
            </div>
          </div>
          <div className="flex flex-col h-min">
            <div className="overflow-hidden">
              <img className="image-scale" src="bg-3.jpg" alt="bg-3" />
            </div>
            <div className="text-center ">
              <h4 className="py-4 text-2xl font-bold">Reliable</h4>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis eveniet quos incidunt.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis eveniet quos incidunt.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer></footer>
    </>
  );
};

export default AccountManagerPrevious;
