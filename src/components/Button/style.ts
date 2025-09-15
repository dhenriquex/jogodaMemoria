import styled from "styled-components";
export const Container = styled.div`
width: 200px;
height: 50px;
display: flex;
border-radius: 10px;
cursor: pointer;
background-color: #1550ff;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
opacity: 1;
transition: all ease 0.3s;
&:hover{
    opacity: 0.7;
}

`
export const IconArea = styled.div`
height: inherit;
display: flex;
justify-content: center;
align-items: center;   
border-right: 1px solid rgba(255, 255, 255, 0.5);
padding: 0 15px; 
`
export const Label = styled.div`
    height: inherit;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;   
    flex: 1;
    padding: 0 15px;
`
export const icon = styled.img`
    width: 24px;
`