import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

// 애니메이션 효과
const fadeAni = keyframes`
	from {
		opacity:0
	}
	to {
		opacity:1
	}
`;

const Form = styled.form`
  animation: ${fadeAni} 2s linear;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
`;

const Text = styled.span`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  all: unset;
  border-bottom: 2px solid #fff;
  text-align: center;
`;

const Name = ({ value, handleChange, handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Text>Hi, what's your name?</Text>
    <Input value={value} onChange={handleChange} />
  </Form>
);

// 데이터타입 체크
Name.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Name;
