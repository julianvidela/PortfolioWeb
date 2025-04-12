import React from "react";
import "./header_section.css";
import { Tags } from "../../atoms/SocialMedia/Tags";


export const HeaderSection = () => {
  return (
    <section className="h-auto w-auto auto mt-14 ">
      <div className="flex justify-between items-center ">
        <div className="flex items-center ">
        <div className="flex justify-center items-center h-[10rem]">
          <div className="bg-img-profile w-24 h-24 rounded-full border-[2px] border-[var(--border-primary)]" />
        </div>

        <div className="p-5 ">
          <p className="text-[var(--text-color-secondary)] font-bold">Julian Videla</p>
          <p className="text-[var(--text-color-primary)] font-light">Frontend Developer</p>
        </div>

        </div>
          <Tags />
      </div>
    </section>
  );
};
