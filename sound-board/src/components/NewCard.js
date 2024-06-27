
import React from "react";


const NewCard = () => {

    return (
        <div>
            <h1>Hello form!</h1>
            <button>Submit!</button>
        </div>
    )

}

export default NewCard;


/*
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewCard = ({ addCard }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate(); // Updated from useHistory to useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    addCard({ title, description });
    navigate('/'); // Navigate to the card list page
  };

  return (
    <div>
      <h1>Create a New Card</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        ></textarea>
        <button type="submit">Add Card</button>
      </form>
    </div>
  );
};
*/

//export default NewCard;
