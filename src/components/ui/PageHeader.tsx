import type { ComponentPropsWithoutRef } from "react";

import { useRouter } from "@tanstack/react-router";

import { ArrowLeftIcon } from "../icons";

function PageHeaderWrapper({
  children,
  className,
  ...rest
}: ComponentPropsWithoutRef<"header">) {
  const mergedClassName = `flex items-center font-bold p-6 ${className}`;

  return (
    <header className={mergedClassName} {...rest}>
      {children}
    </header>
  );
}

function Title({
  children,
  className,
  ...rest
}: ComponentPropsWithoutRef<"h1">) {
  const mergedClassName = `text-xl ${className || ""}`;

  return (
    <h1 className={mergedClassName} {...rest}>
      {children}
    </h1>
  );
}

function BackButton({
  className,
  onClick,
  ...rest
}: ComponentPropsWithoutRef<"button">) {
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
