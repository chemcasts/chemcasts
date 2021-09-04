const State = () => {
  return (
    <div className="pt-10 pb-20 bg-gradient-to-br from-base-100 to-base-300 text-base-content">
      <div className="flex justify-center w-full">
        <div className="stats">
          <a
            href="/components/button"
            className="gap-0 px-10 bg-transparent stat place-items-center hover:opacity-70"
          >
            <div className="stat-value">12</div>
            <div className="stat-desc">Subjects</div>
          </a>
          <a
            href="/docs/default-themes"
            className="gap-0 px-10 bg-transparent stat place-items-center hover:opacity-70"
          >
            <div className="stat-value">21</div>
            <div className="stat-desc">Chapters</div>
          </a>
          <a
            href="/docs/default-themes"
            className="gap-0 px-10 bg-transparent stat place-items-center hover:opacity-70"
          >
            <div className="stat-value">2100</div>
            <div className="stat-desc">Notes</div>
          </a>
        </div>
      </div>
      <div className="flex justify-center w-full mt-10">
        <a href="/components/button" className="btn btn-primary btn-wide">
          Let's get Started
        </a>
      </div>
    </div>
  );
};

export default State;
