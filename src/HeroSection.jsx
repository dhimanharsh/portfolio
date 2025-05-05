import React from "react";

export default function HeroSection() {
  return (
    <>
      <section className="flex justify-between border-3 ">
        <div className="border-red-700">
          <img src="https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png"></img>
        </div>

        <div className="border-red-700">
          <h3>Hello i'm</h3>
          <h1>Harsh</h1>
          <h3>lorem texxt-33</h3>
          <div>
            <a href="#/" >Download CV</a>
            <a href="#/">Contact Info</a>
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
}
