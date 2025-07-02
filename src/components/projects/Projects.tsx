import { ProjectsData } from "../../data/ProjectsData";
import Image from "next/image";
import icons from "@/common/assets/icons/_index";
import Link from "next/link";
import "./project.css";
import Background from "@/atoms/backGround/BackGround";

export const Projects = () => {
  return (
    <section className="my-14 min-h-screen relative max-w-[670px] mx-auto">
      <Background />
      <div className="relative z-10">
        <div className="flex items-center gap-4">
          <div className="bg-green px-5 py-1 rounded-full">
            <p className="text-xs">New</p>
          </div>
          <h2 className="text-[var(--text-color-secondary)]">Projects</h2>
        </div>
        <div className="flex flex-col w-full gap-4 h-auto items-center mt-7">
          {ProjectsData.map((project) => (
            <div key={project.id} className="w-full">
              <div className="flex justify-start w-full">
                <p className="text-[var(--text-color-primary)] text-[14px] font-normal mt-2">
                  {project.year}
                </p>
              </div>
              <div className="flex flex-col gap-4 mt-4 sm:flex-row justify-between items-start sm:items-center w-full">
                <div className="w-full mb-3 sm:w-[50%] h-[100px]">
                  <h3 className="text-[var(--text-color-secondary)] text-[14px] flex items-center">
                    <Link
                      href={`/projectsPage/${project.id}`}
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center"
                    >
                      {project.name}
                      <img
                        src={icons.arrowUp}
                        alt="Arrow Up"
                        className="w-4 h-4"
                      />
                    </Link>
                  </h3>
                  <p className="text-[var(--text-color-primary)] text-[14px] font-medium mt-2">
                    {project.description}
                  </p>
                </div>
                <div className="w-full sm:w-[250px] h-[120px] border border-[var(--border-primary)] rounded-lg mt-4 overflow-hidden">
                  <Image
                    src={project.img}
                    alt={`${project.name} image`}
                    layout="responsive"
                    width={250}
                    height={120}
                    objectFit="cover"
                    quality={90}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};