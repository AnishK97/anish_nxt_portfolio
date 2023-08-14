"use client";

import React, { useState, useEffect, useRef } from "react";

import { HiDownload } from "react-icons/hi";

import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const letters =
  "私のウェブサイトをご覧いただき、貴重なフィードバックをお寄せいただきありがとうございます。詳細を確認するには接続してください";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const handleMouseOver = () => {
    let iteration = 0;

    if (intervalId !== null) {
      clearInterval(intervalId);
    }

    const target = headingRef.current;

    if (target) {
      setIntervalId(
        window.setInterval(() => {
          target.innerText = target.innerText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return target.dataset.value![index];
              }

              return letters[Math.floor(Math.random() * 15)];
            })
            .join("");

          if (iteration >= target.dataset.value!.length) {
            clearInterval(intervalId!);
          }

          iteration += 1 / 2;
        }, 50)
      );
    }
  };

  useEffect(() => {
    setIsMounted(true);
    if (isMounted) {
      handleMouseOver();
    }
    return () => clearInterval(intervalId!);
  }, [isMounted]);

  return (
    <section className="flex items-center">
      <div className="flex-col items-center justify-center pl-[15rem] mr-[10rem] w-[32.5rem] ">
        <p className="text-blue-400  items-center text-lg">Hello! I'm</p>
        <motion.div
          className="r "
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <h1
            onMouseOver={handleMouseOver}
            data-value="ANISH KULANDAISAMY"
            className="text-gray-200 text-[2.5rem] tracking-tighter truncate  w-[40rem]"
            ref={headingRef}
          >
            ANISH.KULANDAISAMY
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <h1 className="text-gray-400 text-[2rem] tracking-tighter ">
            FULL STACK DEVELOPER
          </h1>
        </motion.div>
        <motion.div
          className="flex items-center flex-nowrap w-[32.5rem]"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <p className="flex text-gray-400  text-[1.25rem] tracking-wide pt-2 ">
            Building digital products, brands, and experience.
          </p>
        </motion.div>
        <a
          className="group bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 text-gray-800 px-4 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 w-[10rem] mt-4"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
      </div>
      <div className="flex w-[48rem] h-[48rem] ml-15 pl-20">
        <Spline scene="https://prod.spline.design/NO8HW-T3LYEvy4ro/scene.splinecode" />
      </div>
      {/*         <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
          className=""
        >
          <Image
            src={anish}
            height={192}
            width={192}
            alt="anish"
            objectFit="cover"
            priority={true}
            className="h-56 w-56 rounded-full object-scale-down border-[0.35rem] border-gray-500 shadow-2xl pt-4 hover:scale-110"
          ></Image>
        </motion.div> */}
    </section>
  );
}
