import { TestTechList } from "./tech-list/test-tech-list";

export const Content = () => {
  return (
    <div className="grid grid-cols-2 h-screen w-screen">
      <div className="flex justify-center items-center">
        <TestTechList />
      </div>
    </div>
  );
};

export const Component = Content;
