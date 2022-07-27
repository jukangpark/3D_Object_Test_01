import styled from "styled-components";
import alarmData from "../alarmData";

const AlarmContainer = styled.div`
  position: absolute;
  color: white;
  top: 150px;
  left: 50px;
  z-index: 99999;

  & > ul {
    display: flex;
  }
  & > ul > li {
    margin-right: 1rem;
    width: 70px;
    line-height: 25px;
    text-align: center;
  }
  & > ul > li > h3 {
    margin-top: 10px;
    font-size: 2rem;
  }
`;

const Alarm = () => {
  const { critical, trouble, attention } = alarmData.data[0];

  return (
    <AlarmContainer>
      <ul>
        <li>
          <img src="./assets/levels/level3.png" alt="심각" />
          <h3>{critical}</h3>
          <p>심각</p>
        </li>
        <li>
          <img src="./assets/levels/level2.png" alt="경고" />
          <h3>{trouble}</h3>
          <p>경고</p>
        </li>
        <li>
          <img src="./assets/levels/level1.png" alt="주의" />
          <h3>{attention}</h3>
          <p>주의</p>
        </li>
      </ul>
    </AlarmContainer>
  );
};

export default Alarm;
