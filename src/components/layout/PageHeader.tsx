import type { ComponentProps } from "react";

import { useRouter } from "@tanstack/react-router";

import { ArrowLeftIcon } from "../icons";

function PageHeaderWrapper({
  children,
  className,
  ...rest
}: ComponentProps<"header">) {
  const mergedClassName = `sticky top-0 z-20 flex items-center font-bold w-full max-w-6xl mx-auto p-4 md:p-6 lg:p-8 bg-base-100/80 backdrop-blur-md ${className || ""}`;

  return (
    <header className={mergedClassName} {...rest}>
      {children}
    </header>
  );
}

function Title({ children, className, ...rest }: ComponentProps<"h1">) {
  const mergedClassName = `text-xl lg:text-2xl ${className || ""}`;

  return (
    <h1 className={mergedClassName} {...rest}>
      {children}
    </h1>
  );
}

function BackButton({ className, onClick, ...rest }: ComponentProps<"button">) {
  const router = useRouter();
  const mergedClassName = `btn btn-circle btn-ghost -m-2 mr-2 hover:bg-neutral ${className || ""}`;

  return (
    <button
      className={mergedClassName}
      type="button"
      onClick={(e) => {
        if (onClick) onClick(e);
        router.history.back();
      }}
      {...rest}
    >
      <ArrowLeftIcon className="text-3xl" />
    </button>
  );
}

const PageHeader = Object.assign(PageHeaderWrapper, {
  Title: Title,
  BackButton: BackButton,
});

export default PageHeader;
