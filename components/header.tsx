'use client'
import * as motion from "motion/react-client"
import Link from "next/link";
import { NavigationMenuDemo } from "./test"
const box = {
    width: 100,
    height: 100,
    backgroundImage: "url(https://d2jfx0w9sp915a.cloudfront.net/541f795d750542d7e5c9e6fe3e68344a)",
    backgroundSize: "cover", // để ảnh vừa khít
    backgroundPosition: "center",
    borderRadius: 5,
}

const Header = () => {
    return (
        <header className="w-full bg-gray-800 text-white p-4">
            <motion.div
                style={box}
                animate={{ rotate: 360 }}
                transition={{ duration: 1 }}
            />
            <h1 className="text-2xl font-bold"></h1>
            <Link href="/" className="mr-4 hover:underline">Home</Link>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <NavigationMenuDemo />
        </header>
    );
}
export default Header;