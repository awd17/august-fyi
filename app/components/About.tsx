export function About() {
  return (
    <section id="about" className=" space-y-4">
      <div className="font-departure-mono text-lg">
        <p className="mb-3">
          Hey, my name is{" "}
          <span className="whitespace-nowrap">August Drakton 👋</span>
        </p>
        <p className="mb-3">
          I'm a <span className="whitespace-nowrap">student 👨‍🎓</span> based in
          Los Angeles,<span className="whitespace-nowrap"> CA 📍</span>
        </p>
        <p>
          {" "}
          {/* No bottom margin needed on the last paragraph */}
          Check out what I've{" "}
          <span className="whitespace-nowrap">developed 👨‍💻</span> and get in
          touch with <span className="whitespace-nowrap">me! 📬</span>
        </p>
      </div>
    </section>
  );
}
