# 리액트 마스터 7

## styled-components 기본 세팅 정리

### styled.d.ts 세팅

- root 폴더에 types/styled.d.ts 파일 생성

```ts
// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    boxColor: string;
    bdRadius: string;
    fontColor: string;

    colors: {
      main: string;
      secondary: string;
      btn: string;
    };
  }
}
```

### theme.ts 세팅

- root 폴더에 styles/theme.ts 파일 생성
- styled.d.ts 파일에 정의한 theme 을 생성한다.

```ts
import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  bgColor: '#efefef',
  boxColor: '#fff',
  bdRadius: '8px',
  fontColor: '#000',
  colors: {
    main: '#3545ee',
    secondary: 'red',
    btn: '#7480ff',
  },
};

export const darkTheme: DefaultTheme = {
  bgColor: '#222',
  boxColor: '#333',
  bdRadius: '8px',
  fontColor: '#fff',
  colors: {
    main: '#3545ee',
    secondary: 'red',
    btn: '#7480ff',
  },
};
```

### <ThemeProvider> 세팅

- <App /> 컴포넌트를 감싸는 <ThemeProvider> 컴포넌트 세팅

```ts
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

### GlbalStyle 세팅 (전역 css, 리셋 css)

- root 폴더에 styles/GlobalStyle.tsx 생성
- styled-reset 패키지 설치

```ts
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
   *, html, body {
    font-family: 'Source Sans Pro', sans-serif;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
```

- <App> 컴포넌트안에 컴포넌트와 똑같은 방식으로 사용

```ts
import React from 'react';
import Router from 'Router';
import GlobalStyle from 'styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
```

## [Framer motion] Can't import the named export 'Children' from 에러 해결

### CRACO 설치

```
npm i @craco/craco --save
```

### 프로젝트의 package.json 파일 위치 폴더(프로젝트의 root)에 craco.config.js 파일 생성

```js
module.exports = {
  webpack: {
    configure: {
      module: {
        rules: [
          {
            type: 'javascript/auto',
            test: /\.mjs$/,
            include: /node_modules/,
          },
        ],
      },
    },
  },
};
```

### npm script 수정

```json
"scripts": {
-   "start": "react-scripts start",
+   "start": "craco start",
-   "build": "react-scripts build",
+   "build": "craco build"
-   "test": "react-scripts test",
+   "test": "craco test"
}
```

## [framer-motion] useAnimation 애니메이션 트리거 사용법

- state 상태를 트리거로 다른 컴포넌트의 애니메이션을 실행.

```js
const Header = () => {
  const [searching, setSearching] = useState(false);

  const homeMatch = useMatch('/');
  const tvMatch = useMatch('/tv');
  console.log(searching);

  // 이벤트를 트리거로 사용가능.
  // 컴포넌트 animate 속성 값에 useAnimation()로 반환 받은 값을 할당
  const searchAni = useAnimation();
  if (searching) {
    searchAni.start({
      width: '220px',
      background: 'rgba(0, 0, 0, 0.4)',
    });
  } else {
    searchAni.start({
      width: '20px',
      background: 'transparent',
    });
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <Nav>
        <Logo>
          <Link to="/">
            <motion.svg
              variants={logoVariants}
              initial={'init'}
              whileHover={'hover'}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 276.742"
            >
              <path
                d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z"
                fill="#d81f26"
              />
            </motion.svg>
          </Link>
        </Logo>
        <Gnb>
          <li>
            <Link to="/">Home</Link>
            {homeMatch && <UnderLine layoutId="gnbUnderLine" />}
          </li>
          <li>
            <Link to="/tv">TV</Link>
            {tvMatch && <UnderLine layoutId="gnbUnderLine" />}
          </li>
        </Gnb>
        <Search
          onSubmit={onSubmit}
          animate={searchAni}
          transition={{ type: 'liner' }}
        >
          <SearchIcon onClick={() => setSearching((prev) => !prev)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
            </svg>
          </SearchIcon>
          <SearchInput placeholder="검색" />
        </Search>
      </Nav>
    </>
  );
};
```

## react-router-dom

- useHistory() -> useNavigate() 으로 변경됨

```js
history.push(" *** ")
=> navigate(" *** ")
```
