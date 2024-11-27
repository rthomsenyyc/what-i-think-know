import {Sheet, Typography} from "@mui/joy";

export default async function Page() {
    return <Sheet sx={{width: '100vw', height: '100vh'}}>
        <Typography level={'h4'} component={'h1'}>Hello, Next.js!</Typography>
    </Sheet>
}