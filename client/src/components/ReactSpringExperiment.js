import { animated, useSpring } from "@react-spring/web";

export default function ReactSpringExperiment() {
  // useSpring doesn't ACTUALLY animate anything though
  // JUST returns 'SpringValues' that we will PASS into the animated component
  // const springs = useSpring({
  //   from: {x: 0},
  //   to: {x: 100},
  // })

  // It's rare that we only want animation on mount, thus we can pass another thing to useSpring, a function
  // This returns to us an array: the first, our springsvalue && 2nd our api to control the spring
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));

  // we need the userInteraction event, let's just use an onClick
  const handleClick = () => {
    // we can use api.start method to start animation with the config we pass it
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 100,
      },
    });
  };

  // We just return an animated div, need a style so it's visible
  return (
    <animated.div
      onClick={handleClick}
      className={"h-24 w-24 bg-pink-300 rounded-xl hover:bg-blue-300"}
      style={{
        ...springs, //right here is where all those SpringValues go in
      }}
    />
  );
}
