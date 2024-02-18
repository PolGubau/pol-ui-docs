const code = `
import { IconButton, ColorsEnum, Colors } from "pol-ui";
import { TbTrash } from "react-icons/tb";
import React from "react";

const IconButtonComponent = () => {
  return (
<section className="flex gap-12 flex-wrap">
    <div className="flex gap-3 flex-col bg-secondary-50 p-4 rounded-xl">
      <h3 className="text-black text-xl">Light Mode</h3>
      <div className="flex gap-3 flex-wrap">
        {Object.keys(ColorsEnum).map(v => (
          <div className="flex flex-col gap-4" key={v}>
            <span>{v}</span>
            <IconButton {...args} color={v as Colors}>
              <TbTrash />
            </IconButton>
          </div>
        ))}
      </div>{' '}
    </div>
    <div className="flex gap-3 flex-col bg-secondary-900 p-4 rounded-xl">
      <h3 className="text-white text-xl">Dark Mode</h3>
      <div className="flex gap-3 flex-wrap">
        {Object.keys(ColorsEnum).map(v => (
          <div className="flex flex-col gap-4" key={v}>
            <span className="text-secondary-200">{v}</span>
            <IconButton {...args} color={v as Colors}>
              <TbTrash size={20} />
            </IconButton>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};
export default IconButtonComponent;
`;
export default code;
