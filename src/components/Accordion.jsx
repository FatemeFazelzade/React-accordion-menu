import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
const data = [
  {
    id: 1,
    title: "Accordion One",
    text: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quae fuga totam recusandae voluptate minus id aliquam possimus minima reprehenderit inventore fugiat voluptatem sequi, maiores accusantium animi doloribus similique tempore.",
  },
  {
    id: 2,
    title: "Accordion Two",
    text: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quae fuga totam recusandae voluptate minus id aliquam possimus minima reprehenderit inventore fugiat voluptatem sequi, maiores accusantium animi doloribus similique tempore.",
  },
  {
    id: 3,
    title: "Accordion Three",
    text: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quae fuga totam recusandae voluptate minus id aliquam possimus minima reprehenderit inventore fugiat voluptatem sequi, maiores accusantium animi doloribus similique tempore.",
  },
];

function Accordion() {
  const [open, setOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          setOpen={setOpen}
          open={open}
        >
          {item.text}
        </AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;

function AccordionItem({ id, title, open, setOpen, children }) {
  const isOpen = id === open;
  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div
        className="accordion-item__header"
        onClick={() => setOpen(isOpen ? null : id)}
        role="button"
        aria-expanded={isOpen}
        tabIndex={0}
      >
        <div>{title}</div>
        <ChevronDownIcon className="accordion-item__chevron" />
      </div>
      <div className="accordion-item__content">{children}</div>
    </div>
  );
}
