import type {
  ComponentProps,
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";

import { Link } from "@tanstack/react-router";

interface HeroWrapperProps {
  children: ReactNode;
}

function HeroWrapper({ children }: HeroWrapperProps) {
  return (
    <div className="hero flex-1">
      <div className="hero-content text-center">
        <div className="max-w-md">{children}</div>
      </div>
    </div>
  );
}

function HeroTitle({ children, ...props }: ComponentPropsWithoutRef<"h2">) {
  const className = `text-5xl font-bold ${props.className || ""}`;

  return (
    <h2 {...props} className={className}>
      {children}
    </h2>
  );
}

function HeroText({ children, ...props }: ComponentPropsWithoutRef<"p">) {
  const className = `py-6 ${props.className || ""}`;

  return (
    <p {...props} className={className}>
      {children}
    </p>
  );
}

function HeroLink({ children, ...props }: ComponentProps<typeof Link>) {
  const className = `btn btn-primary ${props.className || ""}`;

  return (
    <Link {...props} className={className}>
      {children}
    </Link>
  );
}

const Hero = Object.assign(HeroWrapper, {
  Title: HeroTitle,
  Text: HeroText,
  Link: HeroLink,
});

export default Hero;
