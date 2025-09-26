import { TechList } from "./techList";

export const Content = () => {
  return (
    <div className="grid grid-cols-2 h-screen w-screen">
      <div className="items-center"></div>
      <div className="flex justify-center items-center">
        <TechList />
      </div>
    </div>
  );
};

export const Component = Content;
