import { useState } from "react";


export default function Accordion() {
    const [hiddenHtml, setHiddenValueHTML] = useState<number[]>([])

    const ITEMS = [
        {
            title: "HTML",
            content: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."
        },
        {
            title: "CSS",
            content: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML."
        },
        {
            title: "JavaScript",
            content: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."
        },

    ]

  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };


  return (
    <div>
      {ITEMS.map((item, index) => {
        const isOpen = openIndexes.includes(index);

        return (
          <div key={item.title}>
            <button
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              {item.title}
              <span aria-hidden className="accordion-icon" />
            </button>

            {isOpen && <div>{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
}