import { GRID_POSITIONS, TECH_LIST } from "./tech.list";
import { Button } from "@/shared/ui/kit/button";

export function TestTechList() {
  return (
    <div className="grid grid-cols-3 grid-rows-5 gap-0">
      {TECH_LIST.map(({ name }, index) => {
        const { col, row } = GRID_POSITIONS[index];
        return (
          <div
            key={name}
            style={{ gridColumn: col, gridRow: row }}
          >
            <Button
              className={`
                w-16 h-16 md:w-40 md:h-40
                transform rotate-45
                transition-all duration-200
                hover:scale-105
                rounded-4xl
                bg-transparent
                shadow-lg
                hover:bg-transparent
                backdrop-blur-xs
                `}
            >
              <div className="transform -rotate-45 text-lg font-bold text-black dark:text-white">
                {name}
              </div>
            </Button>
          </div>
        );
      })}
    </div>
  );
}
