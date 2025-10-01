import { HoverBorderGradient } from "./hover-border-gradient";
import Image from "next/image";

interface Feature1Props {
  title: string;
  description?: string;

  buttonSecondary: {
    label: string;
    href: string;
  };
}

export const Feature1 = ({
  title = "Blocks built with Shadcn & Tailwind",
  description = "Hundreds of finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  buttonSecondary = {
    label: "Book Your Appointment",
    href: "https://shadcnblocks.com",
  },
}: Feature1Props) => {
  return (
    <section className="pt-18 pb-4 flex items-center justify-around">
      <div className="container px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="my-6 mt-0 text-4xl font-semibold text-balance lg:text-5xl">
              {title}
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg">
              {description}
            </p>
            <div className="flex w-full flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black border-green-200 border-1 bg-gray-100 cursor-pointer text-black dark:text-white flex items-center space-x-2"
              >
                <span>{buttonSecondary.label}</span>
              </HoverBorderGradient>
            </div>
          </div>
          <Image
          src="/icons/salon_header.jpg"
          width={486}
          height={481}
          alt="Facial"
          >
          </Image>
        </div>
      </div>
    </section>
  );
};
