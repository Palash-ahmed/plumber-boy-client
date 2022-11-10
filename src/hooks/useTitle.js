import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Plumber Boy`;
    }, [title])
};
export default useTitle;