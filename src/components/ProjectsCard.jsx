const ProjectsCard = ({ url, img, github, kind, title, text, tags }) => {
  return (
    <article className="grid items-center gap-6 py-8 md:grid-cols-2 md:gap-10 md:even:[&>a]:order-2">
      <a
        href={url}
        className="block overflow-hidden rounded-xl border border-line bg-surface"
        aria-label={`Open ${title}`}
      >
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
      </a>
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
          <a href={url} className="border-b-2 border-accent pb-0.5">
            Live site
          </a>
          <a href={github} className="border-b-2 border-accent pb-0.5">
            Code
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;
