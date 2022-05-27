import { useLayoutEffect, useState } from 'react';

function WindowSize() {
    const [size, setSize] = useState(window.innerWidth);
    useLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}
export default WindowSize;