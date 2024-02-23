const code = `
import { ParallaxText } from "pol-ui";

const ParallaxTextComponent = () => {
  const text = 'Parallax text in Pol-ui'
  return (
    <section>
      <ParallaxText velocity={1}>{text}</ParallaxText>
      <ParallaxText velocity={2}>{text}</ParallaxText>
      <ParallaxText velocity={3}>{text}</ParallaxText>
      <ParallaxText velocity={5}>{text}</ParallaxText>
      <ParallaxText velocity={6}>{text}</ParallaxText>
    </section>
  )
};
export default ParallaxTextComponent;
`;
export default code;
