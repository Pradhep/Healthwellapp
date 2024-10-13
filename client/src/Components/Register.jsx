import {useState} from 'react';
import '../index.css'
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {

  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")
  let navigate = useNavigate()
  
  const handleSubmit = async()=>{
      try {
        console.log(`${ApiRoutes.Signup.path}`,{email,password},{authenticate:ApiRoutes.Signup.auth})
        let {message,token,role} = await AxiosService.post(`${ApiRoutes.Signup.path}`,{email,password},{authenticate:ApiRoutes.Signup.auth})
        sessionStorage.setItem('token',token)
        sessionStorage.setItem('role',role)
        toast.success(message)
        navigate('/login')
      } catch (error) {
          toast.error(error.message || "Internal Server Error")
      }
  }

  return (
    <section className="py-26 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-lg mx-auto py-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Register</h2>
          </div>
          <form action="">
            <div className="mb-6">
              <label className="block mb-2 font-extrabold" htmlFor="email">Email</label>
              <input
                className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                type="email"
                placeholder="email"
                id="email"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-extrabold" htmlFor="password">Password</label>
              <input
                className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                type="password"
                placeholder="**********"
                id="password"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-extrabold" htmlFor="password">Confirm Password</label>
              <input
                className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                type="password"
                placeholder="**********"
                id="confirmpassword"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            {/* <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
              <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                <label htmlFor="rememberMe">
                  <input type="checkbox" id="rememberMe" />
                  <span className="ml-1 font-extrabold">Remember me</span>
                </label>
              </div>
              <div className="w-full lg:w-auto px-4">
                <a className="inline-block font-extrabold hover:underline" href="#">
                  Forgot your password?
                </a>
              </div>
            </div> */}
            <button
              className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-2 border-indigo-900 shadow rounded transition duration-200"
              type="submit"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
            <p className="text-center font-extrabold">
              Already have an account? 
              <Link to='/Login' >
              <span className="text-red-500 hover:underline" >Sign in</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
