import styled from "styled-components";

const Button = styled.button`
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const ThemeButton = () => {
  const handleClick = () => {
    console.log("light theme");
  };

  return <Button onClick={handleClick}>Light Mode</Button>;
};

export default ThemeButton;
