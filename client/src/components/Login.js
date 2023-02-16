import React from "react";

const Login = () => {


    const handleClickPhone = () => {
        window.location.href = "/login-otp";
        
    }

    return(
        <div>
            <section className="h-screen flex flex-col w-full justify-center items-center login-wrapper">
                <div className="h-4/5 login-container flex flex-col gap-20">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl">Login</h1>
                        <p className="text-md text-gray-700">Please sign in to continue.</p>
                    </div>

                    <div className="w-full  flex flex-col gap-3">
                    <div>
                    <h2 className="font-extrabold">Email</h2>
                    <input type="text" id="first_name" class="shadow-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" />
                    </div>
                    <div>
                    <h2 className="font-extrabold">Password</h2>
                    <input type="text" id="first_name" class=" hello shadow-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" />
                    

                    <p className="text-sm text-blue-500 mt-5">Forgot password? </p>
                    </div>

                    <div className="w-full flex justify-end">
                    
                    <button class="bg-black hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-full shadow-xl" >
                    Login <i class="fa-solid fa-arrow-right text-white ml-2"></i>
                    </button>
                    </div>

                    <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                        <p class="text-center font-semibold mx-4 mb-0">Or</p>
                    </div>
                    
                    <button class="bg-black hover:bg-blue-700 text-white font-medium py-3 px-10 rounded-lg shadow-xl" onClick={handleClickPhone}>
                    Via Phone Number
                    </button>
                    

                    


                    </div>
                </div>
                <p className="font-md"> Don't have an account? <span className="text-blue-500">Sign Up</span></p>
            </section>
        </div>
    )
}

export default Login;