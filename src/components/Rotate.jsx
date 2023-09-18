import { useParallax } from '@react-spring/parallax'

const Component = () => {
    const parallax = useParallax < HTMLDivElement > ({
        rotate: [0, 360],
    });
    return (
        <div ref={parallax.ref} className="spinner">
            😵‍💫
            <div className="diamond">💎</div>
            <div className="clown">🤡</div>
            <div className="money">💰</div>
            <div className="hand">👌🏻</div>
        </div>
    );
};

export default Component