import { projects } from "@/data";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => (
  <section className="space-y-6">
    <div className="flex items-center gap-5">
      <Image
        src="/profile.png"
        height={60}
        width={60}
        alt="Profile"
        className="rounded-full"
      />
      <div className="">
        <h1 className="text-xl font-semibold tracking-tighter">
          Mohammad Talim
        </h1>
        <p>mohd.talim.work@gmail.com</p>
      </div>
    </div>
    <p>
      Full-Stack Developer. Studying CS Engineering. Building projects to dive
      deep into tech. Writing to understand better. Open to internships and
      always excited to connect with like-minded peers!
    </p>
  </section>
);

export const ProjectsSection = () => (
  <section className="my-16">
    <h2 className="text-xl font-bold">Recent Projects</h2>
    <hr className="border-zinc-700 mt-2 mb-7" />

    <div className="grid grid-cols-1 gap-7">
      {projects.map((project, index) => (
        <article key={project.title}>
          <h3 className="font-semibold">
            0{index}. {project.title}
          </h3>

          <div className="space-y-2">
            <p>{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <code key={tag}>{tag}</code>
              ))}
            </div>
          </div>

          <div className="flex gap-x-4 mt-3">
            <Link href={project.codeLink}>code</Link>
            <Link href={project.projectLink}>live</Link>
          </div>
        </article>
      ))}
    </div>
  </section>
);
