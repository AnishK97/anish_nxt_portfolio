"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

import { motion } from "framer-motion";

import anish from "@/public/anish.png";
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

              return letters[Math.floor(Math.random() * 26)];
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
      <div className="flex-col items-center justify-center">
        <motion.div
          className="flex items-center justify-center "
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <h1
            onMouseOver={handleMouseOver}
            data-value="ANISH.DEV"
            className="text-gray-400 text-[3rem] tracking-tighter  pt-4"
            ref={headingRef}
          >
            ANISH.DEV
          </h1>
        </motion.div>
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <h1 className="text-gray-400 text-[2rem] tracking-tighter pt-4 ">
            FULL STACK DEVELOPER
          </h1>
        </motion.div>
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <p className="text-gray-400 pt-5 text-[1.5rem] tracking-wide">
            Building digital products, brands, and experience.
          </p>
        </motion.div>
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
