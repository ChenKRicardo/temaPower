import styled from "@emotion/styled";

export const Row = styled.div<{
    gap?:number | boolean,
    between?:boolean,
    maginBottom?:number
}>`
    display: flex;
    align-items: center;
    justify-content: ${props =>props.between ? 'space-between' : undefined};
    margin-bottom: ${props => props.maginBottom + 'rem' };
    /* 
        div下的所有子元素 
        并通过接收props动态改变margin-right
    */
    > * {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
       margin-right: ${props => typeof props.gap === 'number' ? props.gap + 'rem' :props.gap ? '2rem' : undefined};
    }
`       
