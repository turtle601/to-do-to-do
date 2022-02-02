# to-do-to-do

## 🖱 Purpose
TodoList had Category

## 🌏 WebSite
https://turtle601.github.io/to-do-to-do

## 🌁 Background
이 프로젝트는 normad-corder React Master Course 챌린지 과제 제출용입니다. <br />
혹시라도 저작권 및 문제가 생긴다면 바로 Private Repository로 돌리도록 하겠습니다.

## 🐕‍🦺 Usage
- React.js
- Typescript
- Styled-component
- react-hook-form(input 라이브러리)
- recoil(전역 상태 라이브러리)
- gh-pages (배포)

## ver 1.
`구현 기간` : 2022.01.31 ~ 2022.02.02

`신경써서 구현했던 것` :

- 재사용성 고려(css, ts함수들) + 극한의 모듈화
- 함수명을 직관적으로 하기
- css grid, flex를 이용한 반응형 디자인
- recoil 이해하기
recoil 라이브러리를 사용함으로써 다른 전역상태 라이브러리(Context Api, redux)와의 차이점과 유사점에 대해 비교하고 <br />
또 이러한 라이브러리를 쓰지 않았을 때와 비교하면서 어떤 것이 더 편하고 좋은지 이해하려고 하였다. 

- react-hook-form 이해하기
react-hook-form을 사용하면서 실제로 우리가 input을 구현할 때 어떤 점에 대해서 신경써야할지 <br />
실제로 구현했을 때보다 어떤 점이 편한지 느낄 수 있었다. 

- LocalStorage 사용

`git`:
issue탭과 project탭의 활용
main을 배포용, develop 개발용, develop위의 여러 브랜치를 feature/..., chores/... 등으로 이름지어 개발을 진행하고 merge 시키는 식으로 진행하였습니다.

`아쉬웠던 점` :

- 3일 안에 제출이었기 때문에 많은 기능을 구현하지 못했던 점(check기능 구현 못함)
- 성능 최적화가 이루어지지 않았다. 
useCallback을 사용하지 않았다. 
Recoil의 경우 전용 useRecoilCallback이라는 함수가 있는 데 이를 사용할 시 snap샷 구현도 별도로 필요하기 때문에 시간 관계상 하지 않았다. 

