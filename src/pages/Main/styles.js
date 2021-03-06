import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
`;

export const Input = styled.input`
  flex: 1;
  border: 1px solid #ddd;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 16px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  ${props =>
    props.error &&
    css`
      border: 1px solid #f00;
      box-shadow: 0 0 20px rgba(255, 0, 0, 0.1);
    `}
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.load &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #ddd;
    }

    a {
      color: #7159c1;
    }
  }
`;
