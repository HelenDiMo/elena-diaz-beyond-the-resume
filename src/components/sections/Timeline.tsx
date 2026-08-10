"use client";

import { useState } from "react";
import { timeline } from "@/data/timeline";
import { motion, AnimatePresence } from "framer-motion";

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mt-16">
      <div className="relative">
        <div className="absolute left-3 top-0 h-full w-px" />

        <div className="space-y-10">
          {/* .map - transformar cada elemento de los datos en un elemento visual */}
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-10"
            >
              {/* key={item.year} - React necesita una key estable cuando renderizamos listas */}

              <motion.button
                type="button"
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  scale: activeIndex === index ? 1.2 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-1 h-6 w-6 rounded-full border"
                aria-label={`Ver ${item.title}`}
              />

              <div>
                <p className="text-sm font-medium">{item.year}</p>

                <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>

                {/* {activeIndex === index && (
                        <p>...</p> )} 
              -> Renderizado condicional - solo muestra ese contenido cuando la condición es verdadera */}

                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 max-w-2xl leading-relaxed"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
