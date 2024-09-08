import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { FC } from 'react';

const TABLE_HEADER_CELL_LABELS = ['ID', 'NAME', 'AGE', 'ADDRESS'];

const mockData = [
  {
    id: 1,
    name: 'Pedro',
    age: 23,
    address: 'Rua dos Fornos',
  },
  {
    id: 2,
    name: 'João',
    age: 21,
    address: 'Rua dos 1',
  },
  {
    id: 3,
    name: 'André',
    age: 20,
    address: 'Rua dos 2',
  },
  {
    id: 4,
    name: 'Ana',
    age: 24,
    address: 'Rua dos 3',
  },
  {
    id: 5,
    name: 'Sofia',
    age: 25,
    address: 'Rua dos 4',
  },
  {
    id: 6,
    name: 'Ricardo',
    age: 20,
    address: 'Rua dos 5',
  },
  {
    id: 7,
    name: 'António',
    age: 19,
    address: 'Rua dos 6',
  },
];

const cellInnerRightBorderStyle = {
  borderColor: '#3b414f',
  borderWidth: '0 1px 0 0',
  borderStyle: 'solid',
};
const tableBodyRowTopBorderStyle = {
  borderColor: '#3b414f',
  borderWidth: '1px 0 0 0',
  borderStyle: 'solid',
};

export const InfiniteScrollTable: FC = () => {
  return (
    <TableContainer
      sx={{
        width: '100%',
        // backgroundColor: '#091738',
        borderRadius: '8px',
        boxSizing: 'border-box',
        border: '1px solid #3b414f',
      }}
    >
      <Table
        sx={{
          '& .MuiTableCell-root': {
            borderBottom: 'none',
          },
        }}
      >
        {/* <TableHead sx={{ boxShadow: '0 0 8px 2px #060d1e' }}> */}
        <TableHead sx={{ boxShadow: '0 0 8px 3px #0d1321' }}>
          <TableRow sx={{ borderBottom: 0 }}>
            {TABLE_HEADER_CELL_LABELS.map((label, index) => (
              <TableCell
                key={label}
                sx={
                  TABLE_HEADER_CELL_LABELS.length - 1 === index
                    ? undefined
                    : cellInnerRightBorderStyle
                }
              >
                <Typography sx={{ color: '#c4c4c4', fontSize: 12 }}>
                  {label}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {mockData.map((data) => (
            <TableRow key={data.id} sx={tableBodyRowTopBorderStyle}>
              <TableCell sx={cellInnerRightBorderStyle}>
                <Typography sx={{ color: '#c4c4c4' }}>{data.id}</Typography>
              </TableCell>
              <TableCell sx={cellInnerRightBorderStyle}>
                <Typography sx={{ color: '#c4c4c4' }}>{data.name}</Typography>
              </TableCell>
              <TableCell sx={cellInnerRightBorderStyle}>
                <Typography sx={{ color: '#c4c4c4' }}>{data.age}</Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ color: '#c4c4c4' }}>
                  {data.address}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
