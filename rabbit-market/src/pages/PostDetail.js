import React from 'react';

import { apis } from '../shared/api';

//컴포넌트 임포트
import CommentWrite from '../components/CommentWrite';
import CommentList from '../components/CommentList';
import Grid from '../elements/Grid';
import Image from '../elements/Image';
import Text from '../elements/Text';
import Button from '../elements/Button';
import Permit from '../shared/Permit';

import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';
import { useEffect } from 'react';

const PostDetail = (props) => {
  const dispatch = useDispatch();
  // 판매 상태 저장 state
  const [isSold, setIsSold] = React.useState(false);

  //클릭한 포스트 정보 가져오기
  const post = useSelector((store) => store.post.post);

  // 포스트 아이디 파람으로 받아오기
  const postId = props.match.params.id;

  //토큰으로 아이디 가져오기

  function checkLogin() {
    const token = localStorage.getItem('login-token');
    console.log(token);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    apis
      .checkLogin(config)
      .then(function (res) {
        console.log('로그인체크', res);
        return res.data.user.userId;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  React.useEffect(() => {
    checkLogin();
  }, []);
  // apis
  //   .add(
  //     { title: 'title', price: 1243124, imgurl: '', content: 'content' },
  //     {
  //       headers: { Authorization: `Bearer ${token}` },
  //     }
  //   )
  //   .then(function (res) {
  //     console.log(res);
  //   });

  // 판매 상태 수정 함수
  function setState() {
    setIsSold(!isSold);
  }

  React.useEffect(() => {
    dispatch(postActions.getOnePostAPI(postId));
  }, []);

  return (
    <Grid padding="0 13vw">
      {/* 판매 상품 이미지, 제목, 가격, 날짜, 판매 여부  */}
      <Grid is_flex border_bottom padding="2vh 0">
        <Image src={post.imgurl} size="30" />

        <Grid width="57%">
          <Grid border_bottom>
            <Text size="2.5vw" bold>
              {post.title}
            </Text>
            <Text size="3vw" bold>
              {post.price} 원
            </Text>
          </Grid>
          <Text size="3vw" bold></Text>
          <Text size="1.5vw" is_end>
            {post.createdAt}
          </Text>
          <Text size="1.5vw" is_end>
            {isSold ? '판매 완료' : '판매중'}
          </Text>
        </Grid>
      </Grid>
      {/* 상품 정보 */}
      <Grid>
        <Text Text size="1.5vw" bold>
          상품 정보
        </Text>
        <Text Text size="1.5vw" is_contents>
          {post.content}
        </Text>
      </Grid>
      <CommentWrite />
      <CommentList />
      <Permit>
        <Grid is_flex margin="10vh 0 0">
          <Grid width="10rem" padding="1px">
            <Button text="상품 삭제" _onClick={() => {}} border_radius="2px" />
          </Grid>
          <Grid is_flex width="20rem">
            <Grid padding="1px">
              <Button
                text="상품 수정"
                _onClick={() => {}}
                border_radius="2px"
              />
            </Grid>

            <Grid padding="1px">
              <Button
                text={isSold ? '판매 완료' : '판매중'}
                _onClick={() => {
                  setState();
                }}
                border_radius="2px"
              />
            </Grid>
          </Grid>
        </Grid>
      </Permit>
    </Grid>
  );
};

export default PostDetail;
