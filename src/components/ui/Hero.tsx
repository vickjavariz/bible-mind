import type {
  ComponentProps,
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";

import { Link } from "@tanstack/react-router";

interface HeroProps {
  children: ReactNode;
}

function HeroWrapper({ children }: HeroProps) {
  return (
    <div className="hero flex-1">
      <div className="hero-content text-center">
        <div className="max-w-md">{children}</div>
      </div>
    </div>
  );
}

function HeroTitle({
  children,
  className,
  ...rest
}: ComponentPropsWithoutRef<"h2">) {
  const mergedClassName = `text-5xl font-bold ${className || ""}`;

  return (
    <h2 className={mergedClassName} {...rest}>
      {children}
    </h2>
  );
}

function HeroText({
  children,
  className,
  ...rest
}: ComponentPropsWithoutRef<"p">) {
  const mergedClassName = `py-6 ${className || ""}`;

  return (
    <p className={mergedClassName} {...rest}>
      {children}
    </p>
  );
}

function HeroLink({
  children,
  className,
  ...rest
}: ComponentProps<typeof Link>) {
  const mergedClassName = `btn btn-primary ${className || ""}`;

  return (
    <Link className={mergedClassName} {...rest}>
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
