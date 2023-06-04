import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  background-color: var(--white-color);
  margin: 5rem 0 0 0;
  padding: 1rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: 'Titan One', cursive;
    font-weight: 800;
    margin: 0 0 1rem 0;
    color: var(--second-color);
  }
`;

export const Input = styled.input`
  width: 82%;
  padding: 0.55rem;
  border-radius: 4px 0 0 4px;
  border: 1px solid #d8489f;
  color: var(--background-color);
  font-size: 1rem;
  letter-spacing: 0.3px;
  &::placeholder {
    color: rgba(76, 36, 59, 0.2);
    font-size: 1rem;
    letter-spacing: 0.3px;
  }
`;

export const AddNewTodo = styled.div`
  display: flex;
  width: 100%;
`;

export const BtnAddTodo = styled.button`
  padding: 0.4rem 3rem;
  border-radius: 0 4px 4px 0;
  border: 1px solid #d8489f;
  background-color: var(--second-color);
  color: var(--primary-color);
  font-size: 1rem;
  transition: ease-in .5s;
  &:hover {
    background-color: #B53C85;
  }
`;

export const ListTodo = styled.ul`
  width: 100%;
  margin: 0.5rem 0 0 0;
`;

interface ItemTodoProps {
  isCompleted: boolean
}

export const ListItemTodo = styled.li<ItemTodoProps>`
  padding: 0.7rem 0;//.5, 1, 1.5, 2 //se precisar usar masi, ta errado
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(76, 36, 59, 0.2);
  letter-spacing: 0.5px;
  color: var(--background-color);
  font-size: large;
  font-weight: 500;
  background-color: ${(props) => props.isCompleted ? 'blue' : 'red'};
  div {
    display: flex;
  }
  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem 0.7rem;
    margin: 0 0 0 0.45rem;
    border: none;
    border-radius: 4px;
    background: rgb(34, 3, 31);
    background: linear-gradient(
      0deg,
      rgba(34, 3, 31, 1) 0%,
      rgba(56, 5, 51, 1) 100%
    );
    &:hover {
      background: rgb(0, 3, 255);
      background: linear-gradient(
        0deg,
        rgba(99, 47, 77, 1) 0%,
        rgba(184, 87, 143, 1) 100%
      );
    }
  }
`;
