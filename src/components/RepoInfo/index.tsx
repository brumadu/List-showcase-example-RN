import React from "react"
import { S } from "./style"

type repoInfo = {
    nameRepo: String;
    stars: String;
    userRepo: String;
}

function RepoInfo(props: repoInfo) {
    return (
        <S.Container>
            <S.ContainerRow>
                <S.NameText>
                    {props.nameRepo}
                    </S.NameText>
                <S.Text>
                    {props.stars}
                    </S.Text>
            </S.ContainerRow>
                <S.Text>{props.userRepo}
                </S.Text>
        </S.Container>
    )
}

export default RepoInfo;