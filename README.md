## Vue.js 란?

![vuejs](https://user-images.githubusercontent.com/20435620/36942518-5cea6830-1fb7-11e8-8873-3acf0322b0e2.png)

Vue.js는 Evan You가 2014년도에 Release 하여 꾸준히 발전하고 있는 자바스크립트 프레임워크다.

Angular나 React보다 덜 알려져 있으나, 제작년부턴가 Vue.js 포럼에 한국어 카테고리가 추가될 정도로 

인지도에 상승 곡선을 그리는 추세이다. 

간단한 프로젝트를 만들어보면서 Vue.js 에 대해 알아가 보려고 한다.

** 프로젝트 생성 **

프로젝트에 필요한 최소한의 구조를 만들기 위해 express-generator 이용하여 프로젝트 생성

`npm install -g express-generator`

`express --jade --css sass --git`

> --jade 는 View 엔진 템플릿
> --css sass 는 기본값인 css 대신 전처리기가 필요한 sass 사용
> --git 은 .gitifnogre 를 추가하여 node_modules 안에 생기는 수 많은 파일을 무시

package.json 파일을 수정한다면 수정한 후 `npm install` 과 `npm start`명령어를 입력하자

애플리케이션이 제대로 동작하는지 보기 위해 브라우저에 아래 주소를 입력해보자

> http://localhost:3000 



프로젝트를 하면서 익혀야 할 개념들과 기술 정리

* #### NPM 과 YARN 의 개념 및 사용법

* #### Node 와 Express 프레임워크 

* #### Restful API (GET, POST)

* #### MongoDB 연동

* #### ECMAscript 5 와 6 

* #### ...
