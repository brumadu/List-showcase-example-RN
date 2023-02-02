import React from "react"
import { View } from "react-native";
import { S } from "./style"

function RepoInfo() {
    return (
        <S.Container>
            <S.ContainerRow>
                <S.NameText>
                    NomeRepo
                    {/* {`${item.name}`} */}
                    </S.NameText>
                <S.Text>estrela
                    {/* {`${item.stargazers_count}`} */}
                    </S.Text>
            </S.ContainerRow>
                <S.Text>User
                    {/* {`${item.owner.login}`} */}
                </S.Text>
        </S.Container>
    )
}

export default RepoInfo;