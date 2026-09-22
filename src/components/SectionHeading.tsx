import { Reveal } from "@/components/Reveal";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeading({ index, eyebrow, title, description, className = "mb-14" }: SectionHeadingProps) {
  return (
    <Reveal className={`space-y-4 ${className}`}>
      <div className="inline-flex items-center gap-2.5 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 shadow-sm">
        <span className="rounded-full bg-indigo-600 px-1.5 py-0.5 text-[10px] font-bold text-white">
          {index}
        </span>
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-700">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-slate-500 max-w-2xl text-base leading-relaxed">
          {description}
        </p>
      )}
    </Reveal>
  );
}
