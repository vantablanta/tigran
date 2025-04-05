"use client";

import heroGlass1 from "@/assets/hero-bg-1.png";
import heroGlass2 from "@/assets/hero-bg-2.png";
import hero from "@/assets/hero.png";
import mobileHero1 from "@/assets/mobile-hero-bg-1.png";
import mobileHero2 from "@/assets/mobile-hero-bg-2.png";
import Image from "next/image";
import { useState } from "react";
import { Search } from "./ui/search";

export function Hero() {
	// biome-ignore lint/correctness/noEmptyPattern: <explanation>
	const [] = useState(false);

	return (
		<section>
			<div className="relative flex justify-center">
				<Image
					src={hero}
					alt="hero"
					className="w-full md:h-auto rounded-xl md:rounded-none h-80 object-cover"
				/>
				<div className="flex justify-between">
					<div className="w-fit p-8 absolute md:block hidden top-0 left-0">
						<div className="mt-10">
							<Image
								src={heroGlass1}
								alt="hero-glass"
								className="relative object-contain 2xl:w-[650px] xxl:w-[400px] w-[300px]"
							/>
							<div className="w-full 2xl:text-5xl xxl:text-3xl text-xl uppercase font-extrabold text-wrap absolute top-25 2xl:top-32 left-10">
								<p>
									FIND THE TALENT{" "}
									<span className="text-brand-quaternary">SIGNUP</span>
								</p>
								<p>
									& GET THE <span className="text-brand-quaternary">JOB</span>{" "}
									DONE
								</p>
							</div>
						</div>
					</div>

					<div className="w-fit p-8 absolute md:block hidden top-20 right-0">
						<div className="relative">
							<Image
								src={heroGlass2}
								alt="hero-glass"
								className="xxl:w-[400px] 2xl:w-[600px] w-[280px] relative object-contain "
							/>
							<div className="w-fit right-8  2xl:text-5xl xxl:text-3xl text-xl uppercase font-extrabold text-wrap absolute top-10 2xl">
								<p>
									WE'LL <span className=" text-brand-quaternary">HANDLE </span>
									THAT
								</p>
							</div>
						</div>
						<div className="absolute 2xl:bottom-2 md:bottom-1  top-20 2xl:right-20 right-8 flex gap-3 !justify-items-end !justify-end !items-end">
							<button
								type="button"
								className="bg-brand-quaternary  text-brand-tertiary  rounded-full left-10 px-4 py-2 2xl:py-4 mt-10"
							>
								Sign Up for Contract
							</button>
							<div className="bg-white relative -top-1  text-black flex w-10 h-10 justify-center items-center rounded-full">
								<svg
									width="18"
									height="19"
									viewBox="0 0 18 19"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>Play</title>
									<path
										d="M14.3294 9.44473C14.3328 9.70328 14.279 9.95939 14.1719 10.1947C14.0594 10.4437 13.8869 10.6597 13.6694 10.8247L6.4319 16.4572C6.17711 16.6515 5.87326 16.771 5.5544 16.8022H5.3819C5.12119 16.8023 4.86416 16.7406 4.6319 16.6222C4.35006 16.4838 4.11154 16.2708 3.94229 16.0064C3.77303 15.7419 3.67951 15.4361 3.6719 15.1222V4.62223C3.67034 4.31229 3.75612 4.00818 3.9194 3.74473C4.07741 3.48131 4.30374 3.26554 4.57442 3.12029C4.8451 2.97505 5.15003 2.90575 5.4569 2.91973C5.7659 2.93473 6.0659 3.03073 6.3269 3.19723L13.5719 8.02723C13.7924 8.18023 13.9769 8.37973 14.1119 8.61223C14.2544 8.86723 14.3294 9.15298 14.3294 9.44473Z"
										fill="#0C0C0C"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>

				<Search
					position="absolute bottom-2 2xl:bottom-14 "
					placeholder="Find a job, talent or service"
					showSearchIcon
					showIndicator
					showCTA
					showTalent
					classes="md:w-1/2 w-full "
				/>
			</div>

			<div className="md:hidden my-4 flex flex-col gap-6">
				<div className="relative">
					<Image
						src={mobileHero1}
						alt="hero-glass"
						className="!w-full h-[107px] relative"
					/>
					<p className="absolute uppercase text-xl font-extrabold top-4 left-4">
						Find the talent{" "}
						<span className="text-brand-quaternary">SIGNUP</span> & get The{" "}
						<span className="text-brand-quaternary">JOB</span> done{" "}
					</p>
				</div>

				<div className="relative">
					<div className="relative">
						<Image
							src={mobileHero2}
							alt="hero-glass"
							className="!w-full h-[107px] relative"
						/>
						<p className="absolute uppercase text-xl font-extrabold top-4 left-16">
							WE'LL <span className=" text-brand-quaternary">HANDLE </span>
							THAT
						</p>
					</div>

					<div className="absolute top-12 right-6 flex gap-3 !justify-items-end !justify-end !items-end">
						<button
							type="button"
							className="bg-brand-quaternary text-sm  text-brand-tertiary  rounded-full left-10 px-4 py-2 mt-10"
						>
							Sign Up for Contract
						</button>
						<div className="bg-[#E0E0E0] relative top-1  text-black flex w-10 h-10 justify-center items-center rounded-full">
							<svg
								width="18"
								height="19"
								viewBox="0 0 18 19"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Play</title>
								<path
									d="M14.3294 9.44473C14.3328 9.70328 14.279 9.95939 14.1719 10.1947C14.0594 10.4437 13.8869 10.6597 13.6694 10.8247L6.4319 16.4572C6.17711 16.6515 5.87326 16.771 5.5544 16.8022H5.3819C5.12119 16.8023 4.86416 16.7406 4.6319 16.6222C4.35006 16.4838 4.11154 16.2708 3.94229 16.0064C3.77303 15.7419 3.67951 15.4361 3.6719 15.1222V4.62223C3.67034 4.31229 3.75612 4.00818 3.9194 3.74473C4.07741 3.48131 4.30374 3.26554 4.57442 3.12029C4.8451 2.97505 5.15003 2.90575 5.4569 2.91973C5.7659 2.93473 6.0659 3.03073 6.3269 3.19723L13.5719 8.02723C13.7924 8.18023 13.9769 8.37973 14.1119 8.61223C14.2544 8.86723 14.3294 9.15298 14.3294 9.44473Z"
									fill="#0C0C0C"
								/>
							</svg>
						</div>
					</div>
				</div>

				<Search
					placeholder="Find a job, talent or service"
					showOnMobile
					showSearchIcon
				/>
			</div>
		</section>
	);
}
