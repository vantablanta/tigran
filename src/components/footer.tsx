import footerBg from "@/assets/footer-bg.png";
import logo from "@/assets/logo-dark.svg";
import socialIcons from "@/assets/socials.png";
import Image from "next/image";
import { CountrySelect } from "./country-select";
import { Search } from "./ui/search";

export function Footer() {
	return (
		<div className="mt-24">
			<div className="text-center pb-3 2xl:text-2xl xxl:text-lg md:text-base text-wrap text-brand-tertiary">
				<p className="font-medium">Subscribe now</p>
				<p className="font-medium">and be the first to know!</p>
			</div>
			<footer className="my-4 relative  bg-white md:bg-transparent h-[600px] md:h-auto rounded-2xl">
				<Image
					src={footerBg}
					alt="hero-glass"
					className="relative rounded-2xl md:block hidden"
				/>

				<div className="absolute !w-full 2xl:top-20 -top-2 xxl:px-16 px-4 rounded-2xl  bg-white md:bg-transparent">
					<div className="flex 2xl:flex-row flex-col items-center 2xl:gap-6 xxl:gap-4 gap-2">
						<div className="md:w-1/2 w-full hidden md:block">
							<Search
								fullWidth={true}
								placeholder="First Name Last Name"
								showTalent
								autoMargin={false}
								showOnMobile={false}
							/>
						</div>

						<div className="flex relative -top-4 md:top-0 md:w-1/2 w-full gap-1 items-center ">
							<Search
								showUserIcon
								fullWidth={true}
								placeholder="Enter your email"
								autoMargin={false}
								showOnMobile={true}
								showTalent={false}
							/>
							<div className="">
								<button
									type="button"
									className="bg-brand-quaternary md:h-14 text-brand-tertiary border border-white rounded-full px-4 py-2 text-xs md:text-base"
								>
									Subscribe
								</button>
							</div>
						</div>
					</div>

					<div className="flex 2xl:flex-row h-full  flex-col my-4 2xl:my-6 items-center font-medium px-4">
						<div className="w-2/5">
							<Image src={logo} alt="logo" className="my-4 2xl:my-8 xxl:my-6" />
							<div className="flex items-center gap-3 text-brand-primary my-4 2xl:my-8 xxl:my-6">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>email</title>
									<path
										d="M18 7.373V14.5C18 15.163 17.7366 15.7989 17.2678 16.2678C16.7989 16.7366 16.163 17 15.5 17H4.5C3.83696 17 3.20107 16.7366 2.73223 16.2678C2.26339 15.7989 2 15.163 2 14.5V7.373L9.746 11.931C9.82295 11.9764 9.91066 12.0003 10 12.0003C10.0893 12.0003 10.177 11.9764 10.254 11.931L18 7.373ZM15.5 4C16.1151 3.9999 16.7087 4.22661 17.1672 4.63674C17.6257 5.04687 17.9168 5.61164 17.985 6.223L10 10.92L2.015 6.223C2.08316 5.61164 2.37432 5.04687 2.83279 4.63674C3.29127 4.22661 3.88485 3.9999 4.5 4H15.5Z"
										fill="black"
									/>
								</svg>

								<p className="text-sm xxl:text-base 2xl:text-lg ">
									support@Jobwhee.com
								</p>
							</div>

							<div className="my-4 2xl:my-8 xxl:my-6">
								<CountrySelect usePrimaryColor />
							</div>
						</div>
						<div className="md:w-1/5 w-full  text-brand-primary text-center">
							<p className=" my-4 2xl:my-6 xxl:my-8 font-medium text-sm xxl:text-base 2xl:text-lg ">
								About Us
							</p>
							<p className=" my-4 2xl:my-8 xxl:my-6 font-medium text-sm xxl:text-base 2xl:text-lg ">
								FAQ
							</p>
							<p className="my-4 2xl:my-8 xxl:my-6 font-medium text-sm xxl:text-base 2xl:text-lg ">
								Steps of Success
							</p>
						</div>

						<div className="md:w-1/5 w-full text-brand-primary text-center">
							<p className=" my-4 2xl:my-8 xxl:my-6 font-medium text-sm xxl:text-base 2xl:text-lg ">
								Platform
							</p>
							<p className=" my-4 2xl:my-8 xxl:my-6 font-medium text-sm xxl:text-base 2xl:text-lg ">
								Contracts
							</p>
							<p className=" my-4 2xl:my-8 xxl:my-6 font-medium text-sm xxl:text-base 2xl:text-lg ">
								Advantages
							</p>
						</div>
						<div className="md:w-1/5 w-full text-brand-primary text-center">
							<p className=" my-4 2xl:my-8 xxl:my-6 ont-medium text-sm xxl:text-base 2xl:text-lg">
								Services
							</p>
							<p className="my-4 2xl:my-8 xxl:my-6 ont-medium text-sm xxl:text-base 2xl:text-lg">
								Top Talents
							</p>
							<div className="">
								<Image
									src={socialIcons}
									alt="socials"
									className="h-6  my-4 2xl:my-8 xxl:my-6 ont-medium text-sm xxl:text-base 2xl:text-lg object-contain"
								/>
							</div>
						</div>
					</div>

					<div className="border-b border-b-[#DBDBDB] my-4" />

					<div className="flex md:flex-row flex-col justify-between  items-center">
						<div className="flex gap-2 items-center">
							<p className="text-[#757575] font-medium text-sm">
								© 2025 Jobwhee All rights reserved.
							</p>
						</div>

						<div className="flex md:flex-row flex-col gap-6  items-center">
							<p className="text-[#757575] font-medium text-sm">Terms of Use</p>
							<p className="text-[#757575] font-medium text-sm">
								Privacy Policy
							</p>
							<p className="text-[#757575] font-medium text-sm">Cookies</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
