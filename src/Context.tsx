import { ReactElement } from 'react';
import {createContext, useContext} from 'react';

type Theme = 'light' | 'dark';

const Context = createContext<Theme>('light');
export function ThemeProvider(props: {
    theme: Theme;
    children: ReactElement;
}) {
    return (
        <Context.Provider value={props.theme}>{props.children}</Context.Provider>
    );
}

export function useTheme(): Theme {
    return useContext(Context);
}
