"use client";

import { useState } from "react";
import { timeline } from "@/data/timeline";

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mt-16">
      <div className="relative">
        <div className="absolute left-3 top-0 h-full w-px" />



        <div className="space-y-10">
            {/* .map - transformar cada elemento de los datos en un elemento visual */}
          {timeline.map((item, index) => ( 
            <div key={item.year} className="relative pl-10">
                {/* key={item.year} - React necesita una key estable cuando renderizamos listas */}
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="absolute left-0 top-1 h-6 w-6 rounded-full border"
                aria-label={`Ver ${item.title}`}
              />

              <div>
                <p className="text-sm font-medium">{item.year}</p>

                <h3 className="mt-1 text-xl font-semibold">
                  {item.title}
                </h3>

                {/* Renderizado condicional - solo muestra ese contenido cuando la condición es verdadera */}

                {activeIndex === index && (
                  <p className="mt-3 max-w-2xl leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}