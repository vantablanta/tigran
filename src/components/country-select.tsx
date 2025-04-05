"use client";
import { useEffect, useRef, useState } from "react";

export function CountrySelect({
	usePrimaryColor,
	showOnMobile,
}: { usePrimaryColor: boolean; showOnMobile?: boolean }) {
	const [showDropdown, setShowDropdown] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const countries = [
		{
			name: "EN",
			fullName: "English",
			icon: (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>English</title>
					<path
						d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
						fill="#F0F0F0"
					/>
					<path
						d="M2.4813 4.69483C1.53869 5.92122 0.827922 7.33473 0.414062 8.87031H6.65678L2.4813 4.69483ZM23.5873 8.87031C23.1734 7.33478 22.4626 5.92127 21.52 4.69488L17.3447 8.87031H23.5873ZM0.414062 15.1312C0.827969 16.6667 1.53873 18.0802 2.4813 19.3066L6.65664 15.1312H0.414062ZM19.3065 2.48134C18.0801 1.53873 16.6667 0.827969 15.1311 0.414062V6.65673L19.3065 2.48134ZM4.69483 21.52C5.92122 22.4626 7.33473 23.1734 8.87027 23.5873V17.3447L4.69483 21.52ZM8.87022 0.414062C7.33469 0.827969 5.92117 1.53873 4.69483 2.4813L8.87022 6.65669V0.414062ZM15.1311 23.5873C16.6667 23.1734 18.0802 22.4626 19.3065 21.52L15.1311 17.3447V23.5873ZM17.3447 15.1312L21.52 19.3066C22.4626 18.0803 23.1734 16.6667 23.5873 15.1312H17.3447Z"
						fill="#0052B4"
					/>
					<path
						d="M23.8984 10.4348H13.5653V0.101578C13.0462 0.0339565 12.5234 2.60722e-05 12 0C11.4694 0 10.9471 0.034875 10.4348 0.101578V10.4347H0.101578C0.0339565 10.9538 2.60722e-05 11.4766 0 12C0 12.5306 0.034875 13.0529 0.101578 13.5652H10.4347V23.8984C11.4738 24.0339 12.5261 24.0339 13.5652 23.8984V13.5653H23.8984C23.966 13.0462 24 12.5234 24 12C24 11.4695 23.9651 10.9471 23.8984 10.4348Z"
						fill="#D80027"
					/>
					<path
						d="M15.1336 15.1297L20.4884 20.4845C20.7346 20.238 20.9699 19.981 21.1938 19.7141L16.6093 15.1296H15.1336V15.1297ZM8.87269 15.1297H8.87259L3.51783 20.4845C3.76429 20.7306 4.02133 20.966 4.28822 21.1898L8.87269 16.6053V15.1297ZM8.87269 8.86883V8.86873L3.51788 3.51388C3.27171 3.76034 3.03636 4.01738 2.8125 4.28427L7.39702 8.86878H8.87269V8.86883ZM15.1336 8.86883L20.4885 3.51392C20.242 3.26776 19.985 3.03242 19.7181 2.80859L15.1336 7.39311V8.86883Z"
						fill="#D80027"
					/>
				</svg>
			),
		},

		{
			fullName: "Greek",
			name: "GR",
			icon: (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Greek</title>
					<mask
						id="mask0_2_1363"
						style={{ maskType: "luminance" }}
						maskUnits="userSpaceOnUse"
						x="0"
						y="0"
						width="24"
						height="24"
					>
						<path
							d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
							fill="white"
						/>
					</mask>
					<g mask="url(#mask0_2_1363)">
						<path
							d="M36.072 21.3761H0V18.7041H36.072V21.3761ZM36.072 16.0319H0V13.36H5.34415V8.01617H0V5.34415H5.34415V0H8.01614V5.34415H13.3599V8.01614H8.01617V13.3599H36.072V16.0319ZM36.072 10.688H13.3599V8.01602H36.072V10.688ZM36.072 5.34391H13.3599V2.6719H36.072V5.34391Z"
							fill="white"
						/>
					</g>
				</svg>
			),
		},
	];

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				dropdownRef.current &&
				buttonRef.current &&
				!dropdownRef.current.contains(event.target as Node) &&
				!buttonRef.current.contains(event.target as Node)
			) {
				setShowDropdown(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="relative">
			<button
				ref={buttonRef}
				id="dropdownHoverButton"
				className={`border-[#94949480] ${showOnMobile ? "flex" : "hidden"} md:flex items-center md:text-base text-xs border ${
					usePrimaryColor ? "text-brand-primary" : "text-white"
				} px-4 py-2 rounded-full`}
				type="button"
				onClick={() => setShowDropdown(!showDropdown)}
			>
				{countries[0].icon}
				<span className="ms-2">{countries[0].name}</span>
				<svg
					className={`w-2.5 h-2.5 ms-3 transition-transform ${showDropdown ? "rotate-180" : ""}`}
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 6"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="m1 1 4 4 4-4"
					/>
				</svg>
			</button>

			{showDropdown && (
				<div
					ref={dropdownRef}
					id="dropdownHover"
					className="z-10 absolute top-full mt-1 bg-black divide-y divide-gray-100 rounded-lg shadow-md w-44"
				>
					<ul
						className="py-2 text-sm text-gray-700"
						aria-labelledby="dropdownHoverButton"
					>
						{countries.map((country) => (
							// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
							<li
								key={country.name}
								className={`flex items-center gap-2 px-4 py-2 hover:black cursor-pointer ${
									// if not the last item, add border-b
									countries[countries.length - 1].name !== country.name
										? "border-b border-gray-700"
										: ""
								}`}
								onClick={() => setShowDropdown(false)}
							>
								{country.icon}
								<span className="text-white">{country.fullName}</span>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
