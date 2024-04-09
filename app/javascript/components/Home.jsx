
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  console.log(exercises);

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

  return (
    <div>
      <h1>Exercises</h1>
      <ul>
        {exercises.map(exercise => (
          <li key={exercise.id}>{exercise.name} {exercise.trainings}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
