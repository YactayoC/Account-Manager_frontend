import { FC } from 'react';
import { Link } from 'react-router-dom';

const Login: FC = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen px-10 py-8 bg-gray-800 md:grid md:grid-cols-2 md:justify-items-center">
      <Link className="absolute top-10 left-12 sm:left-40" to="/">
        <p className="text-xl font-bold text-white ">
          <i className="fa-solid fa-chevron-left"></i> Back
        </p>
      </Link>
      <div className="hidden md:flex md:justify-center">
        <img className="w-[35rem]" src="../img-auth.png" alt="person" />
      </div>
      <div className="flex flex-col items-center gap-12">
        <div>
          <img src="../logo.png" alt="logo" />
        </div>
        <form className="form-auth">
          <div className="form-group-auth">
            <label className="pl-10 text-xl font-bold text-white">Email</label>
            <div className="flex gap-4">
              <img className="bottom-0 h-10 w-9" src="../mail-icon.png" alt="mail" />
              <input className="form-input-auth" type="email" placeholder="account@mail.com" />
            </div>
          </div>
          <div className="form-group-auth">
            <label className="pl-10 text-xl font-bold text-white">Password</label>
            <div className="flex gap-4">
              <img className="bottom-0 w-9" src="../password-icon.png" alt="password" />
              <input className="form-input-auth" type="password" placeholder="password" />
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <Link to="/auth/register">
              <p className="text-white transition-all ease-linearfont-bold hover:text-gray-300">
                Do not have an account?
              </p>
            </Link>
            <button type="submit">
              <i className="p-5 text-gray-800 transition-all ease-linear bg-white rounded-full fa-solid fa-chevron-right hover:bg-slate-500"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
