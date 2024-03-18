import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Bgimage from "../assets/bg_Start.png";

export default function Start() {

    const title_image = "https://cdn.discordapp.com/attachments/1183273568184832104/1219295549707128913/SCANSCORE.png?ex=660ac878&is=65f85378&hm=89d1425cf17ad4d2f2a36150809cc477c638325b83b5ad73231f15e438f34719&"
  return (
    <Container>
      <div className="box_content">
        <div className="title_container">
          <div className="main_title">
            <img src={title_image} alt="" />
          </div>
          <p className="title_des">
            Exam Answer Paper Valuation and Marksheet Generation using AI
          </p>
          <Link to="/scan-score" className="start_btn">
            Get Started
          </Link>
        </div>

        <div className="container">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Valuating answer sheets made easy</h2>
              <ul className="list-disc">
                <li className="list-item">
                  🤖 Create exam valuators by uploading question papers and
                  criteria
                </li>
                <li className="list-item">
                  📄 Bulk upload answer sheets and let AI value them
                </li>
                <li className="list-item">
                  ⏰ Save time on answer paper valuation
                </li>
                <li className="list-item">📝 Review marks assigned by AI</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Generate marklists with ease</h2>
              <ul className="list-disc">
                <li className="list-item">
                  📝 Generate marklists for each exam
                </li>
                <li className="list-item">📄 Export marklists as CSV files</li>
                <li className="list-item">
                  📊 View overall statistics for each exam
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url(https://cdn.discordapp.com/attachments/1207033542677372928/1218420871945916416/HOME3.png?ex=660799dd&is=65f524dd&hm=e23ff46d918575a4d0e3a8d410c583ccaace6dfb055990c52e1acf536388847b&);
  background-size: cover;
  .box_content {
    /* backdrop-filter: blur(20px); */
    color: #fff;
  }

  .title_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
  }

  .main_title {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 40px;
   
 
  
  }

  .title_des {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: rgba(255, 255, 255, 0.8);
  }

  .start_btn {
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
    background: linear-gradient(32deg, #ffcc70, #c850c0, #4158d0);
    border-radius: 20px;
    color: #fff;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;

    transition: transform 0.3s ease;
    transform-origin: center;

    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  .start_btn:hover {
    transform: scale(1.05);
  }

  .start_btn:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
  }
  .container {
    margin-top: 4rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 2rem;
  }

  @media (min-width: 768px) {
    .container {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  .card {
    backdrop-filter: blur(20px);
    background-color: transparent;
    border-bottom: 1px solid #e2e8f0;
  }

  .card-body {
    color: #ffffff;
    padding: 2rem;
  }

  .card-title {
    font-size: 1.875rem; /* Approximate conversion for text-3xl */
    font-weight: bold;
    margin-bottom: 1.25rem;
  }

  .list-disc {
    list-style-type: disc;
    padding-left: 1.5rem;
  }

  .list-item {
    margin-bottom: 0.5rem;
  }
`;
