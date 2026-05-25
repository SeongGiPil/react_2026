// useEffect : 특정 시점에 함수 실행
// useRef : input 직접 접근용
// useState : 상태값 관리
import { useEffect, useRef, useState } from "react";

// Link : 페이지 이동용 태그
import { Link } from "react-router-dom";

// MUI 버튼 import
import Button from '@mui/material/Button';

// MUI 스타일 함수 import
import { styled } from '@mui/material/styles';

// MUI 테이블 관련 컴포넌트 import
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


// 테이블 셀 스타일 지정
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },

  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


// 테이블 행 스타일 지정
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


function StudentList(){

    // 학생 목록 저장
    let [list, setList] = useState([]);

    // 검색어 저장
    let [keyword, setKeyword] = useState("");

    // input 직접 접근용 ref
    let keywordRef = useRef("");


    // 학생 목록 조회 함수
    function stuList(){

        fetch("http://localhost:3010/student?keyword=" + keyword)
            .then(res => res.json())
            .then(data => {

                console.log(data);

                setList(data.list);
            });
    }


    // keyword 변경 시 실행
    useEffect(()=>{

        stuList();

    }, [keyword]);


    return <>
        <h2>학생 목록!</h2>

        <div>

            {/* 이름 검색 */}
            {/* <input ref={keywordRef}></input> */}

            <input
                value={keyword}
                onChange={(e)=>{

                    setKeyword(e.target.value);

                }}>
            </input>


            <button onClick={()=>{

                stuList();

            }}>
                검색
            </button>


            <Button
                variant="contained"
                size="small"
                color="info"
            >
                검색2
            </Button>


            <Button
                variant="contained"
            >
                검색3
            </Button>


            <TableContainer component={Paper}>

                <Table
                    sx={{ maxWidth: 500 }}
                    aria-label="customized table"
                >

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

                                <StyledTableCell>
                                    {row.STU_NAME}
                                </StyledTableCell>

                                <StyledTableCell>
                                    {row.STU_DEPT}
                                </StyledTableCell>

                                <StyledTableCell>
                                    {row.STU_GRADE}
                                </StyledTableCell>

                            </StyledTableRow>

                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </div>

        <hr></hr>

        <Link to="/student/add">
            학생추가
        </Link>
    </>
}

export default StudentList;