import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
const SessionDetail = () => {
  const { sessionId } = useParams();
  const [session, setSession] = useState({});
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get(`http://localhost:8000/api/sessions/${sessionId}/`)
      .then(response => setSession(response.data))
      .catch(error => console.error(error));
  }, [sessionId]);

  const handleEnrollment = async (e) => {
    e.preventDefault();
    try {
      const decoded = jwtDecode(token);  // Assuming token contains user info
      const userId = decoded.user_id;

      const response = await axios.post('http://localhost:8000/api/enrollments/', {
        user: userId,
        session: sessionId,
        child_name: childName,
        child_age: childAge,
      });
      alert('Enrollment successful!');
    } catch (error) {
      console.error('Error enrolling in session', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden p-6">
        <h1 className="text-2xl font-bold text-gray-900">{session.title}</h1>
        <p className="text-gray-600">{new Date(session.date).toLocaleString()}</p>
        <p className="text-gray-600">Cost: €{session.cost}</p>

        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Enroll in this Session</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Child's Name"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              className="border rounded-lg px-4 py-2 w-full"
            />
            <input
              type="number"
              placeholder="Child's Age"
              value={childAge}
              onChange={(e) => setChildAge(e.target.value)}
              className="border rounded-lg px-4 py-2 w-full"
            />
          </div>
          <button
            onClick={handleEnrollment}
            className="mt-4 bg-blue-500 text-white font-bold px-6 py-2 rounded-lg"
          >
            Enroll
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SessionDetail;
