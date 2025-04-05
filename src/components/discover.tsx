import image1 from "@/assets/discover-1.png";
import image2 from "@/assets/discover-2.png";
import image3 from "@/assets/discover-3.png";
import image4 from "@/assets/discover-4.png";
import image5 from "@/assets/discover-5.png";
import image6 from "@/assets/discover-6.png";
import Image from "next/image";
import Header from "./ui/header";

export function Discover() {
	const items = [
		{
			label: "House Hold Services",
			image: image1,
		},
		{
			label: "Home Maintenance Services",
			image: image2,
		},
		{
			label: "Beauty and Wellness",
			image: image3,
		},
		{
			label: "Education and Tutoring",
			image: image4,
		},
		{
			label: "Event and Entertainment",
			image: image5,
		},
		{
			label: "Marine Services",
			image: image6,
		},
	];

	return (
		<section className="my-12">
			<Header header="Discover" />
			<div className="overflow-x-auto md:overflow-visible ">
				<div className="flex  items-center gap-3 my-8">
					{items.map((item) => (
						<div key={item.label} className="min-h-48 min-w-48 my-4">
							<div className="flex flex-col  items-center gap-4">
								<Image
									src={item.image.src}
									alt={item.label}
									className="object-cover"
									width={400}
									height={400}
								/>
								<div className="flex items-center justify-between bg-white rounded-full w-full py-2 px-4 ">
									<div className="">
										{(() => {
											const words = item.label.trim().split(/\s+/);
											if (words.length === 2) {
												return (
													<p className="md:text-sm text-xs text-brand-primary font-bold ">
														<span className="block">{words[0]}</span>
														<span className="block">{words[1]}</span>
													</p>
												);
												// biome-ignore lint/style/noUselessElse: <explanation>
											} else if (words.length === 3) {
												return (
													<p className="md:text-sm text-xs text-brand-primary font-bold">
														<span className="block">
															{words[0]} {words[1]}
														</span>
														<span className="block">{words[2]}</span>
													</p>
												);
												// biome-ignore lint/style/noUselessElse: <explanation>
											} else {
												return (
													<p className="md:text-sm text-xs text-brand-primary font-bold text-center">
														{item.label}
													</p>
												);
											}
										})()}
									</div>

									<div className="w-1/">
										<div className="bg-brand-secondary flex items-center  justify-center rounded-full h-8 w-8 md:h-12 md:w-12">
											<svg
												width="30"
												height="30"
												viewBox="0 0 30 30"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<title>Arrow</title>
												<path
													d="M19.8021 15.5566L19.8021 9.89971M19.8021 9.89971L14.1247 9.87921M19.8021 9.89971L10.6097 19.0921"
													stroke="#18470D"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
