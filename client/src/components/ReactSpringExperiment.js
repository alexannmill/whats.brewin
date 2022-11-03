import {animated, useSpring} from "react-spring"

export default function ReactSpringExperiment() {
  // useSpring doesn't ACTUALLY animate anything though 
  // JUST returns 'SpringValues' that we will PASS into the animated component
  const springs = useSpring({
    from: {x: 0},
    to: {x: 100},
  })

  // We just return an animated div, need a style so it's visible
  return (
    <animated.div
      style={{
        width: 80,
        height: 80,
        background: '#ff6d6d',
        borderRadius: 8,
        ...springs, //right here is where all those SpringValues go in
      }}
    />
  )
}