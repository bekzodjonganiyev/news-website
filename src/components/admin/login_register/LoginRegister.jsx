import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginRegister = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState(false);

  const userRegister = () => {

  }
  
  const userLogin = () => {
    
  }
  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div className="px-4 text-white bg-[#F06D06] md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <a href="#">Egamnazar's blog</a>
          </div>
          <p className="mt-6 font-normal text-center text-white md:mt-0">
            Haqiqiy jurnalist bedor bo`lishi kerak… haqiqiy jurnalist vijdonli
            bo`lishi lozim…
          </p>
          <p className="flex flex-col items-center justify-center mt-10 text-center">
            {register ? (
              <>
                <span>Sizda profil bormi?</span>
                <button
                  onClick={() => {
                    setRegister(false);
                  }}
                  href="#"
                  className="underline"
                >
                  Kirish
                </button>
              </>
            ) : (
              <>
                <span>Sizda profil yo'qmi?</span>
                <button
                  onClick={() => {
                    setRegister(true);
                  }}
                  href="#"
                  className="underline"
                >
                  Ro'yxatdan o'tish
                </button>
              </>
            )}
          </p>
        </div>
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">
            {register ? "Ro'yxatdan o'tish" : "Admin panelga kirish"}
          </h3>
          <form action="#" className="flex flex-col space-y-5 py-20">
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-500"
              >
                Email 
              </label>
              <input
                type="email"
                id="email"
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-500"
                >
                  Parol
                </label>
              </div>
              <input
                type="password"
                id="password"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div>
              <button
                onClick={() => {
                  register ? null : navigate("/egamnazar-dashboard");
                }}
                type="button"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-[#F06D06] rounded-md shadow focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                {register ? "Ro'yxatdan o'tish" : "Kirish"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;