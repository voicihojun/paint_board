기본적으로 실행해야 할 순서

- git hub 만들기 / git clone / App.js, index.html, styles.css
- function 만들기
  <canvas>, <2d context>, <changing color>, <brush size>, <filling mode>, <saving img>

1. reset.css 사용 : 모든 브라우저에서 동일하게 보이도록 맨 처음에 초기화 시켜주는 css 라고 할 수 있다. main css 파일에 '@import "reset.css"' 와 같이 사용한다.

2. context의 사용법과 context의 각종 라이브러리(fillStyle, strokeStyle, fillRect, lineWidth, beginPath(), moveTo(x, y), lineto(x, y), stroke(), closePath())

3. 캔버스의 이미지를 저장하기 위해서는 'a' tag 를 이용해야 한다.
   download attribute 에는 저장될 이름을 지정할 수 있고, href attribute에는 canvas.toDataURL("image/jpeg" 혹은 "image/png") 등을 이용해 이미지의 확장자를 정하여 link를 저장할 수 있다. 마지막 스텝으로 link.click()을 통해 가짜 클릭을 실행하므로써 save가 실행되도록 하였다.
