import { PropsWithChildren } from "react";

export function Section({
  children,
  className,
  ...props
}: PropsWithChildren<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
>) {
  return (
    <>
      <section className={className} {...props}>
        <div className="blog flex flex-col md:flex-row gap-12 md:gap-16  justify-items-stretch  px-6 sm:px-6 md:px-8 lg:px-8 xl:px-0  ">
          <div className="container max-w-screen-xl">{children}</div>
        </div>
      </section>
    </>
  );
}
