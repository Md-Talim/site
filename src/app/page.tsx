import Image from "next/image";

export default function HomePage() {
  return (
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
      <p className="text-zinc-300">
        Full-Stack Developer. Studying CS Engineering. Building projects to dive
        deep into tech. Writing to understand better. Open to internships and
        always excited to connect with like-minded peers!
      </p>
    </section>
  );
}
