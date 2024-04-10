// import "./Home.css"
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch("/api/v1/exercises/index")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setExercises(data);
      })
      .catch(error => {
        console.error('There was an error fetching exercises:', error);
      });
  }, []);

  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    fetch("/api/v1/trainings/index")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setTrainings(data);
      })
      .catch(error => {
        console.error('There was an error fetching trainings:', error);
      });
  }, []);


  return (
    <div>
      <div className="grid-display">
        <h1>Exercises</h1>
        <ul>
          {exercises.map(exercise => (
            <li key={exercise.id}>{exercise.name} - {exercise.trainings} - {exercise.price}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Trainings</h1>
        <ul>
          {trainings.map(training => (
            <li key={training.id}>{training.total}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
