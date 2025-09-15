import styled from "styled-components";

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  @media (max-width: 750px) {
    margin-bottom: 20px;
    align-items: center;
  }
`;
export const Container = styled.div`
  width: 100%;
  max-width: 750px;
  margin: auto;
  display: flex;
  padding: 50px 0;

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;
export const LogoLink = styled.a`
  display: block;
`;
export const InfoArea = styled.div`
  width: 100%;
  margin: 20px 0;

    @media (max-width: 750px) {
    display: flex;
    justify-content: space-around;
    text-align: center;
    }
`;
export const GridArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
    @media (max-width: 750px) {
      justify-content: center;
        margin: 0 30px;  
    }
`;
export const Grid = styled.div`
  width: 430;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`
