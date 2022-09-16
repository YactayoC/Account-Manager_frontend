import { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

import { useUser } from '../../hooks';
import { IUserAuth } from '../../interfaces';
import { isEmail } from '../../utils';
import { Loader } from '../loader';

const Login: FC = () => {
  document.title = 'Account Manager | Login';
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<IUserAuth>();
  const [isLoading, setIsLoading] = useState(false);
  const { loginUser } = useUser();

  const onLogin = async (dataLogin: IUserAuth) => {
    setIsLoading(true);
    const { ok, msg } = await loginUser(dataLogin);

    if (!ok) {
      setIsLoading(false);
      return Swal.fire({
        title: 'Error',
        icon: 'error',
        text: msg,
      });

      // Todo: verify if user is confirmed
    }

    setIsLoading(false);
    navigate('/home/accounts');
  };

  if (isLoading) {
    return <Loader />;
  }

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
        <form className="form-auth" onSubmit={handleSubmit(onLogin)}>
          <div className="form-group-auth relative">
            <label className="pl-10 text-xl font-bold text-white">Email</label>
            <div className="flex gap-4">
              <img className="bottom-0 h-10 w-9" src="../mail-icon.png" alt="mail" />
              <input
                className="form-input-auth"
                type="email"
                placeholder="account@mail.com"
                {...register('email', {
                  required: 'This field is required',
                  validate: isEmail,
                })}
              />
            </div>
            {errors.email && <p className="text-red-500 absolute bottom-[-2rem]">{errors.email.message}</p>}
          </div>
          <div className="form-group-auth relative">
            <label className="pl-10 text-xl font-bold text-white">Password</label>
            <div className="flex gap-4">
              <img className="bottom-0 w-9" src="../password-icon.png" alt="password" />
              <input
                className="form-input-auth"
                type="password"
                placeholder="password"
                {...register('password', {
                  required: 'This field is required',
                  minLength: { value: 6, message: 'Minimum 6 characters' },
                })}
              />
            </div>
            {errors.password && <p className="text-red-500 absolute bottom-[-2rem]">{errors.password.message}</p>}
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
