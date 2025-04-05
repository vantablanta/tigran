export default function Header({ header }: { header: string }) {
	return (
		<div className="flex justify-center items-center">
			<div className="flex items-center">
				<div className="w-4 h-4 bg-brand-secondary rounded-sm mr-3" />
				<h1 className="md:text-3xl text-xl font-extrabold text-brand-primary uppercase  relative">
					{header}
					<div className="absolute bottom-0 rounded-2xl mt-1 right-0 md:w-[45%] w-[40%] h-[5px] bg-brand-secondary" />
				</h1>
			</div>
		</div>
	);
}
