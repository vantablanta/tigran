import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "500",  "400", "700", "800"],
	display: "swap",
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "Jobwhee",
	description: "Find the talent signup and get the job done",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={poppins.className}>
			<body className={`${poppins.className} antialiased`}>{children}</body>
		</html>
	);
}
