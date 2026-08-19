import type { ComponentProps, ReactNode } from "react";

import { Link } from "@tanstack/react-router";

interface EmptyStateProps {
  children: ReactNode;
}

function EmptyStateWrapper({ children }: EmptyStateProps) {
  return (
    <div className="hero flex-1">
      <div className="hero-content text-center">
        <div className="max-w-lg">{children}</div>
      </div>
    </div>
  );
}

function EmptyStateTitle({
  children,
  className,
  ...rest
}: ComponentProps<"h2">) {
  const mergedClassName = `text-4xl font-bold ${className || ""}`;

  return (
    <h2 className={mergedClassName} {...rest}>
      {children}
    </h2>
  );
}

function EmptyStateText({ children, className, ...rest }: ComponentProps<"p">) {
  const mergedClassName = `py-6 ${className || ""}`;

  return (
    <p className={mergedClassName} {...rest}>
      {children}
    </p>
  );
}

function EmptyStateLink({
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

const EmptyState = Object.assign(EmptyStateWrapper, {
  Title: EmptyStateTitle,
  Text: EmptyStateText,
  Link: EmptyStateLink,
});

export default EmptyState;
