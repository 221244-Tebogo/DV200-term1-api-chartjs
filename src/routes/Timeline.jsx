import React, { useEffect, useState } from "react";
import axios from "axios";

const Timeline = () => {
  const [racecards, setRacecards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRacecards = async () => {
      const racecardsOptions = {
        method: "GET",
        url: "https://horse-racing.p.rapidapi.com/racecards",
        params: { date: "2020-03-12" },
        headers: {
          "X-RapidAPI-Key":
            "760d5078f9msh46aad0bfc90c7f3p11f496jsn4bbc447edfaf",
          "X-RapidAPI-Host": "horse-racing.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(racecardsOptions);
        setRacecards(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching race cards data:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchRacecards();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="container pt-3">
      <div className="row">
        <div className="col-lg-12">
          <h1>Horse Racing Cards</h1>
        </div>
      </div>
      <section
        className="carousel slide"
        data-bs-ride="carousel"
        id="postsCarousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              {racecards.map((race, index) => (
                <div key={index} className="col-md-2">
                  <div className="card h-100">
                    <div className="card-img-top card-img-top-250">
                      <img
                        className="img-fluid"
                        src={race.imageURL}
                        alt={`Race ${index + 1}`}
                      />
                    </div>
                    <div className="card-body pt-2">
                      <h6 className="small text-wide p-b-2">Course</h6>
                      <h2>
                        <a href="#">{race.course}</a>
                      </h2>
                      <p>Distance: {race.distance}</p>
                      <p>Title: {race.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#postsCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#postsCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </section>
    </section>
  );
};

export default Timeline;
