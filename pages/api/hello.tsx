// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import React, { useEffect, useState } from 'react';


const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:admin@cluster0.4vvez.mongodb.net/houserDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(() => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

const CSRPage = () => {
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
}
