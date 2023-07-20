import React, { useEffect } from 'react';
import * as S from "./styled"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { useNavigate, useParams } from 'react-router';

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
        style={{ width: "100%", height: "60%", zIndex: '19' }}
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
      <S.MainPageBottomSection>
        <div style={{ display: 'flex' }}>
          {TAB_LIST.map(({ name, href }) => (
            <S.MainPageButton isSelected={isActive(tabName, href)} onClick={() => navigate(`/main/${href}`)}>{name}</S.MainPageButton>
          ))}
        </div>
      </S.MainPageBottomSection>
    </S.MainPageContainer>
  );
};
