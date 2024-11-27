import {Box, Link, Typography} from "@mui/joy";

export interface MenuItem {
    label: string;
    path: string;
}

function Menu({menuItems}: { menuItems: MenuItem[] }) {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            width: '100vw'
        }}>
            {menuItems.map((value) => (
                <Link
                    key={value.path}
                    href={value.path}
                    underline={'none'}
                    sx={{
                        padding: '1rem 1.5rem',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        },
                    }}
                >
                    <Typography>
                        {value.label}
                    </Typography>
                </Link>
            ))}
        </Box>
    )
}

export default Menu;