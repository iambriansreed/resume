import React, { createContext, useContext } from 'react';

const pageContext = createContext<number>(1);

export function usePage() {
    return useContext(pageContext);
}

type PageProps = {
    page: number;
    children: React.ReactNode;
};

export default function Page(props: PageProps) {
    return (
        <div className="page">
            <pageContext.Provider value={props.page}>{props.children}</pageContext.Provider>
        </div>
    );
}
