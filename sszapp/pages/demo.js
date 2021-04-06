import { Animated, Basic, bounce, Combined } from '../shared/styles'

const Demo = () => (
  <div>
    <Basic>Cool Styles</Basic>
    <Combined>
      With <code>:hover</code>.
    </Combined>
    <Animated animation={bounce}>Let's bounce.</Animated>
  </div>
)

export default Demo