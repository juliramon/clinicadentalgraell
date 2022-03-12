import Link from "next/link";

const TeamMember = ({ image, salutation, name, numCol, description, slug }) => {
  let subtitle;
  if (numCol !== null) {
    subtitle = <span>N. Col. {numCol}</span>;
  } else {
    subtitle = Object.keys(description).map((item, idx) => (
      <span key={idx} className="md:w-7/12">
        {description[item]}
      </span>
    ));
  }
  return (
    <div className="w-full md:w-1/3 py-4 px-8 lg:px-16 relative mb-8 lg:mb-16">
      <div className="relative bg-primary-100 bg-opacity-20 team-item">
        <div className="w-full h-full aspect-w-12 aspect-h-14 relative">
          <span className="absolute left-5 -top-4 bg-primary-100 h-full p-24 w-full bg-opacity-20 rounded-md"></span>
          <picture>
            <img
              src={image}
              datasrc={image}
              alt={name}
              className="object-cover w-full h-full rounded-md"
              width="400"
              height="300"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
      <div className="pt-5 z-20">
        <p className="text-md font-bold mb-1">
          {salutation} {name}
        </p>
        <span className="text-sm mt-1.5 leading-relaxed block">{subtitle}</span>
      </div>
      <div className="pt-8">
        <Link href={slug}>
          <a
            title={`${salutation} ${name}`}
            className="text-xs uppercase tracking-wider font-semibold text-primary-300 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-circle-plus mr-2"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#076899"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
              <line x1="9" y1="12" x2="15" y2="12" />
              <line x1="12" y1="9" x2="12" y2="15" />
            </svg>
            <span>Més informació</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default TeamMember;
