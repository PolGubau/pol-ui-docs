const code = `
import { ParallaxText } from "pol-ui";

const ParallaxTextComponent = () => {
  const text = 'Parallax text in Pol-ui'

  return (
    <section>
      <ParallaxText velocity={-5} className="">
        {text}
      </ParallaxText>
      <ParallaxText velocity={1}>{text}</ParallaxText>
      <ParallaxText>{text}</ParallaxText>
    </section>
  );
};
export default ParallaxTextComponent;
`;
export default code;
