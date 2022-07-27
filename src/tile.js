// tile 생성자 함수 사용하기.

// function Tile(width, height, xAxisLength, zAxisLength)  {
//   this.width = width,
//   this.height = height,
//   this.xAxisLength = xAxisLength,
//   this.zAxisLength = zAxisLength,
//   this.padding = width / 2,
// }

const width = 6;
const padding = width / 2;

const tile = {
  width,
  height: width,
  xAxisLength: 10, // (마진을 제외한) x축 tile 개수
  zAxisLength: 10, // (마진을 제외한) z축 tile 개수
  padding,
};

export default tile;

// tile 은 무조건 정사각형이어야 하며,
// tile 의 너비값의 절반이 패딩이 되어야 한다.
// 객체 안에서 해당 프로퍼티를 사용할 수 있는 방법?
// this 키워드로 왜 안되지?
