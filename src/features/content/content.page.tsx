import { TechList } from "../header/techList";
import { WebSitesCarousel } from "./web-carousel";

export const Content = () => {
  return (
    <div className=" flex flex-row h-screen w-screen">
      <div
        className="m-4 flex flex-row w-full"
        style={{
          justifyContent: "space-between",
        }}
      >
        <div>
          <p className="m-4 ml-20 text-5xl font-bold max-w-2xl">
            We'll make you a portfolio
          </p>
          <TechList />
        </div>
        <WebSitesCarousel />
      </div>
    </div>
  );
};

export const Component = Content;
