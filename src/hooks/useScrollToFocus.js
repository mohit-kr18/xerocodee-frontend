import { useEffect } from "react";

const useScrollToFocus = (ref) => {
    useEffect(() => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }, []);
}

export default useScrollToFocus;