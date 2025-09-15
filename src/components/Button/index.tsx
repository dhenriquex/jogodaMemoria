import React from "react";
import * as C from "./style";
type Props = {
    label: string;
    icon: any;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}
 export const Button = ({label, icon, onClick}:Props) => {
    return(
        <C.Container onClick={onClick}>
            <C.IconArea>    
                <C.icon src={icon}></C.icon>
            </C.IconArea>
            <C.Label>{label}</C.Label>
        </C.Container>
    );
 }