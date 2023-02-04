import styled from "styled-components/native"

export namespace S {
    export const Container = styled.View`
    flex: 1;
    border-bottom-width: 1px;
    justify-content: space-around;
    `;
    export const Image = styled.Image`
    height: 52px;
    width: 52px;
    margin-right: 16px;
    border-radius: 30px;
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