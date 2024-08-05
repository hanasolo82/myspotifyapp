import React, { useEffect } from "react";

export default function InformationCalls() {
  const baseURL = "https://accounts.spotify.com/api/token";
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const secretKey = process.env.REACT_APP_SECRET_KEY;
  const credentials = btoa(`${clientId}:${secretKey}`);
//solicitud del token
  async function tokenAccess() {
    try {
      const response = await fetch(baseURL, {
        method: "POST",
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "client_credentials"
        }),
      });
      if (response.ok) {
        const data = await response.json();
        const token = data.access_token;
        alert(`Access Token: ${token}`);
        console.log('Access Token: ', token)
      } else {
        console.error("Error fetching token:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    tokenAccess();
  }, []);

  return (
    <div>
      <button onClick={tokenAccess}>Get Token</button>
    </div>
  );
}