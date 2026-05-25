// React 기본 import
import * as React from 'react';


// MUI 컴포넌트 import
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';


// styled 사용
import { styled } from '@mui/material/styles';


// Card 스타일 지정
const Card = styled(MuiCard)(({ theme }) => ({

  // flex 레이아웃
  display: 'flex',

  // 세로 정렬
  flexDirection: 'column',

  // 가운데 정렬
  alignSelf: 'center',

  // 가로 전체 사용
  width: '100%',

  // 내부 여백
  padding: theme.spacing(4),

  // 요소 사이 간격
  gap: theme.spacing(2),

  // 자동 가운데 정렬
  margin: 'auto',

  // 화면이 sm 이상일 때 최대 너비 설정
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },

  // 그림자 효과
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',

  // 다크모드 스타일
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));



// 전체 로그인 영역 스타일
const SignInContainer = styled(Stack)(({ theme }) => ({

  // 화면 높이 설정
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',

  minHeight: '100%',

  // 내부 여백
  padding: theme.spacing(2),

  // sm 이상일 때 padding 증가
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },

  // 배경 스타일
  '&::before': {

    content: '""',

    display: 'block',

    position: 'absolute',

    zIndex: -1,

    inset: 0,

    // 밝은 배경 그라데이션
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',

    backgroundRepeat: 'no-repeat',

    // 다크모드 배경
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));



export default function Login(props) {

  // 이메일 에러 여부
  const [emailError, setEmailError] = React.useState(false);

  // 이메일 에러 메시지
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');


  // 비밀번호 에러 여부
  const [passwordError, setPasswordError] = React.useState(false);

  // 비밀번호 에러 메시지
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');


  // 팝업 open 여부
  const [open, setOpen] = React.useState(false);



  // 비밀번호 찾기 열기
  const handleClickOpen = () => {

    setOpen(true);

  };


  // 비밀번호 찾기 닫기
  const handleClose = () => {

    setOpen(false);

  };



  // 로그인 submit 함수
  const handleSubmit = (event) => {

    // 에러가 있으면 submit 중지
    if (emailError || passwordError) {

      event.preventDefault();

      return;
    }

    // form 데이터 가져오기
    const data = new FormData(event.currentTarget);


    // 콘솔 출력
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };



  // 입력값 검증 함수
  const validateInputs = () => {

    // 이메일 input 가져오기
    const email = document.getElementById('email');

    // 비밀번호 input 가져오기
    const password = document.getElementById('password');

    let isValid = true;



    // 이메일 검사
    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {

      // 에러 상태 true
      setEmailError(true);

      // 에러 메시지 저장
      setEmailErrorMessage('Please enter a valid email address.');

      isValid = false;

    } else {

      // 정상 상태
      setEmailError(false);

      setEmailErrorMessage('');
    }



    // 비밀번호 검사
    if (!password.value || password.value.length < 6) {

      setPasswordError(true);

      setPasswordErrorMessage('Password must be at least 6 characters long.');

      isValid = false;

    } else {

      setPasswordError(false);

      setPasswordErrorMessage('');
    }

    return isValid;
  };



  return (
    <>
      {/* 기본 CSS 적용 */}
      <CssBaseline enableColorScheme />


      {/* 로그인 전체 영역 */}
      <SignInContainer direction="column" sx={{ justifyContent: 'space-between' }}>

        {/* 로그인 카드 */}
        <Card variant="outlined">

          {/* 제목 */}
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Sign in
          </Typography>



          {/* 로그인 form */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >


            {/* 이메일 입력 */}
            <FormControl>

              <FormLabel htmlFor="email">Email</FormLabel>

              <TextField
                error={emailError}
                helperText={emailErrorMessage}
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={emailError ? 'error' : 'primary'}
              />
            </FormControl>



            {/* 비밀번호 입력 */}
            <FormControl>

              <FormLabel htmlFor="password">Password</FormLabel>

              <TextField
                error={passwordError}
                helperText={passwordErrorMessage}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>



            {/* 로그인 유지 체크 */}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />


            {/* 로그인 버튼 */}
            <Button
              type="submit"
              fullWidth
              variant="contained"

              // 클릭 시 입력값 검사
              onClick={validateInputs}
            >
              Sign in
            </Button>



            {/* 비밀번호 찾기 */}
            <Link
              component="button"
              type="button"
              onClick={handleClickOpen}
              variant="body2"
              sx={{ alignSelf: 'center' }}
            >
              Forgot your password?
            </Link>
          </Box>



          {/* 구분선 */}
          <Divider>or</Divider>



          {/* 소셜 로그인 영역 */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

            {/* 구글 로그인 */}
            <Button
              fullWidth
              variant="outlined"

              // 클릭 시 alert
              onClick={() => alert('Sign in with Google')}
            >
              Sign in with Google
            </Button>



            {/* 페이스북 로그인 */}
            <Button
              fullWidth
              variant="outlined"

              // 클릭 시 alert
              onClick={() => alert('Sign in with Facebook')}
            >
              Sign in with Facebook
            </Button>



            {/* 회원가입 안내 */}
            <Typography sx={{ textAlign: 'center' }}>

              Don&apos;t have an account?{' '}

              {/* 회원가입 링크 */}
              <Link
                href="/material-ui/getting-started/templates/sign-in/"
                variant="body2"
                sx={{ alignSelf: 'center' }}
              >
                Sign up
              </Link>

            </Typography>
          </Box>
        </Card>
      </SignInContainer>
    </>
  );
}