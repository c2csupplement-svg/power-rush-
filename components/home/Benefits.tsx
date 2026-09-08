import Reveal from "./Reveal";
import BenefitCard from "./BenefitCard";

const data = [
  [
    "01",
    "STRENGTH OUTPUT",
    "Increase muscular strength for heavier lifts and better training performance.",
  ],
  [
    "02",
    "POWER PRODUCTION",
    "Support explosive movements during high-intensity workouts.",
  ],
  [
    "03",
    "FASTER RECOVERY",
    "Help restore energy between sets and after intense training sessions.",
  ],
  [
    "04",
    "MICRONIZED PURITY",
    "Ultra-fine, high-purity creatine that mixes smoothly with no unnecessary fillers.",
  ],
  [
    "05",
    "DAILY PERFORMANCE",
    "Maintain consistent performance across every workout and training cycle.",
  ],
  [
    "06",
    "LEAN MUSCLE SUPPORT",
    "Support muscle growth alongside consistent training and proper nutrition.",
  ],
];

export default function Benefits() {
  return (
    <section
      className="
        benefits
        section-screen
        relative
        w-full
        overflow-x-hidden
        overflow-y-visible
        bg-black
      "
    >
      {/* =====================================================
          HEADING
      ====================================================== */}
      <div
        className="
          benefits-heading
          relative
          z-[30]
          w-full
          px-[16px]
          text-center

          sm:px-[24px]
          md:px-[40px]
          lg:px-[60px]
          xl:px-[80px]
        "
      >
        <Reveal>
          {/* BENEFITS */}
          <div
            className="
              font-dm-mono
              text-[25px]
              font-medium
              leading-[97%]
              tracking-[0%]
              text-[#9D9D9D]

              sm:text-[29px]
              md:text-[35px]
            "
          >
            BENEFITS
          </div>

          {/* MAIN HEADING */}
          <h2
            className="
              mt-[15px]
              bg-[linear-gradient(90.24deg,#A5A5A5_0%,#FFFFFF_46.06%,#878787_99.79%)]
              bg-clip-text
              font-tactic-exd
              text-[30px]
              font-normal
              uppercase
              leading-[89%]
              tracking-[0.02em]
              text-transparent

              sm:mt-[17px]
              sm:text-[36px]

              md:mt-[20px]
              md:text-[46.58px]
            "
          >
            FUEL EVERY TRAINING SESSION
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              mt-[17px]
              max-w-[650px]
              font-sf
              text-[16px]
              font-normal
              leading-[115%]
              tracking-[0%]
              text-center
              text-[#C5C5C5]

              sm:mt-[19px]
              sm:text-[18px]

              md:mt-[22px]
              md:text-[22px]
              md:leading-[104%]
            "
          >
            Every serving is formulated to help you perform, recover, and
            <br className="hidden sm:block" />
            progress with confidence.
          </p>
        </Reveal>
      </div>

      {/* =====================================================
          CARDS + ROCK BACKGROUND
      ====================================================== */}
      <div
        className="
          relative
          mt-[38px]
          w-full
          overflow-visible

          sm:mt-[45px]
          md:mt-[55px]
        "
      >
        {/* =================================================
            ROCK IMAGE
            BEHIND CARDS
        ================================================== */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-[70px]
            z-[1]
            h-[430px]
            w-full
            overflow-hidden

            sm:top-[80px]
            sm:h-[490px]

            md:top-[100px]
            md:h-[570px]

            lg:h-[620px]

            xl:h-[670px]
          "
        >
          <img
            src="/images/Frame1168.png"
            alt=""
            className="
              absolute
              left-0
              top-0
              h-full
              w-full
              max-w-none
              object-cover
              object-center
            "
          />

          {/* TOP DARK BLEND */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              h-[110px]
              w-full
              bg-[linear-gradient(to_bottom,#000_0%,rgba(0,0,0,0.92)_30%,rgba(0,0,0,0.55)_65%,transparent_100%)]

              sm:h-[130px]
              md:h-[150px]
              lg:h-[170px]
            "
          />

          {/* BOTTOM BLEND */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              h-[190px]
              w-full
              bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.08)_15%,rgba(0,0,0,0.25)_35%,rgba(0,0,0,0.55)_58%,rgba(0,0,0,0.82)_78%,#000_100%)]

              sm:h-[220px]
              md:h-[260px]
              lg:h-[300px]
            "
          />
        </div>

        {/* =================================================
            BENEFIT CARDS
        ================================================== */}
        <div
          className="
            benefit-grid
            relative
            z-[10]
            w-full
            px-[14px]

            sm:px-[22px]
            md:px-[35px]
            lg:px-[55px]
            xl:px-[70px]
          "
        >
          {data.map((x, i) => (
            <Reveal
              key={x[0]}
              delay={i * 0.04}
            >
              <BenefitCard
                number={x[0]}
                title={x[1]}
                body={x[2]}
              />
            </Reveal>
          ))}
        </div>

        {/* =================================================
            EXTRA ROCK AREA
            KEEPS ROCKS VISIBLE BELOW CARDS
        ================================================== */}
        <div
          className="
            pointer-events-none
            relative
            z-[2]
            h-[230px]
            w-full

            sm:h-[270px]
            md:h-[350px]
            lg:h-[390px]
            xl:h-[420px]
          "
        />
      </div>

      {/* =====================================================
          START YOUR PROGRESS
      ====================================================== */}
      <div
        className="
          relative
          z-[30]
          mt-[10px]
          flex
          w-full
          flex-col
          items-center
          px-[16px]
          text-center

          sm:mt-[15px]
          sm:px-[24px]

          md:mt-[20px]
          md:px-[30px]
        "
      >
        {/* =========================
            HEADING
        ========================== */}
        <h2
          className="
            max-w-full
            bg-[linear-gradient(90.24deg,#A5A5A5_0%,#FFFFFF_46.06%,#878787_99.79%)]
            bg-clip-text
            font-tactic-exd
            text-[38px]
            font-normal
            uppercase
            leading-[89%]
            tracking-[0%]
            text-center
            text-transparent

            sm:text-[50px]

            md:text-[64px]

            lg:text-[75.92px]
          "
        >
          START YOUR PROGRESS
        </h2>

        {/* =========================
            DESCRIPTION
        ========================== */}
        <p
          className="
            mt-[15px]
            w-full
            max-w-[700px]
            font-sf
            text-[16px]
            font-[510]
            leading-[120%]
            tracking-[0%]
            text-center
            text-[#CECECE]

            sm:mt-[17px]
            sm:text-[18px]

            md:mt-[18px]
            md:text-[21px]

            lg:text-[23.2px]
            lg:leading-[104%]
          "
        >
          Join the{" "}
          <span className="font-sf font-bold text-white">
            POWER RUSH
          </span>{" "}
          community for exclusive offers, product
          <br className="hidden sm:block" />
          updates, and early access to future releases.
        </p>

        {/* =========================
            EMAIL FORM
        ========================== */}
        <div
          className="
            mt-[22px]
            flex
            h-[50px]
            w-full
            max-w-[500px]
            overflow-hidden

            sm:mt-[25px]
            sm:h-[54px]

            md:mt-[28px]
            md:h-[58px]
          "
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="
              h-full
              min-w-0
              flex-1
              border
              border-[#5A5A5A]
              bg-[#000000]
              px-[13px]
              font-sf
              text-[14px]
              font-normal
              leading-[104%]
              tracking-[0%]
              text-[#CECECE]
              outline-none
              placeholder:text-[#CECECE]

              sm:px-[16px]
              sm:text-[15px]

              md:px-[20px]
              md:text-[16px]
            "
          />

          <button
            className="
              h-full
              w-[145px]
              shrink-0
              border
              border-white
              bg-white
              px-[8px]
              font-tactic-reg
              text-[17px]
              font-normal
              leading-[88%]
              tracking-[0%]
              text-center
              uppercase
              whitespace-nowrap
              text-[#000000]

              sm:w-[175px]
              sm:text-[22px]

              md:w-[210px]
              md:text-[28px]

              lg:w-[230px]
              lg:text-[35px]
            "
          >
            JOIN POWER RUSH
          </button>
        </div>
      </div>
    </section>
  );
}