import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:admin@cluster0.4vvez.mongodb.net/houserDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(() => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

const Home: NextPage = () => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  console.log(data)
  console.log(isLoading)

  return (
    <div className="container">
      <Head>
        <title>Katie Houser</title>
        <meta name="description" content="Art gallery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-7xl font-bold">Title</div>
    </div>
  );
};

export default Home;
