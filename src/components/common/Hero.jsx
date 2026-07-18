import { Link } from "@tanstack/react-router";

export default function Hero({ children }) {
  return (
    <div className="hero flex-1">
      <div className="hero-content text-center">
        <div className="max-w-md">{children}</div>
      </div>
    </div>
  );
}

function HeroTitle({ children, ...props }) {
  const className = `text-5xl font-bold ${props.className || ""}`;

  return (
    <h2 {...props} className={className}>
      {children}
    </h2>
  );
}

function HeroText({ children, ...props }) {
  const className = `py-6 ${props.className || ""}`;

  return (
    <p {...props} className={className}>
      {children}
    </p>
  );
}

function HeroLink({ children, ...props }) {
  const className = `btn btn-primary ${props.className || ""}`;

  return (
    <Link {...props} className={className}>
      {children}
    </Link>
  );
}

Hero.Title = HeroTitle;
Hero.Text = HeroText;
Hero.Link = HeroLink;
