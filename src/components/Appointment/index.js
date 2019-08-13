import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';
import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Appointment({ data, onCancel }) {
  console.tron.log(data.provider.avatar.url);
  const dateParsed = useMemo(
    () =>
      formatDistance(parseISO(data.date), new Date(), {
        locale: pt,
        addSuffix: true,
      }),
    [data.date]
  );

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

      {data.cancelable && !data.canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}
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
    date: PropTypes.string,
    cancelable: PropTypes.bool,
    canceled_at: PropTypes.string,
    past: PropTypes.bool,
  }).isRequired,
  onCancel: PropTypes.func.isRequired,
};
