const code = `
import { Loader,ColorsEnum } from "pol-ui";
const LoaderComponent = () => {
  return   <div className="flex flex-row gap-3">
    {Object.keys(ColorsEnum).map(color => (
      <Loader
        color={color as keyof typeof ColorsEnum}
        key={color}
      />
    ))}
  </div>
};
export default LoaderComponent;
`;
export default code;
