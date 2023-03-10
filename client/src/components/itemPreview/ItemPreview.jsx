import React from "react";
import "../../app.css";

const ItemPreview = ({ item, handleNavigate }) => {
  const onClickNavigationHandler = () => {
    handleNavigate(`/item/${item.id}`);
  };
  return (
    <div
      onClick={onClickNavigationHandler}
      className="box-content h-[600px] xxs:h-[600px] sm:h-[600px] md:h-[300px]  p-2 rounded-none sm:rounded-xl cardGlass shadow-lg flex flex-col xxs:flex-col xs:flex-col sm:flex-col md:flex-row flex-grow gap-2"
    >
      <div className="w-[200px] h-[300px] rounded-xl bg-gray-700 mx-auto">
        <img
          src={item.src}
          alt={item.alt}
          className="w-[200px] h-full box-border"
        />
      </div>

      <div className="grow h-[300px] flex gap-2 box-border mx-auto">
        <div className="h-full flex flex-col gap-2 xs:gap-4 sm:gap-3 md:gap-6 overflow-clip">
          <HeaderDisplay value={item.name} />
          <div className="grid grid-cols-2 sm:grid-cols-1 mdlg:grid-cols-2 gap-2 sm:gap-1 md:gap-3 justify-start w-[100%] sm:w-[70%] md:w-[100%]">
            <TextDisplay value={item.stock} title={"Stock"} />
            <TextDisplay
              value={item.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
              title={"Price"}
            />
          </div>

          <TextAreaDisplay title="Description Text" value={item.description} />
        </div>
      </div>
    </div>
  );
};

export default ItemPreview;

const HeaderDisplay = ({ value }) => {
  return (
    <div className="h-[24px] text-[24px] leading-[24px] rounded-lg grid text-left text-gray-800 items-end font-extrabold tracking-wider capitalize">
      {value}
    </div>
  );
};

const TextDisplay = ({ value, title }) => {
  return (
    <div className="h-[24px] xs:h-[32px] sm:h-[24px] md:h-[32px] flex flex-grow rounded-lg font-bold underline underline-offset-4 decoration-2 decoration-solid">
      <div className="h-full grid items-end justify-start text-left rounded-tl-lg rounded-bl-lg">
        <label className="text-xs sm:text-sm select-none text-gray-800 font-bold capitalize">
          {title}: {value}
        </label>
      </div>
    </div>
  );
};

const TextAreaDisplay = ({ value, title }) => {
  return (
    <div className="h-full text-gray-800 flex flex-col gap-2 w-[250px] xxs:w-[275px] xs:w-[420px] sm:w-[280px] md:w-[150px] mdlg:w-[200px] lg:w-[280px] xl:w-[400px] 2xl:w-[450px]">
      <div className="h-[32px] mr-auto flex justify-start items-end">
        <p className="select-none text-xs sm:text-sm md:text-base font-bold underline underline-offset-4 decoration-2 decoration-solid capitalize">
          {title}
        </p>
      </div>

      <div className="">
        <p className="line-clamp-5 md:line-clamp-4 mdlg:line-clamp-5">
          {value}
        </p>
      </div>
    </div>
  );
};
