import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const MessageStudent = () => {
  const [jobs, setJobs] = useState([]);
  const [events, setEvents] = useState([]);
const [user,setUser]=useState([])
console.log(user);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/job/getJobs');
        setJobs(response.data.jobs);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/user/admin/me');
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/event/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchUser()
    fetchJobs();
    fetchEvents();
  }, []);

  return (
    <section className="dashboard page">
      <div className="banner">
        <div className="firstBox">
          <img src="/avatar.png" alt="avatar" className="avatar" />
          <div className="content">
            <div className="text-content">
              <p>Bonjour ,</p>
              <h5></h5>
            </div>
          </div>
          <FontAwesomeIcon icon={faEdit} className="edit-icon" />
        </div>
        <div className="secondBox">
          <p>Les Rendez-Vous</p>
          <h3>{jobs.length}</h3>
        </div>
        <div className="thirdBox">
          <p>Les Inscrit</p>
          <h3>{events.length}</h3>
        </div>
      </div>
      <div className="banner">
        <h5>Rendez-Vous</h5>
        <table>
          <thead>
            <tr>
              <th>Étudiant</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Date</th>
              <th>Niveau anglais</th>
              <th>Visite</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
        
        </tbody>
      </table>
    </div>
  </section>
);
};
  


export default MessageStudent

