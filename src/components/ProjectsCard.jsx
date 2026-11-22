const ProjectsCard = ({ url, img, phone, github, kind, title, text, tags }) => {
  const device = (
    <div className="relative mx-auto w-[250px]">
      <i className="absolute -left-[3px] top-[88px] h-7 w-[3px] rounded-l bg-[#2a2a2c]" />
      <i className="absolute -left-[3px] top-[132px] h-12 w-[3px] rounded-l bg-[#2a2a2c]" />
      <i className="absolute -left-[3px] top-[190px] h-12 w-[3px] rounded-l bg-[#2a2a2c]" />
      <i className="absolute -right-[3px] top-[148px] h-16 w-[3px] rounded-r bg-[#2a2a2c]" />
      <div className="rounded-[2.9rem] border-2 border-[#3a3a3d] bg-black p-[7px] shadow-[0_18px_40px_-12px_rgba(0,0,0,0.45)]">
        <div className="relative overflow-hidden rounded-[2.35rem] bg-[#faf7ff] pt-[38px]">
          <i className="absolute left-1/2 top-[10px] h-[22px] w-[76px] -translate-x-1/2 rounded-full bg-black" />
          <img
            src={img}
            alt={`${title} app home screen`}
            loading="lazy"
            className="block aspect-[1170/2532] w-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
  const shot = (
    <>
      <div className="flex h-6 items-center gap-1.5 border-b border-line px-3">
        <i className="h-2 w-2 rounded-full bg-line" />
        <i className="h-2 w-2 rounded-full bg-line" />
        <i className="h-2 w-2 rounded-full bg-line" />
      </div>
      <img
        src={img}
        alt={`${title} home page`}
        loading="lazy"
        className="aspect-[1326/825] w-full object-cover object-top"
      />
    </>
  );
  const frame = "block overflow-hidden rounded-xl border border-line bg-surface md:group-even:order-2";

  return (
    <article className="group grid items-center gap-6 py-8 md:grid-cols-2 md:gap-10">
      {phone ? (
        <div className="md:group-even:order-2">{device}</div>
      ) : url ? (
        <a href={url} className={frame} aria-label={`Open ${title}`}>
          {shot}
        </a>
      ) : (
        <div className={frame}>{shot}</div>
      )}
      <div className="min-w-0">
        <span className="label">{kind}</span>
        <h3 className="mb-3 mt-2 text-3xl font-bold">{title}</h3>
        <p className="max-w-[44ch] text-muted">{text}</p>
        <div className="my-5 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-5 text-[15px] font-semibold">
          {url && (
            <a href={url} className="border-b-2 border-accent pb-0.5">
              Live site
            </a>
          )}
          {github && (
            <a href={github} className="border-b-2 border-accent pb-0.5">
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;
