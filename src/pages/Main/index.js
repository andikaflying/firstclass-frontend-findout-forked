import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import DescriptionParagraph from "./DescriptionParagraph";
import {
  LaunchingSoon,
  BottomContent,
  ImageBox,
  Chevron,
  Price,
  AddressBox,
  AddressHeadline,
  ProjectInfo,
} from "./styles";

export default function Main({
  address,
  availabilities_label,
  description,
  ownership_type,
  pic,
  project_type,
  psf_max,
  psf_min,
  subprice_label,
  title,
  year,
}) {
  const [isDisplayDescription, setIsDisplayDescription] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [phoneNumberList, setPhoneNumberList] = useState([]);
  const [splitTexts, setSplitTexts] = useState([]);

  const splittingText = ({ word }) => {
    //get phone number
    const regex = /\d{4} ?\d{4}/g;
    const matches = word.matchAll(regex);
    const result = [];
    for (const match of matches) {
      result.push(match[0]);
    }
    setPhoneNumberList([...result]);

    //split texts that doesn't match regex
    const splitArray = word.split(regex);
    setSplitTexts([...splitArray]);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    splittingText({ word: description });
  }, []);

  return (
    <>
      <ImageBox className="imageBox">
        {isLoading ? (
          <Skeleton className="skeleton" duration={0.5} />
        ) : (
          <LazyLoadImage
            alt="House Image"
            className="mainPic"
            width="100%"
            src={pic}
          />
        )}
        <LaunchingSoon className="launchingSoon" src="./launching-soon.svg" />
        <Chevron className="chevron" position="left" src="./chevron-left.svg" />
        <Chevron
          className="chevron"
          position="right"
          src="./chevron-right.svg"
        />
      </ImageBox>
      <div className="mainContent">
        <div className="topContent">
          <AddressBox>
            <AddressHeadline>
              <img
                className="icon"
                src={process.env.PUBLIC_URL + "/building-icon.svg"}
              />
              <div className="addressHeadline">
                <h2 className="title">{title}</h2>
                <span className="address">{address}</span>
              </div>
            </AddressHeadline>
            <ProjectInfo>
              <span>{`${project_type} . ${year} . ${ownership_type}`}</span>
              <span>{availabilities_label}</span>
            </ProjectInfo>
          </AddressBox>
          <Price>
            <span className="psfPrice">{`$${psf_min.toLocaleString()} - $${psf_max.toLocaleString()} psf`}</span>
            <span className="psfSubPrice">{subprice_label}</span>
          </Price>
        </div>
        <BottomContent>
          <button
            className="seeDescription"
            onClick={() => setIsDisplayDescription(!isDisplayDescription)}
          >
            See description
          </button>
          {isDisplayDescription && (
            <DescriptionParagraph
              splitTextArray={splitTexts}
              phoneNumberArray={phoneNumberList}
            />
          )}
        </BottomContent>
      </div>
    </>
  );
}
