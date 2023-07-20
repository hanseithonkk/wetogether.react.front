import React, { useState } from "react";
import * as S from "./styled"
import { UserImage } from "@/assets";
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { Button, MeetingIcon } from "@/components";

export const MeetingPage: React.FC = () => {
    const [like, setLike] = useState(false);

    return (
        <S.MeetingPageContainer>
            <S.UserSection>
                <S.UserInfoContainer>
                    <S.UserImage src={UserImage} />
                    <div>
                        <S.Username>박찬영</S.Username>
                        <S.UserDescription>관심 4건 · 참석 2건</S.UserDescription>
                    </div>
                </S.UserInfoContainer>
                {like ?
                    <FaHeart onClick={() => setLike(!like)} size={30} color={'#EA3939'} /> :
                    <FaRegHeart onClick={() => setLike(!like)} size={30} color={'#5B5B5B'} />
                }
            </S.UserSection>
            <S.MeetingTitle>한세톤 같이 하실래요?</S.MeetingTitle>
            <MeetingIcon place="한세사이버보안고등학교 (0.1km)" joinPeople="2/50명 참여" time="2023년 7월 20일, 15시 00분" />
            <S.MeetingPageDescription>
                7월 20일 부터 21일까지 무박 2일 프로그래밍 해커톤 대회를 개최해요.<br />
                혹시 관심 있으시면 연락해주세요!
            </S.MeetingPageDescription>
            <S.MeetingPageWaringBox>
                <S.MeetingWarningBoxTitle>참여하기 전에 꼭 읽어주세요!</S.MeetingWarningBoxTitle>
                <S.MeetingWarningDescription>준비물로는 개발에 필요한 노트북, 키보드, 마우스 등이 필요해요.<br />
                    대회 시작 후에는 외부 입출입이 제한되므로 개발에 필요한 준비물을 잘 준비해주세요.</S.MeetingWarningDescription>
            </S.MeetingPageWaringBox>
            <S.MeetingTitle>참여자 목록</S.MeetingTitle>
            <S.MeetingPeopleList>
                <S.MeetingPagePeopleItems>
                    <S.MeetingPagePeopleContainer>
                        <S.MeetingPagePeopleImage src={UserImage} />
                        <div>
                            <S.MeetingPagePeopleName>서주</S.MeetingPagePeopleName>
                            <S.MeetingPagePeopleDescription>이 대회 1등 하려 왔습니다.</S.MeetingPagePeopleDescription>
                        </div>
                    </S.MeetingPagePeopleContainer>
                </S.MeetingPagePeopleItems>
                <S.MeetingPagePeopleItems>
                    <S.MeetingPagePeopleContainer>
                        <S.MeetingPagePeopleImage src={UserImage} />
                        <div>
                            <S.MeetingPagePeopleName>앙기모링</S.MeetingPagePeopleName>
                            <S.MeetingPagePeopleDescription>백엔드 개발 하고있습니다</S.MeetingPagePeopleDescription>
                        </div>
                    </S.MeetingPagePeopleContainer>
                </S.MeetingPagePeopleItems>
            </S.MeetingPeopleList>
            <S.MeetingPageInput placeholder="간단한 내 소개를 작성해주세요." />
            <div>
                <Button text='참여하기' />
            </div>
        </S.MeetingPageContainer>
    )
}