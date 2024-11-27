'use client'

import {CssBaseline, CssVarsProvider} from "@mui/joy";
import {ReactNode} from "react";
import InitColorSchemeScript from "@mui/system/InitColorSchemeScript";

export default function ThemeProvider({
                                          children,
                                      }: {
    children: ReactNode
}) {
    return (
        <>
            <InitColorSchemeScript/>
            <CssVarsProvider defaultMode={'system'}>
                <CssBaseline/>
                {children}
            </CssVarsProvider>
        </>
    )
}