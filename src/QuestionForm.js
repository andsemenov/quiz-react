import React, { useState } from "react";
import { Button, Form, Radio } from "semantic-ui-react";
import questions from "./data";

const QuestionForm = () => {
  const [counterQuestion, setCounterQuestion] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  console.log(questions);
  console.log(questions[counterQuestion - 1]);
  console.log(selectedAnswer);

  const handleChange = (event, { value }) => setSelectedAnswer(value);

  return (
    <>
      <Form
        onSubmit={() => {
          setCounterQuestion((prev) => prev + 1);
        }}
      >
        <p>
          Question {counterQuestion} from {questions.length}
        </p>
        <p>{questions[counterQuestion - 1].question}</p>
        {questions[counterQuestion - 1].options.map((option, index) => {
          console.log("option", option, typeof option);
          return (
            <Form.Field>
              <Radio
                label={option}
                value={option}
                checked={selectedAnswer === option}
                onChange={handleChange}
              />
            </Form.Field>
          );
        })}

        <Button type="submit">Next</Button>
      </Form>
    </>
  );
};

/* 
const QuestionForm = () => {
  const [salue, setSvalue] = useState(null);
  const handleChange = (event, { value }) => setSvalue(value);

  console.log(salue);
  return (
    <Form>
      <Form.Field>
        Selected value: <b>{salue}</b>
      </Form.Field>
      <Form.Field>
        <Radio
          label="Choose this"
          name="radioGroup"
          value="some1"
          checked={salue === "some1"}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <Radio
          label="Or that"
          name="radioGroup"
          value="some2"
          checked={salue === "some2"}
          onChange={handleChange}
        />
      </Form.Field>
    </Form>
  );
}; */

export default QuestionForm;
