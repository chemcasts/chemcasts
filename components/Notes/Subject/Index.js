import Link from "next/link";
import Image from "next/image";

const Index = ({ subject }) => {
  return (
    <div class="card bg-neutral text-neutral-content bordered">
      <figure>
        <img src="https://daisyui.com/tailwind-css-component-card-1.png" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          {subject.Name}
          <div class="badge mx-2 badge-secondary">NEW</div>
        </h2>
        <p>{subject.Description}</p>
        <div class="justify-end card-actions">
          <Link href={"/notes/subject/" + subject.Slug}>
            <button className="btn btn-secondary">Start</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
