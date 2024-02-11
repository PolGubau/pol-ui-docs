const code = `
import { Button, Colors, theme} from "pol-ui";

import React from "react";
const ButtonComponent = () => {
  return (
     <section className="flex gap-12 flex-wrap justify-center items-center">
    <div className="flex gap-3 flex-wrap p-4 rounded-xl">
      {Object.keys(theme.button.color).map(color => (
        <Button key={color} {...args} color={color as Colors}>
          {color}
        </Button>
      ))}
    </div>
    <div className="dark">
      <div className="flex gap-3 flex-wrap bg-secondary-900 p-4 rounded-xl">
        {Object.keys(theme.button.color).map(color => (
          <Button key={color} {...args} color={color as Colors}>
            {color}
          </Button>
        ))}
      </div>
    </div>
  </section>
  )
};
export default ButtonComponent;
`;
export default code;
