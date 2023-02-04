import styled from "styled-components/native"

export namespace S {
    export const Container = styled.View`
    flex: 1;
    `;
    export const ContainerList = styled.View`
    flex-direction: row;
    padding-left: 16px;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-right: 16px;
    `;
    export const Image = styled.Image`
    height: 52px;
    width: 52px;
    margin-right: 16px;
    border-radius: 30px;
    `;
}