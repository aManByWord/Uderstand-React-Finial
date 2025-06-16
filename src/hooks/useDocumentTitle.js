// Function used to update the title of the webpage
import { useEffect } from 'react';

export default function useDocumentTitle(title) {
    return useEffect(() => {
        const originalTitle = document.title;
        document.title = title;

        return () => {
            document.title = originalTitle;
        }
    }, [title]);
}