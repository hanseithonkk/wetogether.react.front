import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate, useParams } from 'react-router';

import { Footer, MeetingBox } from '@/components';
import { useGetGroup } from '@/api/query/useGroup';

import * as S from './styled';

export interface TabListProps {
  name: string;
  href: string;
}

export const TAB_LIST: TabListProps[] = [
  {
    name: '내 근처',
    href: 'close',
  },
  {
    name: '내 친구',
    href: 'friend',
  },
];

export const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const { data } = useGetGroup();
  const { tabName } = useParams<{ tabName: string }>();

  const isActive = (activeTab?: string, tabName?: string) => activeTab === tabName;

  return (
    <>
      <S.MainPageContainer>
        <S.MainPageTitle>모임 찾기</S.MainPageTitle>
        <MapContainer
          center={[37.55179, 126.95171]}
          zoom={20}
          scrollWheelZoom={true}
          style={{ width: '100%', height: '60%', zIndex: '10' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {data?.map((value) => {
            const position = value.location.split(',');
            return (
              <Marker position={[+position[1], +position[0]]}>
                <Popup>{value.title}</Popup>
              </Marker>
            );
          })}
        </MapContainer>
        <S.MainPageBottomContainer>
          <S.MainPageBottomSection>
            <S.MainPageButtonWrapper>
              {TAB_LIST.map(({ name, href }) => (
                <S.MainPageButton
                  isSelected={isActive(tabName, href)}
                  onClick={() => navigate(`/main/${href}`)}
                >
                  {name}
                </S.MainPageButton>
              ))}
            </S.MainPageButtonWrapper>
            <S.MainPageMeetBoxContainer>
              {data?.map(({ id, title, maxUser, users, locationString, meetingDate }) => {
                const date = new Date(Date.parse(meetingDate));
                const year = date.getFullYear();
                const month = date.getMonth();
                const day = date.getDay();
                const hour = date.getHours();
                const minutes = date.getMinutes();
                return (
                  <MeetingBox
                    title={title}
                    place={locationString}
                    joinPeople={users.length + '/' + maxUser + '명 참여'}
                    time={`${year}년 ${month}월 ${day}일, ${hour}시 ${minutes}분`}
                    href={`/meeting/${id}`}
                  />
                );
              })}
            </S.MainPageMeetBoxContainer>
          </S.MainPageBottomSection>
        </S.MainPageBottomContainer>
      </S.MainPageContainer>
      <Footer />
    </>
  );
};
