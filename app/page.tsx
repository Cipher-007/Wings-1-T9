import { pdfTopics } from "@/data/pdfs";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <span className="inline-flex items-center rounded-full bg-sky-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
          Wings 1 T9 Core Track
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
          Master every topic with on-demand MCQ PDFs
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
          Browse focused, 100-question practice sets covering Terraform, Ansible, Chef, Puppet,
          Linux, Git, CI/CD, Docker, and Kubernetes. Each question includes a clear explanation so
          you can revise efficiently and stay ready for the TCS Wings 1 T9 assessment.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {pdfTopics.map((topic) => (
          <article
            key={topic.slug}
            className="group flex h-full flex-col justify-between rounded-3xl border border-slate-800/70 bg-slate-900/70 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.45)] transition hover:-translate-y-1 hover:border-sky-400/80 hover:shadow-[0_25px_60px_rgba(14,165,233,0.35)]"
          >
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-50 transition group-hover:text-sky-200">
                {topic.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-300">{topic.description}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={topic.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-sky-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:opacity-90"
              >
                View PDF
              </a>
              <a
                href={topic.file}
                download
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-700/80 px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-200"
              >
                Download
              </a>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
