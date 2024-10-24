import Link from "next/link";
import { Button } from "../ui/button";

function LoggedOutButtons() {
	return (
		<Link href="/login" className="block">
			<Button
				size="lg"
				className="text-lg bg-gradient-to-r from-red-600 to-purple-600 text-white hover:bg-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-600 hover:to-purple-600 border-2 border-transparent hover:border-red-600 transition-all duration-300"
			>
				Get Started
			</Button>
		</Link>
	);
}

export default LoggedOutButtons;
