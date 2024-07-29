import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChatRoomsList = () => {
  const [chatRooms, setChatRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(async () => {
   await axios.get('api/signup/')
      .then(response => {
        setChatRooms(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
      ChatRoomsList()
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading chat rooms: {error.message}</p>;

  return (
    <div>
      <h1>Chat Rooms</h1>
      <ul>
        {chatRooms.map(room => (
          <li key={room.name}>{room.name} - Created on: {new Date(room.created).toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChatRoomsList;
