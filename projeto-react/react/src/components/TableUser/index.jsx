import { TableCell, TableRow } from "@mui/material"

export const TableUser = ({name,email}) =>{
    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell align="center">{name}</TableCell>
        <TableCell align="center">{email}</TableCell>
      </TableRow>

    )
}