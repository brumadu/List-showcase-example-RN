import styled from "styled-components/native"


export namespace S {
    export const Container = styled.View`
    flex: 1;
    border-bottom-width: 1px;
    justify-content: space-around;
    `;
    export const ContainerRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    `;
    export const NameText = styled.Text`
    font-size: 16px;
    font-weight: 600;
    `;
    export const Text = styled.Text`
    font-size: 14px;
    font-weight: 400;
    `;
}