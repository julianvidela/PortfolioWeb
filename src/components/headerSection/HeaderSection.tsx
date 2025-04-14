import { Tags } from "../../atoms/SocialMedia/Tags";
import "./header_section.css";

export const HeaderSection = () => {
  return (
    <section className="h-auto w-auto mt-10 sm:mt-12 lg:mt-14 max-w-[670px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
        <div className="flex items-center">
          <div className="flex justify-center items-center h-auto py-2 sm:h-[8rem] lg:h-[10rem]">
            <div className="bg-img-profile w-16 h-16 sm:w-20 lg:w-24 sm:h-20 lg:h-24 rounded-full border-2 border-[var(--border-primary)]" />
          </div>

          <div className="p-3 sm:p-4 lg:p-5">
            <p className="text-[var(--text-color-secondary)] font-bold text-base sm:text-base">
              Julian Videla
            </p>
            <p className="text-[var(--text-color-primary)] font-light text-sm sm:text-base">
              Frontend Developer
            </p>
          </div>
        </div>
        <Tags />
      </div>
    </section>
  );
};