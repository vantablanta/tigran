"use client";

import { SearchIcon, UserIcon, Users } from "lucide-react";
import { useRef, useState } from "react";
import { TalentSelect } from "../talent-select";

export function Search({
	position,
	placeholder,
	showCTA,
	showIndicator,
	showOnMobile,
	showSearchIcon,
	fullWidth,
	showUserIcon,
	showTalent,
	autoMargin = true,
	classes,
}: {
	position?: string;
	placeholder: string;
	showCTA?: boolean;
	showIndicator?: boolean;
	showOnMobile?: boolean;
	showSearchIcon?: boolean;
	fullWidth?: boolean;
	showUserIcon?: boolean;
	showTalent?: boolean;
	autoMargin?: boolean;
	width?: string;
	classes?: string;
}) {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	return (
		<>
			{showOnMobile ? (
				<div
					className={`${position} container 2xl:my-8 xxl:my-6 md:my-4  ${autoMargin && "mx-auto px-4"} ${classes}`}
				>
					{/* Search bar with dropdown */}

					<div
						className={`relative  ${fullWidth && "!w-full"} ${autoMargin && " mx-auto px-4"}`}
					>
						<div
							className={`${fullWidth && "w-full"} flex items-center px-2 rounded-full overflow-hidden border border-gray-200 bg-white shadow-md`}
						>
							{/* Search icon */}
							{showSearchIcon && (
								<div
									className="md:w-12 md:h-12 w-8 h-8 rounded-full p-1 flex justify-center items-center"
									style={{
										background: "linear-gradient(135deg, #a5ec5e, #BDC502)",
									}}
								>
									{/* Inner white background */}
									<div className="w-full h-full rounded-full bg-black flex items-center justify-center ">
										<SearchIcon className="md:h-6 md:w-6 h-3 w-6 text-white" />
									</div>
								</div>
							)}

							{showUserIcon && (
								<div
									className="md:w-12 md:h-12 w-8 h-8 rounded-full p-1"
									style={{
										background: "linear-gradient(135deg, #a5ec5e, #BDC502)",
									}}
								>
									{/* Inner white background */}
									<div className="w-full h-full rounded-full bg-black flex items-center justify-center">
										<UserIcon className="md:h-6 md:w-6 h-3 w-6 text-white" />
									</div>
								</div>
							)}

							{/* Input field */}
							<input
								type="text"
								placeholder={placeholder}
								className="flex-grow py-4 px-2 placeholder-[#737373] text-xs md:text-base focus:outline-none"
							/>

							{/* Dropdown button */}
							{showTalent && (
								// <div
								// 	className={`relative ${!isOpen && "border border-l-[#737373]"}`}
								// 	ref={dropdownRef}
								// >
								// 	<button
								// 		type="button"
								// 		onClick={() => setIsOpen(!isOpen)}
								// 		className="flex items-center justify-between gap-2 hover:bg-[#F0F1F4] py-2 px-4 hover:border hover:border-[#CDCDCD] rounded-full h-full text-[#474747] text-sm"
								// 	>
								// 		<span className="font-medium">Talent</span>
								// 		{isOpen ? (
								// 			<svg
								// 				width="18"
								// 				height="9"
								// 				viewBox="0 0 18 9"
								// 				fill="none"
								// 				xmlns="http://www.w3.org/2000/svg"
								// 			>
								// 				<title>ChevronUp</title>
								// 				<g clipPath="url(#clip0_2_499)">
								// 					<path
								// 						fillRule="evenodd"
								// 						clipRule="evenodd"
								// 						d="M8.47019 1.38034L4.22744 5.62309L5.28794 6.68359L9.00044 2.97109L12.7129 6.68359L13.7734 5.62309L9.53069 1.38034C9.39004 1.23974 9.19931 1.16075 9.00044 1.16075C8.80156 1.16075 8.61083 1.23974 8.47019 1.38034Z"
								// 						fill="#474747"
								// 					/>
								// 				</g>
								// 				<defs>
								// 					<clipPath id="clip0_2_499">
								// 						<rect
								// 							width="9"
								// 							height="18"
								// 							fill="white"
								// 							transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 18 9)"
								// 						/>
								// 					</clipPath>
								// 				</defs>
								// 			</svg>
								// 		) : (
								// 			<svg
								// 				width="16"
								// 				height="9"
								// 				viewBox="0 0 16 9"
								// 				fill="none"
								// 				xmlns="http://www.w3.org/2000/svg"
								// 			>
								// 				<title>ChevronDown</title>
								// 				<g clipPath="url(#clip0_2_3964)">
								// 					<path
								// 						fillRule="evenodd"
								// 						clipRule="evenodd"
								// 						d="M7.79376 7.18109L4.28489 3.64547L5.16195 2.76172L8.23229 5.85547L11.3026 2.76172L12.1797 3.64547L8.67082 7.18109C8.5545 7.29826 8.39676 7.36409 8.23229 7.36409C8.06781 7.36409 7.91007 7.29826 7.79376 7.18109Z"
								// 						fill="#474747"
								// 					/>
								// 				</g>
								// 				<defs>
								// 					<clipPath id="clip0_2_3964">
								// 						<rect
								// 							width="7.5"
								// 							height="14.8865"
								// 							fill="white"
								// 							transform="translate(15.6719 0.835938) rotate(90)"
								// 						/>
								// 					</clipPath>
								// 				</defs>
								// 			</svg>
								// 		)}
								// 	</button>

								// 	{isOpen && (
								// 		<div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg z-10 overflow-hidden">
								// 			<div className="p-4 border-b hover:bg-gray-50 cursor-pointer">
								// 				<div className="flex items-start gap-3">
								// 					<div className="mt-1">
								// 						<Users className="h-6 w-6 text-gray-700" />
								// 					</div>
								// 					<div>
								// 						<h3 className="font-medium text-lg">Talent</h3>
								// 						<p className="text-gray-600">
								// 							Hire professionals effortlessly.
								// 						</p>
								// 					</div>
								// 				</div>
								// 			</div>
								// 			<div className="p-4 hover:bg-gray-50 cursor-pointer">
								// 				<div className="flex items-start gap-3">
								// 					<div className="mt-1">
								// 						<svg
								// 							className="h-6 w-6 text-gray-700"
								// 							viewBox="0 0 24 24"
								// 							fill="none"
								// 							xmlns="http://www.w3.org/2000/svg"
								// 						>
								// 							<title>icon</title>
								// 							<path
								// 								d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
								// 								stroke="currentColor"
								// 								strokeWidth="2"
								// 								strokeLinecap="round"
								// 								strokeLinejoin="round"
								// 							/>
								// 							<path
								// 								d="M16 21V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V21"
								// 								stroke="currentColor"
								// 								strokeWidth="2"
								// 								strokeLinecap="round"
								// 								strokeLinejoin="round"
								// 							/>
								// 						</svg>
								// 					</div>
								// 					<div>
								// 						<h3 className="font-medium text-lg">Client</h3>
								// 						<p className="text-gray-600">
								// 							Apply to jobs posted by clients
								// 						</p>
								// 					</div>
								// 				</div>
								// 			</div>
								// 		</div>
								// 	)}
								// </div>
								<TalentSelect usePrimaryColor={true} />
							)}
						</div>
					</div>
				</div>
			) : (
				<div
					className={` ${position} container  ${autoMargin && "mx-auto px-4"} ${classes}`}
				>
					{/* Search bar with dropdown */}
					<div
						className={`relative  ${fullWidth && "!w-full"} ${autoMargin && " mx-auto px-4"}`}
					>
						<div
							className={`${fullWidth && "w-full"} flex items-center px-2 rounded-full overflow-hidden border border-gray-200 bg-white shadow-md`}
						>
							{/* Search icon */}
							{showSearchIcon && (
								<div
									className="md:w-12 md:h-12 w-8 h-8 rounded-full p-1 flex justify-center items-center"
									style={{
										background: "linear-gradient(135deg, #a5ec5e, #BDC502)",
									}}
								>
									{/* Inner white background */}
									<div className="w-full h-full rounded-full bg-black flex items-center justify-center ">
										<SearchIcon className="md:h-6 md:w-6 h-3 w-6 text-white" />
									</div>
								</div>
							)}

							{showUserIcon && (
								<div
									className="md:w-12 md:h-12 w-8 h-8 rounded-full p-1"
									style={{
										background: "linear-gradient(135deg, #a5ec5e, #BDC502)",
									}}
								>
									{/* Inner white background */}
									<div className="w-full h-full rounded-full bg-black flex items-center justify-center">
										<UserIcon className="md:h-6 md:w-6 h-3 w-6 text-white" />
									</div>
								</div>
							)}

							{/* Input field */}
							<input
								type="text"
								placeholder={placeholder}
								className="flex-grow py-4 px-2 placeholder-[#737373] text-xs md:text-base focus:outline-none"
							/>

							{/* Dropdown button */}
							{showTalent ? (
								<TalentSelect usePrimaryColor={true} />
							) : (
								<div className="h-2" ref={dropdownRef} />
							)}
						</div>
					</div>

					{showIndicator && (
						<div className="flex justify-center  gap-2 md:my-5 my-2">
							<div className="md:h-3 md:w-3 h-1.5 w-1.5 rounded-full bg-[#D0FF00]" />
							<div className="md:h-3 md:w-3 h-1.5 w-1.5 rounded-full bg-[#8E9A57]" />
							<div className="md:h-3 md:w-3 h-1.5 w-1.5 rounded-full bg-[#8E9A57]" />
							<div className="md:h-3 md:w-3 h-1.5 w-1.5 rounded-full bg-[#8E9A57]" />
							<div className="md:h-3 md:w-3 h-1.5 w-1.5 rounded-full bg-[#8E9A57]" />
						</div>
					)}

					{showCTA && (
						<div className="flex justify-center">
							<div className="rounded-full bg-white w-fit shadow-2xl">
								<p className="text-brand-primary font-extrabold xxl:text-2xl md:text-lg text-sm text-center md:px-8 md:py-3 px-4 py-2">
									EDUCATION AND TUTORING
								</p>
							</div>
						</div>
					)}
				</div>
			)}
		</>
	);
}
