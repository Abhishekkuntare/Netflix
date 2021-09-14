import React from "react";
import "./Trialer.css";

const Trialer = () => {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <div>
      <img className="trialer__image1"
        src="https://i.ytimg.com/vi/rG2zzfA-UW0/maxresdefault.jpg" alt="" />
      <header
        className="banner trailer"

      >
        <div className="banner__contents">
          <h1 className="banner__title">One Last Thinks </h1>
          <div className=" trialer__title ">
            <p>2021 |</p>
            <button>18+</button> |<p>Movie |</p>
            <p>Uv TV Shows |</p>
          </div>
          <h6 className="trialer__des">
            <p> Director:- Tim Rouhana </p>
            <p> Writer:- Tim Rouhana</p>
            <p>Stars:- PierceJurnee production,</p>

            <p>box office & company:- info 18 User reviews</p>
          </h6>
        </div>
      </header>
      <iframe
        className="trailer__trailer"
        width="1518"
        height="748"
        // width="500"
        // height="320"
        src="https://www.youtube.com/embed/ibHqoLHFtfc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default Trialer;
