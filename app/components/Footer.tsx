import Link from "next/link";

const asciiArt = `
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡄⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣼⣉⣛⣶⡶⠛⠉⠳⣶⡄
  ⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⠴⠖⠂⠀⠀⠀⠀⠒⠚⠉⢹⠉⡏⠁⠀⠀⠀⣰⣿⠟
  ⠀⠀⠀⠀⣀⣤⡶⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⠿⠋⠀
  ⠀⢀⣴⣿⠟⠉⠀⢠⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⣀⣤⠶⠞⠋⠁⠀⠀⠀
  ⢰⣿⡟⠁⠀⠀⢀⣿⡄⠀⠀⠀⠀⠀⣘⣇⠀⠀⢀⠖⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀
  ⠘⠿⣧⣀⣠⣤⣹⣿⣿⡶⠆⠶⠶⢾⣿⡿⡇⠿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠙⣿⠁⠀⠀⠀⠀⠀⢩⡍⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠋⠀⠀⠀⠀⠀⠀⠸⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
`;

function AsciiArt() {
  return (
    <pre
      style={{
        fontFamily: "monospace",
        fontSize: "1.2em",
        lineHeight: 1.2,
        whiteSpace: "pre",
      }}
      aria-label="Cute ASCII cat"
    >
      {asciiArt}
    </pre>
  );
}

export function Footer() {
  return (
    <footer
      id="contact"
      className="w-full flex flex-col items-center font-fira-mono text-neutral-500"
    >
      <div className="p-4">
        <AsciiArt />
      </div>
      <ul className="flex justify-center space-x-4 mb-4">
        <li>
          <Link
            href="https://x.com/augdrak"
            target="_blank"
            className="hover:underline"
          >
            X/augdrak
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/awd17"
            target="_blank"
            className="hover:underline"
          >
            Github/awd17
          </Link>
        </li>
      </ul>
      <div className="flex justify-center mb-20">
        <Link href="mailto:augdrak17@gmail.com" className="hover:underline">
          augdrak17@gmail.com
        </Link>
      </div>
    </footer>
  );
}
