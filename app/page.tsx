'use client'
import * as motion from "motion/react-client"
// import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#ff0088",
  borderRadius: 5,
}
// const testimonials = [
//   {
//     quote:
//       "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
//     name: "Sarah Chen",
//     designation: "Product Manager at TechFlow",
//     src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     quote:
//       "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
//     name: "Michael Rodriguez",
//     designation: "CTO at InnovateSphere",
//     src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     quote:
//       "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
//     name: "Emily Watson",
//     designation: "Operations Director at CloudScale",
//     src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     quote:
//       "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
//     name: "James Kim",
//     designation: "Engineering Lead at DataPro",
//     src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     quote:
//       "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
//     name: "Lisa Thompson",
//     designation: "VP of Technology at FutureNet",
//     src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Next.js App</h1>
        <p className="text-lg mb-8">
          This is a simple landing page built with Next.js and Tailwind CSS.
        </p>
        <motion.div
          style={box}
          animate={{ rotate: 360 }}
          transition={{ duration: 1 }}
        />
      </div>
      {/* <AnimatedTestimonials testimonials={testimonials} /> */}

    </div>
  );
}
