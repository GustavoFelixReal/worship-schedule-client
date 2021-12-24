import { useIo } from '../contexts/SocketIoContext';
import React, { useCallback, useState } from 'react';

export default function Child() {
  const socket = useIo();

  const [name, setName] = useState('');
  const [churchId, setChurchId] = useState(0);
  const [userId, setUserId] = useState(0);

  const handleSubmit = useCallback(() => {
    const params = { name, churchId, userId };
    socket.emit('create_schedule', { params });
  }, [name, churchId, userId])

  return (
    <></>
  );
}