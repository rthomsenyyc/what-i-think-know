import {ReactNode} from "react";
import ThemeProvider from "../components/themeProvider";
import Menu, {MenuItem} from "../components/Menu";
import {Stack} from "@mui/joy";

export const metadata = {
    title: 'Demonstration Application',
    description: 'This application represents a combination of technologies that I think I know and some others that I want to know',
}

const menuItems: MenuItem[] = [
    {label: 'Scheduler', path: '/scheduler'},
    {label: 'Account', path: '/account'},
    {label: 'Profile', path: '/profile'},
];

export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
        <ThemeProvider>
            <body>

            <Stack
                direction="row"
                spacing={0}
                sx={{
                    justifyContent: "space-around",
                    alignItems: "stretch",
                }}
            >
                <Menu menuItems={menuItems}/>
                {children}
            </Stack>
            </body>
        </ThemeProvider>
        </html>
    )
}