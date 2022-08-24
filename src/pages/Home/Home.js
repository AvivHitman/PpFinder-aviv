import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import * as S from "../style";

const Home = () => (
    <S.UsersPage>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
          <UserList />
      </S.Content>
    </S.UsersPage>
  );

export default Home;
