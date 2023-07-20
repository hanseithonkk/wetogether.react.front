import React, { useEffect } from 'react';
import * as S from "./styled"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { useNavigate, useParams } from 'react-router';
import { MeetingBox } from '@/components';
import { FaPlus } from "react-icons/fa"

export interface TabListProps {
  name: string;
  href: string;
}

export const TAB_LIST: TabListProps[] = [
  {
    name: '내 근처',
    href: 'close'
  },
  {
    name: '내 친구',
    href: 'friend'
  }
]

export const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const { tabName } = useParams<{ tabName: string }>();

  const isActive = (activeTab?: string, tabName?: string) => activeTab === tabName;

  return (
    <S.MainPageContainer>
      <S.MainPageTitle>모임 찾기</S.MainPageTitle>
      <MapContainer
        center={[37.55179, 126.95171]}
        zoom={20}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "60%", zIndex: '10' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[37.55179, 126.95171]}>
          <Popup>
            <span>A pretty CSS3 popup. <br /> Easily customizable.</span>
          </Popup>
        </Marker>
      </MapContainer>
      <S.MainPageBottomContainer>
        <S.MainPageAddButtonWrapper onClick={() => navigate('/create-meeting/step1')}>
          <FaPlus size={30} color='white' />
        </S.MainPageAddButtonWrapper>
        <S.MainPageBottomSection>
          <S.MainPageButtonWrapper>
            {TAB_LIST.map(({ name, href }) => (
              <S.MainPageButton isSelected={isActive(tabName, href)} onClick={() => navigate(`/main/${href}`)}>{name}</S.MainPageButton>
            ))}
          </S.MainPageButtonWrapper>
          <S.MainPageMeetBoxContainer>
            <MeetingBox title='한세톤 같이 하실 분' place='한세사이버보안고등학교 (0.1km)' joinPeople='2/50명 참여' time='2023년 7월 20일, 15시 00분' id={1} />
            <MeetingBox title='아침 조깅 같이 하실 분' place='여의도한강공원 (5.7km)' joinPeople='49/50명 참여' time='매일 7시 00분' id={2} />
          </S.MainPageMeetBoxContainer>
        </S.MainPageBottomSection>
      </S.MainPageBottomContainer>
    </S.MainPageContainer>
  );
};
