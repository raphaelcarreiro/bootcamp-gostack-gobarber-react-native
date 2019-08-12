import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';
import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Appointment({ data }) {
  console.tron.log(data.provider.avatar.url);
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.date]);

  return (
    <Container past={data.past}>
      <Left>
        <Avatar
          source={{
            uri: data.provider.avatar
              ? `http://192.168.0.2:3333/files/${data.provider.avatar.path}`
              : 'https://api.adorable.io/avatar/50/rocketseat.png',
          }}
        />

        <Info>
          <Name>{data.provider.name}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>
    </Container>
  );
}

Appointment.propTypes = {
  data: PropTypes.shape({
    provider: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
    date: PropTypes.date,
  }).isRequired,
};
