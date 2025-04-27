import React from "react";
import Head from "next/head";

const Page = () => {
  return (
    <div>
      <Head>
        <title>Concept Coaching Classes</title>
        <meta
          name="description"
          content="Welcome to Concept Coaching Classes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          display: "flex",
          flexDirection: " column",
          justifyContent: "center",
          height: "100vh",
          textAlign: "center",
          backgroundColor: "#F3F4F6",
          padding: "20px",
        }}
      >
        <h2 style={{ marginTop: "20px", color: "#333", fontFamily: "Verdana" }}>
          Welcome to Concept Coaching Classes!
        </h2>
        <p
          style={{
            marginTop: "10px",
            color: "#555",
            fontSize: "18px",
            maxWidth: "600px",
          }}
        >
          Your journey to mastering concepts starts here. We’re here to make
          learning effective and fun for you!
        </p>
        <footer style={{ marginTop: "50px", color: "#4A90E2" }}>
          Thank you for choosing us!
        </footer>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px",
          }}
        >
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="48" stroke="#4A90E2" strokeWidth="4" />
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#4A90E2"
              fontSize="12"
              fontWeight="bold"
            >
              C3
            </text>
          </svg>
          <h1
            style={{
              color: "#4A90E2",
              fontFamily: "Arial",
              marginLeft: "10px",
            }}
          >
            Concept Coaching Classes
          </h1>
        </div>
      </main>
    </div>
  );
};

export default Page;
