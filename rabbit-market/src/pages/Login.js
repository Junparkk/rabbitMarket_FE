import React from "react";
import Grid from "../elements/Grid";
import Input from "../elements/Input";
import Text from "../elements/Text";
import Button from "../elements/Button";

const Login = () => {
  return (
    <>
      <Grid width="80vw" margin="auto">
        <Grid padding="16px" center>
          <Text size="2rem" bold>
            로그인
          </Text>
        </Grid>
        <Grid padding="5px 16px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요!!!"
            border="2px solid #6667ab"
            border_radius="50px"
          ></Input>
        </Grid>

        <Grid padding="5px 16px">
          <Input
            label="비밀번호"
            placeholder="아이디를 입력해주세요!!!"
            border="2px solid #6667ab"
            border_radius="50px"
          ></Input>
        </Grid>

        <Grid padding="5px 16px">
          <Button border_radius="30px">로그인</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
