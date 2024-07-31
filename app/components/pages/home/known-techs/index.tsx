"use client";

import { useState } from "react";
import { SectionTitle } from "@/app/components/section-title";
import { KnowTech } from "./know-tech";
import { KnowTech as IKnowTech } from "@/app/types/projects";
import { motion } from "framer-motion";
import SortableList,{  SortableItem } from "react-easy-sort";

type KnowTechProps = {
  initialTechs: IKnowTech[];
};

export const KnowTechs = ({ initialTechs }: KnowTechProps) => {
  // Estado local para gerenciar os techs
  const [techs, setTechs] = useState(initialTechs);

  const handleSortEnd = (oldIndex: number, newIndex: number) => {
    if (oldIndex === newIndex) return;

    const updatedTechs = [...techs];
    const [movedTech] = updatedTechs.splice(oldIndex, 1);
    updatedTechs.splice(newIndex, 0, movedTech);

    setTechs(updatedTechs);
  };

  return (
    <section className="container py-16">
      <SectionTitle subtitle="conhecimentos" title="Conhecimentos" />
      <SortableList
        className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]"
        draggedItemClassName="dragged-item"
        onSortEnd={handleSortEnd}
      >
        {techs?.map((tech, i) => (
          <SortableItem key={tech.name}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.15, delay: i * 0.1 }}
              className="sortable-item"
            >
              <KnowTech tech={tech} />
            </motion.div>
          </SortableItem>
        ))}
      </SortableList>
    </section>
  );
};
