'use client'

import { motion } from 'framer-motion'

export default function GoldenOceanSection() {
  return (
    <section className="py-8 section-golden-bg" id="golden-ocean">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            대한민국 쭈꾸미{' '}
            <span className="text-emphasis-white font-bold">
              맛의 기준
            </span>
            을 세우다
          </h3>
        </motion.div>
      </div>
    </section>
  )
}
