import { useNavigate } from 'react-router';
import LocationPicker from 'react-leaflet-location-picker';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useSetRecoilState } from 'recoil';

import { Button, CreateMeetingTitle } from '@/components';
import { CreateMeetingState } from '@/atom';

import * as S from './styled';

export interface CreateMeetingStep2Values {
  name: string;
  location: string;
}

export const CreateMeetingStep2: React.FC = () => {
  const { handleSubmit } = useForm<CreateMeetingStep2Values>();
  const createMeeting = useSetRecoilState(CreateMeetingState);
  const navigate = useNavigate();
  const [pm, setPm] = useState<any>([]);

  const vp: any = {
    center: [37.55179, 126.95171],
    zoom: 17,
  };
  const pointMode: any = {
    banner: false,
    control: {
      values: pm,
      onClick: (point: any) => {
        setPm([point]);
      },
      onRemove: (point: any) => console.log("I've just been clicked for removal :(", point),
    },
  };

  const onValid = () => {
    if (pm.length !== 0) {
      createMeeting((prev) => ({ ...prev, location: pm[0].reverse().toString() }));
      navigate(`/create-meeting/step3`);
    }
  };

  const nickname = localStorage.getItem('nickname');

  useEffect(() => {
    if (!nickname) {
      navigate('/');
    }
  }, []);

  return (
    <S.CreateMeetingStep2PageContainer onSubmit={handleSubmit(onValid)}>
      <S.CreateMeetingStep2PageTopSection>
        <CreateMeetingTitle text="어디서 모일까요?" />
      </S.CreateMeetingStep2PageTopSection>
      <LocationPicker
        pointMode={pointMode}
        bindMap={true}
        startPort={vp}
        showControls={false}
        showInputs={false}
        precision={10}
        mapStyle={{ width: '100%', height: '80%', zIndex: '19' }}
      />
      {/* <MapContainer
        center={[37.55179, 126.95171]}
        zoom={20}
        scrollWheelZoom={true}
        tap={true}
        style={{ width: '100%', height: '60%', zIndex: '19' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[37.55179, 126.95171]}>
          <Popup>
            <span>
              A pretty CSS3 popup. <br /> Easily customizable.
            </span>
          </Popup>
        </Marker>
      </MapContainer> */}
      <div style={{ width: '100%' }}>
        <Button text="계속" onClick={onValid} />
      </div>
    </S.CreateMeetingStep2PageContainer>
  );
};
