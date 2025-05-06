import React from "react";

export default function HeroSection() {
  return (
    <>
<section className="bg-red-500 h-200 w-[90%] mx-auto flex items-center">

<div className="border-3 h-[100%] w-[50%]">

</div>

<div className="h-[40%] border-4 w-[50%] flex flex-col justify-around items-center">

<div className="">
  <h2 className="text-[2.5rem]">Hello I'm</h2>
  <h1 className="text-[3rem]">Harsh Dhiman</h1>
  <h2>FrontEnd - Developer</h2>
</div>
<div>
<a href="#">Download Cv</a>
<a href="#">Contact Info</a>
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
