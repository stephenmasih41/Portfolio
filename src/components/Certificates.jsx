import { CERTIFICATES } from "../constants";

const Certificates = () => {
  return (
    <section className="border-b border-neutral-800 pb-8">
      <h2 className="my-10 text-center text-4xl font-semibold tracking-tight text-[#d1d5db] drop-shadow-lg">
        Certificates
      </h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
        {CERTIFICATES.map(({ title, provider, technologies }, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#23233b] to-[#181824] rounded-xl border border-neutral-700 p-5 w-56 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-lg font-bold mb-2 text-[#d1d5db] drop-shadow">
              {title}
            </h3>
            <p className="italic text-xs mb-3 text-[#b0b3b8]">{provider}</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-[#23233b] text-purple-500 px-3 py-1 rounded-full text-xs font-medium shadow"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
