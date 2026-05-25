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

  // 테이블 헤더 스타일
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },

  // 테이블 바디 스타일
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


// 테이블 행 스타일 지정
const StyledTableRow = styled(TableRow)(({ theme }) => ({

  // 홀수 번째 행 배경색 변경
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  // 마지막 행 border 제거
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
    // 현재 코드에서는 사용 안 함
    let keywordRef = useRef("");


    // 학생 목록 조회 함수
    function stuList(){

        // 서버에 학생 목록 요청
        // keyword 값을 query string으로 전달
        fetch("http://localhost:3010/student?keyword=" + keyword)

            // 응답을 JSON으로 변환
            .then(res => res.json())

            // 결과 처리
            .then(data => {

                // 서버 응답 확인용
                console.log(data);

                // 학생 목록 state에 저장
                setList(data.list);
            });
    }


    // keyword 값이 바뀔 때마다 실행
    useEffect(()=>{

        // 학생 목록 조회
        stuList();

    }, [keyword]);


    return <>

        <h2>학생 목록!</h2>

        <div>
            {/* 이름 검색 */}


            {/* 
                예전 방식
                ref로 input 값을 직접 가져오는 방식
            */}
            {/* <input ref={keywordRef}></input> */}


            {/* 
                현재 방식
                input 값과 keyword state를 연결
            */}
            <input 
                value={keyword} 
                onChange={(e)=>{

                    // 입력한 값을 keyword에 저장
                    setKeyword(e.target.value);

                }}>
            </input>


            {/* 검색 버튼 */}
            <button onClick={()=>{

                // 학생 목록 조회
                stuList();

            }}>
                검색
            </button>


            {/* MUI 버튼 */}
            <Button 
                variant="contained"
                size="small"
                color="info"
            >
                검색2
            </Button>


            {/* MUI 버튼 */}
            <Button 
                variant="contained"
            >
                검색3
            </Button>


            {/* MUI 테이블 영역 */}
            <TableContainer component={Paper}>

                <Table sx={{ maxWidth: 500 }} aria-label="customized table">

                    {/* 테이블 헤더 */}
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>학번</StyledTableCell>
                            <StyledTableCell>이름</StyledTableCell>
                            <StyledTableCell>학과</StyledTableCell>
                            <StyledTableCell>학년</StyledTableCell>
                        </TableRow>
                    </TableHead>


                    {/* 테이블 내용 */}
                    <TableBody>

                        {/* 학생 목록 반복 출력 */}
                        {list.map((row) => (

                            <StyledTableRow key={row.STU_NO}>

                                {/* 학번 */}
                                <StyledTableCell component="th" scope="row">
                                    {row.STU_NO}
                                </StyledTableCell>

                                {/* 이름 */}
                                <StyledTableCell>{row.STU_NAME}</StyledTableCell>

                                {/* 학과 */}
                                <StyledTableCell>{row.STU_DEPT}</StyledTableCell>

                                {/* 학년 */}
                                <StyledTableCell>{row.STU_GRADE}</StyledTableCell>

                            </StyledTableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>


        <hr></hr>


        {/* 학생 추가 페이지로 이동 */}
        <Link to="/student/add">학생추가</Link>
    </>
}

export default StudentList;