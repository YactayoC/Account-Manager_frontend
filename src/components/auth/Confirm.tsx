import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { useUser } from '../../hooks'

const Confirm = () => {
  const { confirmUser } = useUser();
  const { search } = useLocation();
  const [message, setMessage] = useState("")
  const uid = search.split("=")[1]

  useEffect(() => {
    onConfirmUser()
  }, [])

  const onConfirmUser = async() => {
    const { msg } = await confirmUser(uid);
    setMessage(msg)
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen gap-4'>
        <h1 className='text-4xl text-center'>{message}</h1>
        <Link to="/auth/login">
            <button className='transition-all ease-linear text-2xl bg-blue-400 text-white px-4 py-2 rounded-xl hover:bg-blue-600'>Go to login</button>
        </Link>
    </div>
  )
}

export default Confirm