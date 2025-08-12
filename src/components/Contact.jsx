import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'


const Contact = () => {
  return (
    <main className="w-full flex-center bg-black text-lavender-100/60 py-16 px-8 ">
      <div className="container w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-lavender-100 mb-2">
            Stay connected<span className="align-super">®</span>
          </h1>
          <h2 className="text-2xl md:text-5xl font-medium text-lavender-100 mb-6">
            dasunadithya123@gmail.com
          </h2>
          <p className="text-lg text-lavender-100/80 mb-2">
            Ready to bring your ideas to life with modern web development.
          </p>
          <p className="text-lg text-lavender-100/80 mb-8">
            Let&rsquo;s create something amazing together!
          </p>
          <Link href="mailto:dasunadithya123@gmail.com">
            <button className="flex items-center gap-4 px-2 pr-8 py-2 rounded-full bg-lavender-100 text-black text-lg font-medium shadow hover:bg-lavender-200 transition cursor-pointer">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-lavender-100">
                <FaArrowRight />
              </span>
              <span className="text-lg font-medium">Start Project</span>
            </button>
          </Link>
        </div>
        <div className="w-full flex justify-center lg:justify-end">
          <aside className="bg-charcoal text-white p-6 rounded-lg w-full max-w-lg font-mono">
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <p className="text-sm text-gray-400">terminal</p>
            </div>
            <div className="space-y-1">
              <p className="text-lavender-400">$ npm run dev</p>
              <p className="text-lavender-100">Portfolio is running on https://rvn14.vercel.app/</p>
              <p className="text-lavender-100">Ready for collaboration ✨</p>
              <p className="text-lavender-400">$ git commit -m &rdquo;another amazing project&rdquo;</p>
              <p className="text-lavender-100">[main 2a3b4c5] another amazing project</p>
              <p className="text-lavender-400">$</p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}

export default Contact