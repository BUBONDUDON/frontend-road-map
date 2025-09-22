interface Tech {
  name: string;
  icon: string;
  description: string;
  sections: {
    title: string;
    text: string;
  }[];
}
export const TECH_LIST: Tech[] = [
  {
    name: "HTML",
    icon: "../../public/html.svg",
    description: "The language for building website structure.",
    sections: [
      {
        title: "Our Slogan",
        text: "From zero to your first website!",
      },
      {
        title: "What you will learn",
        text: "Tags, headings, paragraphs, lists, links, images, tables.",
      },
      {
        title: "Trial Lesson",
        text: "Create your very first web page together with us.",
      },
    ],
  },
  {
    name: "CSS",
    icon: "../../public/css.svg",
    description: "The language of styling and design.",
    sections: [
      {
        title: "Our Slogan",
        text: "Make it beautiful, make it yours.",
      },
      {
        title: "What you will learn",
        text: "Colors, fonts, spacing, sizing, flexbox, grid, animations.",
      },
      {
        title: "Trial Lesson",
        text: "Style your first page and change how it looks.",
      },
    ],
  },
  {
    name: "JavaScript",
    icon: "../../public/js.svg",
    description: "The language of interactivity and logic.",
    sections: [
      {
        title: "Our Slogan",
        text: "Turn ideas into action!",
      },
      {
        title: "What you will learn",
        text: "Variables, conditions, loops, functions, DOM basics.",
      },
      {
        title: "Trial Lesson",
        text: "Make your page respond to clicks and actions.",
      },
    ],
  },
  {
    name: "Figma",
    icon: "../../public/figma.svg",
    description: "A tool for design and prototyping.",
    sections: [
      {
        title: "Our Slogan",
        text: "Design before you code.",
      },
      {
        title: "What you will learn",
        text: "Layouts, layers, colors, typography, export basics.",
      },
      {
        title: "Trial Lesson",
        text: "Design your first website layout.",
      },
    ],
  },
  {
    name: "GitHub",
    icon: "../../public/github.svg",
    description: "A platform for sharing and collaborating on code.",
    sections: [
      {
        title: "Our Slogan",
        text: "Code, share, and grow together.",
      },
      {
        title: "What you will learn",
        text: "Git basics, commits, branches, pull requests, teamwork.",
      },
      {
        title: "Trial Lesson",
        text: "Push your first project to GitHub.",
      },
    ],
  },
  {
    name: "React",
    icon: "../../public/react.svg",
    description: "A library for building user interfaces.",
    sections: [
      {
        title: "Our Slogan",
        text: "Build apps, not just pages.",
      },
      {
        title: "What you will learn",
        text: "Components, props, state, events, hooks.",
      },
      {
        title: "Trial Lesson",
        text: "Create your first interactive app component.",
      },
    ],
  },
  {
    name: "Tailwind",
    icon: "../../public/tailwind.svg",
    description: "A utility-first CSS framework for fast styling.",
    sections: [
      {
        title: "Our Slogan",
        text: "Style faster, code smarter.",
      },
      {
        title: "What you will learn",
        text: "Utility classes, grids, responsive design, customization.",
      },
      {
        title: "Trial Lesson",
        text: "Build and style a page using only Tailwind classes.",
      },
    ],
  },
];
