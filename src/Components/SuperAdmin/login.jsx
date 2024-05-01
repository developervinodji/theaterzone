import React from "react";
import jj from "../images/page-title.jpg"

function Superadminlogin() {


    return (
    <>
    <section style={{backgroundImage: `url(${jj})`}} className="min-h-screen w-screen bg-no-repeat bg-cover bg-center flex justify-center items-center ">
              <div className="max-w-[700px] w-full bg-[#1b1e1ab3] p-8 m-8">
                    <h2 className="pb-10 font-bold text-3xl text-center text-white">Login</h2>    
                    <form action=""  className="flex flex-col gap-3">
                        <div className="flex flex-col text-white ">
                         <label>Username</label>
                          <input  className="text-white h-10 bg-transparent border-b focus:outline-none" type="text" placeholder="Type your username" />
                        </div>
                        <div  className="flex flex-col text-white">
                         <label>Password</label>
                          <input className="text-white h-10 bg-transparent border-b focus:outline-none" type="text" placeholder="Type your password" />
                        </div>
                          <div  className="flex flex-col text-white items-end">
                            <a className="hover:text-orange-500 w-fit">Forgot password?</a>
                          </div>
                          <div  className="flex flex-col text-white items-center mt-2.5">
                          <button className="w-fit py-2 px-10 border-solid border-slate-300 border-2 rounded-md">login</button>
                          </div>

                      </form> 
              </div>
            </section>
    </>
    );
  }
  
  export default Superadminlogin;


