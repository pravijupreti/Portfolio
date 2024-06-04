import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

const Tilt = (props) => {
    const tiltRef = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tiltRef.current, {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 0.5,
        });

        return () => tiltRef.current.vanillaTilt.destroy();
    }, []);

    return (
        <div ref={tiltRef} {...props}>
            {props.children}
        </div>
    );
};

export default Tilt;
