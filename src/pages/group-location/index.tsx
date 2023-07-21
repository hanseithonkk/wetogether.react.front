import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import L from 'leaflet';

import { CreateMeetingTitle } from '@/components';
import { UseGetGroupLocation, UsePatchGroupLocation } from '@/api/query/useGroup';
import { DestLocationIcon, LocationIcon } from '@/assets';

import * as S from './styled';

export const GroupLocationPage: React.FC = () => {
  const { groupId } = useParams<{ groupId: string }>();
  const nickname = localStorage.getItem('nickname');
  const { data, refetch } = UseGetGroupLocation({
    groupId: +(groupId ?? 0),
    nickname: nickname || '',
  });
  const [location, setLocation] = useState<string>();

  const { geolocation } = navigator;

  geolocation.getCurrentPosition(
    (position) => {
      const coords = position.coords;
      const latitude = coords.latitude;
      const longitude = coords.longitude;
      const loc = latitude.toString() + ',' + longitude.toString();
      console.log(loc);
      setLocation(loc);
    },
    () => {
      console.log('oops');
    },
  );

  const { mutate } = UsePatchGroupLocation({
    groupId: +(groupId ?? 0),
    nickname: nickname || '',
    location: location || '',
  });

  const greenIcon = L.icon({
    iconUrl: LocationIcon,
    iconSize: [47, 61],
  });

  const redIcon = L.icon({
    iconUrl: DestLocationIcon,
    iconSize: [47, 61],
  });

  const position = data?.l.location.split(',') ?? [];

  setTimeout(() => {
    refetch();
    if (location !== '') {
      mutate({});
    }
  }, 2000);

  return (
    <>
      {data ? (
        <S.GroupLocationPageContainer>
          <CreateMeetingTitle
            text={
              <>
                {data.ul.length}명이 <br />
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

            <Marker position={[+position[1], +position[0]]} icon={redIcon}>
              <Popup>{data.l.title}</Popup>
            </Marker>
            {data.ul.map(({ location, user }) => {
              const position = location.split(',');
              return (
                <Marker position={[+position[1], +position[0]]} icon={greenIcon}>
                  <Popup>{user.nickname}</Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </S.GroupLocationPageContainer>
      ) : null}
    </>
  );
};
