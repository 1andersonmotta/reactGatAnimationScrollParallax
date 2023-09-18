// import { useState } from 'react'
import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
// import { useParallax } from '@react-spring/parallax'

function App() {

  return (
    <div>
      <Parallax pages={3}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: 'url(../lua.jpg)',
            backgroundSize: 'cover',
          }}
        />
        <ParallaxLayer
          offset={1}
          speed={1}
          factor={3}
          style={{
            backgroundImage: 'url(../floresta.jpg)',
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={0.1}
          speed={0.05}
        >
          <h2 style={{ color: 'blue' }}>OLHA O EFFEITO!!</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.5}
          speed={0.05}
        >
          <h2 style={{ color: 'red' }}>LEGAL!!</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={2}
        >
          <h2 style={{ color: 'yellow' }}>EFFEITO SCROLL!</h2>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.1, end: 2.9 }}>
          <img src="../cat.gif" />
        </ParallaxLayer>
      </Parallax>
    </div >
  )
}

export default App


// const [count, setCount] = useState(0)
// const parallax = useParallax < HTMLDivElement > ({
//   rotate: [0, 360],
// });
// return (
//   <div ref={parallax.ref} className="spinner">
//     😵‍💫
//     <div className="diamond">💎A</div>
//     <div className="clown">🤡B</div>
//     <div className="money">💰C</div>
//     <div className="hand">👌🏻D</div>
//     <p>oiii</p>
//   </div>
// );