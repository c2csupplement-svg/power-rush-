import Reveal from "./Reveal";

export default function BuildGoal() {
  return (
    <section className="build-goal">
      <div className="build-image">
        <img
          src="/images/SAHETD 1.png"
          alt="Build for every goal"
        />

        <div className="image-shade" />
      </div>

      <div
        className="
    build-content
    relative
    !-translate-y-[220px]
    !translate-x-[80px]
        "
      >
        <Reveal>

          {/* HEADING */}
          <h2
            className="
              !font-tactic
              !text-[35px]
              !font-normal
              !leading-[89%]
              !tracking-[0%]
              !uppercase
              !bg-[linear-gradient(90.24deg,#A5A5A5_0%,#FFFFFF_46.06%,#878787_99.79%)]
              !bg-clip-text
              !text-transparent

              md:!text-[52px]
              lg:!text-[56px]
            "
          >
            BUILD FOR
            <br />

            <span
              className="
                !text-[56px]
                md:!text-[60px]
                lg:!text-[64px]
              "
            >
              EVERY GOAL
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              !mt-6
              !max-w-[650px]
              !font-sf
              !text-[22px]
              !font-normal
              !leading-[1.25]
              !tracking-normal
              !text-white
            "
          >
            Whatever you’re working toward—strength, performance, recovery,
            endurance, or everyday energy—Power Rush is designed to fit your
            routine.
          </p>

        </Reveal>
      </div>
    </section>
  );
}