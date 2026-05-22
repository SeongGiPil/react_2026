import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function StudentList(){
    let [list, setList] = useState([]);
    let [keyword, setKeyword] = useState("");
    let keywordRef = useRef("");
    function stuList(){
        fetch("http://localhost:3010/student?keyword="+keyword)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setList(data.list);
            });
    }
    useEffect(()=>{
        stuList();
    }, [keyword]);
    return <>
        <h2>학생 목록!</h2>
        <div>
            {/* 이름 검색 */}
            {/* <input ref={keywordRef}></input> */}
            <input value={keyword} onChange={(e)=>{
                setKeyword(e.target.value);
            }}></input>
            <button onClick={()=>{
                stuList();
            }}>검색</button>
            <Button 
                variant="contained"
                size="small"
                color="info"
            >검색2</Button>

            <Button 
                variant="contained"
            >검색3</Button>

            <TableContainer component={Paper}>
                <Table sx={{ maxWidth: 500 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>학번</StyledTableCell>
                        <StyledTableCell>이름</StyledTableCell>
                        <StyledTableCell>학과</StyledTableCell>
                        <StyledTableCell>학년</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {list.map((row) => (
                        <StyledTableRow key={row.STU_NO}>
                            <StyledTableCell component="th" scope="row">
                                {row.STU_NO}
                            </StyledTableCell>
                            <StyledTableCell>{row.STU_NAME}</StyledTableCell>
                            <StyledTableCell>{row.STU_DEPT}</StyledTableCell>
                            <StyledTableCell>{row.STU_GRADE}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

        <hr></hr>
        <Link to="/student/add">학생추가</Link>
    </>
}

export default StudentList;