
import styled from "styled-components";
type ContainerProps = {
    showBackGround: boolean;
}
export const Container = styled.div<ContainerProps>`
background-color: ${props => props.showBackGround ===  true ? '#1550ff':'#e2e3e3'};
height: 100px;
width: 100px;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;   
cursor: pointer;
`
type IconProps ={
    opcaity?: number;
}
export const Icon = styled.img<IconProps>`
width: 40px;
height: 40px;
opacity: ${props => props.opcaity ? props.opcaity : 1};
`