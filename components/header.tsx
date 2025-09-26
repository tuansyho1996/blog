'use client'
import * as motion from "motion/react-client"
import Link from "next/link";
import { NavigationMenuDemo } from "./test"
import Image from "next/image";
import { MenuHeader } from "./header/header.menu";
const box = {
    width: 100,
    height: 100,
    backgroundImage: "url(https://d2jfx0w9sp915a.cloudfront.net/541f795d750542d7e5c9e6fe3e68344a)",
    backgroundSize: "cover", // để ảnh vừa khít
    backgroundPosition: "center",
    borderRadius: 5,
}
const ArrayImg = [
    "https://d2jfx0w9sp915a.cloudfront.net/c1f0aaf9514e43e6735f3400437fa5cc",
    "https://d2jfx0w9sp915a.cloudfront.net/4e3ba33aaf9ac735ef1827ebeaa396d0",
    "https://d2jfx0w9sp915a.cloudfront.net/f187e82833a48e7b8755a8f437e9b5a6",
    "https://d2jfx0w9sp915a.cloudfront.net/4e1df3cec158715438f9e694fc639f63",
    "https://d2jfx0w9sp915a.cloudfront.net/bb52dbbc26d0d1ba0c2520823a12b0c6",
    "https://d2jfx0w9sp915a.cloudfront.net/fdc89538b99b57e5aa87096df447d3ce"
]

const Header = () => {
    return (
        <header className="w-full relative">
            {/* grid chia 6 ảnh */}
            <div className="grid grid-cols-3 md:grid-cols-6">
                {ArrayImg.map((img, index) => (
                    <div
                        key={index}
                        className="relative w-full h-96 md:h-[500px]"
                    >
                        <Image
                            src={img}
                            alt={`Image ${index + 1}`}
                            fill
                            className="object-cover border border-white"
                        />
                    </div>
                ))}
            </div>
            <div className="absolute top-[10px] flex items-center justify-center w-full gap-4">
                <motion.div
                    style={box}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                />
                <MenuHeader />
            </div>

        </header>
    );
}
export default Header;