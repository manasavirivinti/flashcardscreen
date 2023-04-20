import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="text-center">
      <p className="display-2 lead text-dark">FlashCard Screen</p>
      <p className="lead ">
      A flashcard or flash card (also known as an index card) is a card bearing information on both sides, which is intended to be 
      used as an aid in memorization. Each flashcard bears a question on one side and an answer on the other. Flashcards are often
       used to memorize vocabulary, historical dates, formulae or any subject matter that can be learned via a question-and-answer
        format. Flashcards can be virtual (part of a flashcard software), or physical.
        Flashcards are an application of the testing effect - the finding that long-term memory is increased when some of the learning
        period is devoted to retrieving the information through testing with proper feedback. Study habits affect the rate at 
        which a flashcard-user learns, and proper spacing of flashcards has been proven to accelerate learning. A number of 
        spaced repetition software programs exist which take advantage of this principle.
      </p>
      <img
        src="https://media4.giphy.com/media/l0EoBRrHj3ClWLzRm/giphy.gif?cid=ecf05e47g0tce9snduukrnl1ehv8u2ctsbutpizu446kgmf8&rid=giphy.gif&ct=g"
        width="350px"
        class="image1"
        />
    </div>
  );
}

export default Home;