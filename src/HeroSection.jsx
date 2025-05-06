import React from "react";

export default function HeroSection() {
  return (
    <>
<section className="bg-red-500 h-190 w-[90%] mx-auto flex items-center">

<div className="border-3 h-[100%] w-[50%] flex justify-center items-center ">
<img src="https://imgs.search.brave.com/Od_pm2yfeld0AYchQ3RLl1JTq2de-RND8keyA8c-F3g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWNvbnZlcnQu/Y29tL2ltYWdlX2Nv/bnZlcnRlcl9hcHBf/aWNvbi5zdmc" className="h-[45%] rounded-[51px] rounded-full"></img>
</div>

<div className="h-[50%] border-4 w-[50%] flex flex-col justify-around items-center">

<div className="flex flex-col items-center">
  <h2 className="text-[2.5rem]">Hello I'm</h2>
  <h1 className="text-[3rem]">Harsh Dhiman</h1>
  <h2 className="text-[2.5rem]">FrontEnd - Developer</h2>
</div>
<div className="border-4 flex w-[40%] justify-around">
<a href="#" className="p-4 bg-amber-300">Download Cv</a>
<a href="#" className="p-4 bg-amber-300">Contact Info</a>
</div>
<div>
<button>linledin</button>
<button>github</button>
</div>


</div>


</section>


    </>
  );
}
