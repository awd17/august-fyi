import { Button } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
  projectUrl: string;
  imageUrl: string;
}

export function ProjectCard({
  title,
  description,
  githubUrl,
  projectUrl,
  imageUrl,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col space-y-4 bg-neutral-950 border-2 border-neutral-900 p-4 rounded-lg">
      <div className="flex w-full bg-neutral-900 aspect-video rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={`${title} project screenshot`}
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h3 className="text-lg font-bold font-geist-mono">{title}</h3>
        <p className="text-sm font-geist-mono text-neutral-500">
          {description}
        </p>
        <div className="flex flex-row space-x-2 mt-4">
          <Link target="_blank" href={githubUrl} className="w-full">
            <Button className="flex items-center justify-center w-full bg-neutral-900 p-2 rounded-lg transition-colors duration-200 hover:[filter:brightness(1.15)] cursor-pointer border border-neutral-800 shadow-[inset_2px_2px_8px_0_rgba(255,255,255,0.08),inset_-2px_-2px_8px_0_rgba(0,0,0,0.25)] space-x-2">
              <svg
                data-testid="geist-icon"
                height="16"
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width="16"
                style={{ color: "currentColor" }}
              >
                <g clipPath="url(#clip0_872_3147)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 0C3.58 0 0 3.57879 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.42816C12.81 5.98797 13.12 6.69773 13.12 7.57743C13.12 10.6464 11.25 11.3262 9.47 11.5261C9.76 11.776 10.01 12.2558 10.01 13.0056C10.01 14.0752 10 14.9349 10 15.2049C10 15.4148 10.15 15.6647 10.55 15.5847C12.1381 15.0488 13.5182 14.0284 14.4958 12.6673C15.4735 11.3062 15.9996 9.67293 16 7.99729C16 3.57879 12.42 0 8 0Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_872_3147">
                    <rect width="16" height="16" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <span className="ml-2 hidden sm:inline">GitHub</span>
            </Button>
          </Link>
          <Link target="_blank" href={projectUrl} className="w-full">
            <Button className="flex items-center justify-center w-full bg-neutral-900 p-2 rounded-lg transition-colors duration-200 hover:[filter:brightness(1.15)] cursor-pointer border border-neutral-800 shadow-[inset_2px_2px_8px_0_rgba(255,255,255,0.08),inset_-2px_-2px_8px_0_rgba(0,0,0,0.25)] space-x-2">
              <svg
                data-testid="geist-icon"
                height="16"
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width="16"
                style={{ color: "currentColor" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.5 10.25V13.25C13.5 13.3881 13.3881 13.5 13.25 13.5H2.75C2.61193 13.5 2.5 13.3881 2.5 13.25L2.5 2.75C2.5 2.61193 2.61193 2.5 2.75 2.5H5.75H6.5V1H5.75H2.75C1.7835 1 1 1.7835 1 2.75V13.25C1 14.2165 1.7835 15 2.75 15H13.25C14.2165 15 15 14.2165 15 13.25V10.25V9.5H13.5V10.25ZM9 1H9.75H14.2495C14.6637 1 14.9995 1.33579 14.9995 1.75V6.25V7H13.4995V6.25V3.56066L8.53033 8.52978L8 9.06011L6.93934 7.99945L7.46967 7.46912L12.4388 2.5H9.75H9V1Z"
                  fill="currentColor"
                />
              </svg>
              <span className="ml-2 hidden sm:inline">Preview</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
