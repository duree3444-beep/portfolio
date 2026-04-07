interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ eyebrow, title, description }: Props) {
  return (
    <div className="max-w-3xl mb-10">
      <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-950">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}
