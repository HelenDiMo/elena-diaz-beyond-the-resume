"use client";

import { useState } from "react";
import { timeline } from "@/data/timeline";
import { motion, AnimatePresence } from "framer-motion";

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mt-16">
      <div className="relative">
        {/* Línea vertical */}
        <div className="absolute left-3 top-0 h-full w-px bg-teal" />

        <div className="space-y-10">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year + item.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-10"
            >
              {/* Punto interactivo */}
              <motion.button
                type="button"
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  scale: activeIndex === index ? 1.2 : 1,
                }}
                transition={{ duration: 0.2 }}
                className={`absolute left-0 top-1 h-6 w-6 rounded-full border-2 ${
                  activeIndex === index
                    ? "border-oceanic bg-oceanic"
                    : "border-teal bg-graphite"
                }`}
                aria-label={`Ver ${item.company}`}
              />

              <div>
                {/* Fecha */}
                <p className="text-sm font-medium text-oceanic">
                  {item.year}
                </p>

                {/* Empresa */}
                <h3 className="mt-1 text-xl font-semibold text-white">
                  {item.company}
                </h3>

                {/* Ubicación */}
                <p className="mt-1 text-sm text-teal">{item.location}</p>

                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 max-w-2xl overflow-hidden"
                    >
                      {/* Puestos */}
                      <div className="space-y-2">
                        {item.roles.map((role) => (
                          <div key={role.period + role.title}>
                            {item.roles.length > 1 && (
                              <p className="text-sm text-teal">
                                {role.period}
                              </p>
                            )}
                            <p className="font-medium text-oceanic">
                              {role.title}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Descripción */}
                      <p className="mt-4 leading-relaxed text-white">
                        {item.description}
                      </p>
                    </motion.div>
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