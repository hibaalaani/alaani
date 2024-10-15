import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProgrammingSessions = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:8000/api/sessions/', {
      headers: {
          Authorization: `Bearer ${token}`,  // Send token in the header
      }})
      .then((response) => {
        console.log(response);
        setSessions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching sessions', error);
      });
  }, []);



  // Helper function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Available Programming Sessions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sessions.map(session => (
          <div key={session.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900">{session.title}</h2>
              <p className="text-gray-600">{new Date(session.date).toLocaleString()}</p>
              <p className="text-gray-600">Cost: €{session.cost}</p>
              <div className="mt-4">
                <Link to={`/session/${session.id}`} className="text-blue-500 hover:underline">
                  View More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default ProgrammingSessions;
