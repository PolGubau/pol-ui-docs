const code = `
import { IconButton, theme, MainSizes } from "pol-ui";
import { TbTrash } from "react-icons/tb";
import React from "react";

const IconButtonComponent = () => {
  return (
    <div className="flex gap-3 flex-wrap items-start text-center">
    {Object.keys(theme.button.size).map(size => (
      <div className="flex flex-col gap-4" key={size}>
        <span>{size}</span>
        <IconButton {...args} size={size as MainSizes}>
          <TbTrash />
        </IconButton>
      </div>
    ))}
  </div>
  );
};
export default IconButtonComponent;
`;
export default code;
