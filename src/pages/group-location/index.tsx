import React from 'react';
import { useParams } from 'react-router-dom';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import { CreateMeetingTitle } from '@/components';
import { UseGetGroupLocation, useGetGroup } from '@/api/query/useGroup';

import * as S from './styled';

export const GroupLocationPage: React.FC = () => {
  const { groupId } = useParams<{ groupId: string }>();
  const nickname = localStorage.getItem('nickname');
  const { data } = UseGetGroupLocation({
    groupId: +(groupId ?? 0),
    nickname: nickname || '',
  });
  console.log(data);
  return (
    <>
      {data ? (
        <S.GroupLocationPageContainer>
          <CreateMeetingTitle
            text={
              <>
                {data.length}명이 <br />
                모임으로 가고 있어요
              </>
            }
          />
          <MapContainer
            center={[37.55179, 126.95171]}
            zoom={20}
            scrollWheelZoom={true}
            style={{ width: '100%', height: '100%', zIndex: '10' }}
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
        </S.GroupLocationPageContainer>
      ) : (
        <>
          <S.GroupLocationPageContainer>
            <h1>loading...</h1>
          </S.GroupLocationPageContainer>
        </>
      )}
    </>
  );
};
