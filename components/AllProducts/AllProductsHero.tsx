"use client";

import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useState } from "react";

type Flavour = {
  name: string;
  title: string;
  description: string;
  color: string;
  splashImage: string;
  backgroundImage: string;
};

const flavours: Flavour[] = [
  {
    name: "MANGO",
    title: "MANGO",
    description:
      "A bold, juicy mango experience with a refreshing tropical taste. Crafted to deliver a smooth, delicious pre-workout boost with every stick.",
    color: "#FFD21C",
    splashImage: "/images/orignal mengo.png",
    backgroundImage: "/images/mango-background.png",
  },

  {
    name: "WATERMELON",
    title: "WATERMELON",
    description:
      "A juicy, refreshing watermelon taste with a crisp, fruity finish. Light, delicious, and refreshing—perfect for an instant burst of flavour with every stick.",
    color: "#F3263A",
    splashImage: "/images/WATERMELLON.png",
    backgroundImage: "/images/watermelon-background.png",
  },

  {
    name: "BLUE RASPBERRY",
    title: "BLUE RASPBERRY",
    description:
      "A vibrant burst of sweet-tart blue raspberry with a refreshing fruity finish. Bold, smooth, and deliciously refreshing in every stick.",
    color: "#2498FF",
    splashImage: "/images/MANGO.png",
    backgroundImage: "/images/blue-raspberry-background.png",
  },

  {
    name: "GRAPES",
    title: "GRAPES",
    description:
      "A rich, juicy grape taste with a smooth, refreshing finish. Sweet, fruity, and satisfying in every sip.",
    color: "#7B19FF",
    splashImage: "/images/GRAPES.png",
    backgroundImage: "/images/grapes-background.png",
  },
];

/* =========================================================
   EASING
========================================================= */

const smoothEase = [0.22, 1, 0.36, 1] as const;

const softEase = [0.16, 0.8, 0.2, 1] as const;

/* =========================================================
   FLAVOUR NAME ANIMATION
========================================================= */

const textVariants: Variants = {
  initial: (direction: number) => ({
    opacity: 0,
    y: direction === -1 ? 45 : -45,
  }),

  animate: {
    opacity: 1,
    y: 0,

    transition: {
      opacity: {
        duration: 0.35,
        ease: "easeOut",
      },

      y: {
        duration: 0.58,
        ease: smoothEase,
      },
    },
  },

  exit: (direction: number) => ({
    opacity: 0,
    y: direction === -1 ? -45 : 45,

    transition: {
      opacity: {
        duration: 0.25,
        ease: "easeIn",
      },

      y: {
        duration: 0.45,
        ease: smoothEase,
      },
    },
  }),
};

/* =========================================================
   PRODUCT IMAGE ANIMATION
========================================================= */

const productVariants: Variants = {
  initial: {
    opacity: 0,
    x: 180,
  },

  animate: {
    opacity: 1,
    x: 0,

    transition: {
      opacity: {
        duration: 0.32,
        ease: "easeOut",
      },

      x: {
        duration: 0.72,
        ease: smoothEase,
      },
    },
  },

  exit: {
    opacity: 0,
    x: -190,

    transition: {
      opacity: {
        duration: 0.28,
        ease: "easeIn",
      },

      x: {
        duration: 0.62,
        ease: smoothEase,
      },
    },
  },
};

/* =========================================================
   SPLASH
========================================================= */

const splashVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.82,
  },

  animate: {
    opacity: 1,
    scale: 1,

    transition: {
      opacity: {
        duration: 0.72,
        ease: "easeOut",
      },

      scale: {
        duration: 1.0,
        ease: softEase,
      },
    },
  },

  exit: {
    opacity: 0,
    scale: 0.9,

    transition: {
      opacity: {
        duration: 0.48,
        ease: "easeInOut",
      },

      scale: {
        duration: 0.58,
        ease: smoothEase,
      },
    },
  },
};

/* =========================================================
   BACKGROUND
========================================================= */

const backgroundVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 1.03,
  },

  animate: {
    opacity: 1,
    scale: 1,

    transition: {
      opacity: {
        duration: 0.55,
        ease: "easeOut",
      },

      scale: {
        duration: 0.8,
        ease: smoothEase,
      },
    },
  },

  exit: {
    opacity: 0,
    scale: 1.02,

    transition: {
      opacity: {
        duration: 0.35,
        ease: "easeIn",
      },
    },
  },
};

export default function AllProductsHero() {
  const [activeFlavour, setActiveFlavour] = useState(0);

  const [showSplash, setShowSplash] = useState(false);

  const [hoveredFlavour, setHoveredFlavour] = useState<number | null>(null);

  const [textDirection, setTextDirection] = useState(-1);

  const flavour = flavours[activeFlavour];

  /* =========================================================
     PREVIOUS FLAVOUR
  ========================================================== */

  const previousFlavour = () => {
    setTextDirection(-1);
    setShowSplash(false);

    setActiveFlavour((current) =>
      current === 0 ? flavours.length - 1 : current - 1,
    );

    setHoveredFlavour(null);
  };

  /* =========================================================
     NEXT FLAVOUR
  ========================================================== */

  const nextFlavour = () => {
    setTextDirection(-1);
    setShowSplash(false);

    setActiveFlavour((current) =>
      current === flavours.length - 1 ? 0 : current + 1,
    );

    setHoveredFlavour(null);
  };

  /* =========================================================
     FLAVOUR NAME CLICK
  ========================================================== */

  const selectFlavour = (index: number) => {
    if (index === activeFlavour) {
      return;
    }

    setTextDirection(1);
    setShowSplash(false);
    setActiveFlavour(index);
    setHoveredFlavour(null);
  };

  return (
    <section
      className="
        relative
        min-h-screen
        min-h-[100dvh]
        w-full
        overflow-hidden
        bg-black
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND FLAVOUR IMAGE
      ====================================================== */}

      <AnimatePresence mode="wait">
        {hoveredFlavour !== null && (
          <motion.div
            key={flavours[hoveredFlavour].backgroundImage}
            variants={backgroundVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 z-0"
          >
            <Image
              src={flavours[hoveredFlavour].backgroundImage}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          DARK OVERLAY
      ====================================================== */}

      <div className="absolute inset-0 z-[1] bg-black/20" />

      {/* =====================================================
          TOP LEFT ROCK
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-15px]
          top-[-5px]
          z-[5]
          w-[190px]

          sm:left-[-20px]
          sm:top-[-8px]
          sm:w-[250px]

          md:left-[-22px]
          md:top-[-10px]
          md:w-[330px]

          lg:left-[-25px]
          lg:top-[-10px]
          lg:w-[390px]

          xl:w-[410px]
        "
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 55%, rgba(0,0,0,0.9) 68%, rgba(0,0,0,0.45) 82%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 55%, rgba(0,0,0,0.9) 68%, rgba(0,0,0,0.45) 82%, transparent 100%)",
        }}
      >
        <Image
          src="/images/image415.png"
          alt=""
          width={420}
          height={420}
          priority
          className="h-auto w-full object-contain"
        />
      </div>

      {/* =====================================================
          TOP LEFT ROCK - SECOND LAYER
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-[5]
        "
      >
        <Image
          src="/images/image415.png"
          alt=""
          width={420}
          height={420}
          className="
            h-auto
            w-[130px]

            sm:w-[180px]

            md:w-[260px]

            lg:w-[340px]

            xl:w-[420px]
          "
        />
      </div>

      {/* =====================================================
          TOP RIGHT ROCK
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-15px]
          top-[-5px]
          z-[5]
          w-[190px]

          sm:right-[-20px]
          sm:top-[-8px]
          sm:w-[250px]

          md:right-[-22px]
          md:top-[-10px]
          md:w-[330px]

          lg:right-[-25px]
          lg:top-[-10px]
          lg:w-[390px]

          xl:w-[410px]
        "
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 55%, rgba(0,0,0,0.9) 68%, rgba(0,0,0,0.45) 82%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 55%, rgba(0,0,0,0.9) 68%, rgba(0,0,0,0.45) 82%, transparent 100%)",
        }}
      >
        <Image
          src="/images/image415.png"
          alt=""
          width={420}
          height={420}
          priority
          className="h-auto w-full scale-x-[-1] object-contain"
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          min-h-screen
          min-h-[100dvh]
          w-full
        "
      >
        {/* ===================================================
            LEFT CONTENT
        ==================================================== */}

        <div
          className="
            absolute
            left-[16px]
            top-[19%]
            z-30
            w-[calc(100%-32px)]
            max-w-[430px]

            sm:left-[5%]
            sm:top-[21%]
            sm:w-[42%]

            md:left-[5%]
            md:top-[24%]
            md:w-[38%]

            lg:left-[6%]
            lg:top-[27%]
            lg:w-[32%]

            xl:left-[6%]
            xl:w-[32%]
          "
        >
          {/* =================================================
              POWER RUSH
          ================================================== */}

          <div
            className="
              mb-[12px]
              uppercase

              sm:mb-[15px]

              md:mb-[18px]
            "
            style={{
              fontFamily: "TacticSansExd",
              fontSize: "clamp(19px, 2.15vw, 30.27px)",
              lineHeight: "89%",
              fontWeight: 400,
              fontStyle: "normal",
              textTransform: "uppercase",
              background:
                "linear-gradient(90.24deg, #A5A5A5 0%, #FFFFFF 46.06%, #878787 99.79%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            POWER RUSH
          </div>

          {/* =================================================
              TITLE + DESCRIPTION
          ================================================== */}

          <AnimatePresence mode="wait" custom={textDirection}>
            <motion.div
              key={flavour.name}
              custom={textDirection}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {/* FLAVOUR TITLE */}

              <h1
                className="
                  uppercase
                  whitespace-normal
                  break-words
                "
                style={{
                  fontFamily: "TacticSansExd-UltIt",
                  fontSize: "clamp(36px, 4.65vw, 65.48px)",
                  lineHeight: "89%",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: flavour.color,
                }}
              >
                {flavour.title}
              </h1>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-[16px]
                  w-full
                  max-w-[500px]
                  font-sf
                  text-[14px]
                  font-[510]
                  leading-[1.25]

                  sm:mt-[20px]
                  sm:text-[15px]

                  md:mt-[23px]
                  md:text-[17px]

                  lg:mt-[25px]
                  lg:text-[18.15px]
                  lg:leading-[104%]
                "
              >
                {flavour.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* =================================================
              FLAVOURS LIST
          ================================================== */}

          <div
            className="
              mt-[35px]

              sm:mt-[42px]

              md:mt-[50px]

              lg:mt-[55px]
            "
          >
            {/* FLAVOURS HEADING */}

            <div
              className="
                mb-[15px]
                uppercase

                sm:mb-[17px]

                md:mb-[20px]
              "
              style={{
                fontFamily: "TacticSansExd",
                fontSize: "clamp(19px, 2.15vw, 30.27px)",
                lineHeight: "89%",
                fontWeight: 400,
                fontStyle: "normal",
                textTransform: "uppercase",
                background:
                  "linear-gradient(90.24deg, #A5A5A5 0%, #FFFFFF 46.06%, #878787 99.79%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              FLAVOURS
            </div>

            {/* FLAVOUR NAMES */}

            <div
              className="
                flex
                flex-col
                gap-[11px]

                sm:gap-[12px]

                md:gap-[13px]
              "
            >
              {flavours.map((item, index) => {
                const isActive = activeFlavour === index;

                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => selectFlavour(index)}
                    onMouseEnter={() => setHoveredFlavour(index)}
                    onMouseLeave={() => setHoveredFlavour(null)}
                    className="
                      w-fit
                      max-w-full
                      cursor-pointer
                      text-left
                      uppercase
                      outline-none

                      touch-manipulation
                    "
                    style={{
                      fontFamily: "TacticSansExd-UltIt",
                      fontSize: "clamp(20px, 2vw, 26.73px)",
                      lineHeight: "70%",
                      fontWeight: 400,
                      fontStyle: "italic",
                      textTransform: "uppercase",
                      color: isActive ? item.color : "#8B8B8B",
                      WebkitTextStroke: "0.7px currentColor",
                      transition: "color 0.25s ease",
                    }}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ===================================================
            CENTER PRODUCT AREA
        ==================================================== */}

        <div
          className="
            pointer-events-auto
            absolute
            left-1/2
            top-0
            z-20
            h-full
            w-[180px]
            -translate-x-1/2

            sm:w-[250px]

            md:w-[380px]

            lg:w-[500px]

            xl:w-[600px]
          "
          onMouseEnter={() => setShowSplash(true)}
        >
          {/* =================================================
              SPLASH
          ================================================== */}

          <AnimatePresence mode="wait">
            {showSplash && (
              <motion.div
                key={flavour.splashImage}
                variants={splashVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-[37%]
                  z-10
                  flex
                  h-[260px]
                  w-[260px]
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center

                  sm:top-[38%]
                  sm:h-[350px]
                  sm:w-[350px]

                  md:h-[450px]
                  md:w-[450px]

                  lg:h-[550px]
                  lg:w-[550px]

                  xl:h-[620px]
                  xl:w-[620px]
                "
              >
                <Image
                  src={flavour.splashImage}
                  alt=""
                  width={800}
                  height={800}
                  priority
                  className="h-full w-full object-contain"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* =================================================
              PRODUCT IMAGE
          ================================================== */}

          <AnimatePresence mode="wait">
            <motion.div
              key={flavour.name}
              variants={productVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="
                absolute
                left-1/2
                top-[14%]
                z-30
                -translate-x-1/2

                sm:top-[13%]

                md:top-[12%]
              "
            >
              <Image
                src="/images/powoe2.png"
                alt="Power Rush"
                width={300}
                height={520}
                priority
                className="
                  h-auto
                  w-[105px]
                  object-contain

                  sm:w-[125px]

                  md:w-[145px]

                  lg:w-[175px]

                  xl:w-[190px]
                "
              />
            </motion.div>
          </AnimatePresence>

          {/* =================================================
              ROCK
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-[-5px]
              left-1/2
              z-20
              w-[210px]
              -translate-x-1/2

              sm:w-[290px]

              md:w-[380px]

              lg:w-[460px]

              xl:w-[520px]
            "
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, black 62%, rgba(0,0,0,0.85) 72%, rgba(0,0,0,0.45) 84%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, black 0%, black 62%, rgba(0,0,0,0.85) 72%, rgba(0,0,0,0.45) 84%, transparent 100%)",
            }}
          >
            <Image
              src="/images/smallRock.png"
              alt=""
              width={600}
              height={360}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        {/* ===================================================
            RIGHT DESCRIPTION
        ==================================================== */}

        <div
          className="
            absolute
            right-[16px]
            top-auto
            bottom-[7%]
            z-20
            w-[calc(100%-32px)]
            max-w-[430px]
            text-left

            sm:right-[5%]
            sm:bottom-[7%]
            sm:w-[36%]
            sm:text-right

            md:right-[5%]
            md:top-1/2
            md:bottom-auto
            md:w-[30%]
            md:-translate-y-1/2

            lg:right-[7%]
            lg:w-[27%]
          "
        >
          <p
            className="
              ml-0
              w-full
              font-sf
              text-[13px]
              font-[510]
              leading-[1.25]
              text-left

              sm:ml-auto
              sm:text-[14px]
              sm:text-right

              md:text-[16px]

              lg:w-[520px]
              lg:text-[18.15px]
              lg:leading-[104%]
              lg:text-right
            "
          >
            Ultra Premium Performance Formula Creatine +
            <br className="hidden lg:block" />
            Caffeine + Taurine designed to support instant
            <br className="hidden lg:block" />
            power, strength, energy, and mental focus.
          </p>
        </div>
      </div>
    </section>
  );
}