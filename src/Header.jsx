import React from "react";

export default function Header() {
  return (
    <>
      <header className="flex justify-around text-3xl p-8 border-2">
        <nav>
          <h2 className='text-red-800'>Harsh Dhiman</h2>
        </nav>
        <nav>
          <ul className="flex justify-around gap-6">
            <li>Skills</li>
            <li>Experience</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
