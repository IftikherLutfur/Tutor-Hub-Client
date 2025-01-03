import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import auth from "../../../firebase";

const SignIn = () => {
  const { googleLogin } = useContext(AuthContext)
  const navigate = useNavigate()
  const [password, setPassword] = useState(false);


  const togglePassword = () => {
    setPassword(!password);
  };

  const handleForGoogleLogin = (e) => {
    e.preventDefault()
    googleLogin()
    console.log("Hello");

  }

  const handleForLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log("Attempting to log in with:", { email, password });

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("Signed in successfully:", res.user);
        if (res.user) {
          toast.success("Successfully signed in");
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error Code:", error.code);
        console.error("Error Message:", error.message);

        switch (error.code) {
          case "auth/user-not-found":
            toast.error("User not found. Please check your email.");
            break;
          case "auth/wrong-password":
            toast.error("Incorrect password. Please try again.");
            break;
          case "auth/invalid-credential":
            toast.error("Invalid credentials provided.");
            break;
          default:
            toast.error("Sign-in failed. Please try again.");
        }
      });
  };


  // const handleForLogin = (e) =>{
  //   e.preventDefault()
  //   const form = e.target;
  //   const email = form.email.value;
  //   const password = form.password.value;

  //   const info = {email, password}
  //   console.log(info)

  //   logIn(email, password)
  //   .then((res)=>{
  //     console.log(res.user);

  //     if(res.user){
  //       toast.success("Successfully Sign In")
  //       navigate('/')
  //     };

  //   })
  //   .catch((error)=>{
  //     console.error("Error", error)
  //   });



  // }

  return (

    <div
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), 
                      url('https://i.pinimg.com/736x/cf/b5/eb/cfb5eb4b55b11a9d7c3f9206871e16c9.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",

      }}
    >

      <div className="w-full max-w-sm relative z-10 p-6 m-auto text-black rounded-lg shadow-md pt-6" >
        <form onSubmit={handleForLogin} className="mt-6">
          <div>
            <label className="block text-sm text-white">Email</label>
            <input
              type="email" name="email"
              className="block w-full px-4 py-2 mt-2 border rounded-lg"
            />
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label className="block text-sm text-white">Password</label>
            </div>
            <input
              type={!password ? "password" : "text"} name="password"
              className="block w-full px-4 py-2 mt-2 border rounded-lg"
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-7 text-2xl top-[178px] transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {password ? "🙊" : "🙈"}
            </button>
          </div>

          <div className="mt-6">
            <button
              className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-lg hover:border-2 bg-[#1D1D1D] "
            >
              Sign In
            </button>
            <Toaster
              position="top-center"
              reverseOrder={false} />
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>
          <a href="#" className="text-xs text-center text-white">
            or login with Social Media
          </a>
          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <div className="flex items-center mt-6 -mx-2">
          <button
            type="button"
            className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-[#1D1D1D]"
          >
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
            </svg>
            <span onClick={handleForGoogleLogin} className="hidden mx-2 sm:inline">Sign in with Google</span>
          </button>


        </div>

        <p className="mt-8   text-center  py-1 text-white">
          Don't have an account?
          <a href="#" className="font-medium text-white dark:text-gray-200 hover:underline">
            <NavLink to={'/'}>Create One</NavLink>
          </a>
        </p>
      </div>
    </div>


  );
};

export default SignIn;