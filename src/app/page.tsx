import { Discover } from "@/components/discover";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { MenuBar } from "@/components/menu";

export default function Home() {
	return (
		<main className="bg-[#F0F1F4]  border-b-[10px] overflow-hidden  border-b-brand-secondary h-full  flex-grow">
			<section className="mx-auto bg-[#F0F1F4] max-w-[1920px] w-full h-full text-white px-6">
				<div className="pt-4">
					<MenuBar />
				</div>
				<Hero />

				<Discover />

				<Footer />
			</section>
		</main>
	);
}
