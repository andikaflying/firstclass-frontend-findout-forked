import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { devices } from "../../utils/constant";

const Paragraph = styled.p`
  padding-top: 2.25rem;
  white-space: pre-wrap;

  @media ${devices.responsive} {
    font-size: 0.875rem;
  }
`;

const DescriptionParagraph = ({
  splitTextArray = [],
  phoneNumberArray = [],
}) => {
  const [hiddenList, setHiddenList] = useState([]);

  const getHiddenNumber = (phone) => {
    const replacement = "XXXX";
    const result = phone.slice(0, -4) + replacement;

    return result;
  };

  useEffect(() => {
    const array = [];
    for (let i = 0; i < phoneNumberArray.length; i++) {
      array.push(true);
    }

    setHiddenList([...array]);
  }, []);

  return (
    <Paragraph>
      {Array.from(
        Array(splitTextArray.length + phoneNumberArray.length).keys()
      ).map((item, index) => {
        if (index % 2 === 1) {
          const phoneIndex = Math.floor(index / 2);

          return (
            <span
              key={index + "-split"}
              onClick={() => {
                let tempArray = hiddenList;
                tempArray[phoneIndex] = !tempArray[phoneIndex];

                setHiddenList([...tempArray]);
              }}
              style={{ cursor: "pointer" }}
            >
              {hiddenList[phoneIndex]
                ? getHiddenNumber(phoneNumberArray[phoneIndex])
                : phoneNumberArray[phoneIndex]}
            </span>
          );
        } else {
          return (
            <span key={index + "-split"}>{splitTextArray[index / 2]}</span>
          );
        }
      })}
    </Paragraph>
  );
};

export default DescriptionParagraph;
