import { ProjectsData } from "@/data/ProjectsData";
import "./projectsPage.css";
import { renderDescriptionAsList } from "@/helper/renderDescriptionAsList";
import icons from "@/common/assets/icons/_index";
import Background from "@/atoms/backGround/BackGround";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: { id: string };
};

export default function ProjectDetails({ params }: Props) {

 const projectId = Number(params.id);
  if (isNaN(projectId)) {
    return <p>Invalid project ID</p>;
  }

  const project = ProjectsData.find((proj) => proj.id === projectId);

  if (!project) {
    return <p className="">Project not found</p>;
  }

  return (
    <section className="relative h-auto w-auto mb-16 max-w-[670px] mx-auto">
      <Background />
      <div className="relative z-10 w-full px-4">
        <section className="flex flex-col w-full sm:w-[90%] md:w-[600px] m-auto justify-start mt-8">
          <div className="mt-10 flex flex-col">
            <div className="flex w-full my-4 justify-between items-center">
              <div>
                <Link href="/">
                  <img
                    src={icons.arrowLeft}
                    className="w-5 h-5"
                    alt="arrow Left"
                  />
                </Link>
              </div>
              <div className="bg-orange px-3 py-1 rounded-full inline-block">
                <p className="text-[var(--text-color-orange)] text-xs font-light m-0">
                  {project.year}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-color-secondary)] hover:underline flex items-center gap-2"
              >
                <h2 className="text-[20px] font-normal flex items-center gap-2">
                  {project.name}
                  <img src={icons.clip} alt="Arrow Up" className="w-5 h-5" />
                </h2>
              </Link>
              <p className="text-[var(--text-color-primary)] font-normal text-sm">
                {project.description}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Image
              className="border-[var(--border-primary)] border rounded-lg w-full"
              src={project.img}
              alt={project.name}
              width={600}
              height={300}
              layout="responsive"
              quality={90}
            />
          </div>
          <div className="mb-10 mt-8">
            <p className="text-[var(--text-color-primary)] font-normal text-sm leading-6">
              {project.extendedDescription}
            </p>
          </div>
        </section>
        <section className="flex flex-col h-auto w-full sm:w-[90%] md:w-[600px] m-auto justify-start gap-5 mt-8">
          <h2 className="text-[var(--text-color-secondary)] text-[20px] font-normal">
            {project.projectTec.front.title}
          </h2>
          <div className="h-auto">
            {renderDescriptionAsList(project.projectTec.front.description)}
          </div>
        </section>
        <section className="flex flex-col h-auto w-full sm:w-[90%] md:w-[600px] m-auto justify-start gap-5 mt-8">
          <h2 className="text-[var(--text-color-secondary)] text-[20px] font-normal">
            {project.projectTec.backend?.title}
          </h2>
          <div className="h-auto">
            {renderDescriptionAsList(project.projectTec.backend?.description || "")}
          </div>
        </section>
      </div>
    </section>
  );
}
