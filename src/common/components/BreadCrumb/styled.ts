import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 560px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto 36px auto;
`;

export const Text = styled.div`
  font-family: Lato;
  font-size: 12px;
  line-height: 16px;
  margin-left: 16px;
  color: #EF3340;

  span {
    color: #A3ABCC
  }
`;

export const Icon = styled.img`
  cursor: pointer;
`;
