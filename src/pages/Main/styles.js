import styled, { css } from "styled-components";
import { devices } from "../../utils/constant";

export const ImageBox = styled.div`
  position: relative;

  .imageBox:hover img.chevron {
    display: block;
  }
`;

export const LaunchingSoon = styled.img`
  position: absolute;
  top: 0.75rem;
  left: -0.5rem;
  width: 240px;

  @media ${devices.responsive} {
    left: -0.25rem;
    width: 180px;
  }
`;

export const Chevron = styled.img`
  position: absolute;
  top: 0rem;
  bottom: 0rem;
  margin: auto 0;
  width: 2rem;
  display: none;

  ${(props) => {
    switch (props.position) {
      case "left":
        return css`
          left: 1rem;

          @media ${devices.responsive} {
            left: 0.5rem;
          }
        `;
      case "right":
        return css`
          right: 1rem;
          @media ${devices.responsive} {
            right: 0.5rem;
          }
        `;
    }
  }}

  @media ${devices.responsive} {
    width: 1rem;
  }
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;

  & > .psfPrice {
    font-style: normal;
    font-weight: 600;
    font-size: 1.25rem;
  }

  & > .psfSubPrice {
    font-size: 0.875rem;
    color: #787d9c;
    text-align: right;
  }

  @media ${devices.responsive} {
    flex-direction: row;
    margin-top: 0.75rem;

    & > .psfPrice {
      font-size: 1rem;
    }

    & > .psfSubPrice {
      margin-left: 0.5rem;
      margin-top: auto;
      margin-bottom: auto;
      font-size: 0.75rem;
    }
  }
`;

export const AddressBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddressHeadline = styled.div`
  display: flex;

  & .addressHeadline {
    margin-left: 1rem;
  }

  & .title {
    margin: 0px;
  }

  & .address {
    font-size: 0.875rem;
    color: #787d9c;
  }

  @media ${devices.responsive} {
    & .address {
      font-size: 0.875rem;
    }

    & .title {
      font-size: 1rem;
    }
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.75rem;

  @media ${devices.responsive} {
    font-size: 0.875rem;
  }
`;

export const BottomContent = styled.div`
  & > button.seeDescription {
    float: right;
    color: #216bff;
    background-color: transparent;
    border: none;
    font-weight: 600;
    font-family: "Avenir";
    width: fit-content;
    font-size: 1rem;
    cursor: pointer;
  }

  @media ${devices.responsive} {
    margin-top: 1rem;

    & > button.seeDescription {
      font-size: 0.875rem;
    }
  }
`;
