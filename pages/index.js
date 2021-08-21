import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import fs from "fs/promises";
import path from "path";
const fs = require("fs").promises;

export default function Home(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => {
        return <li key={product.id}>{product.title}</li>;
      })}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend-data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return {
    props: {
      products: data.products,
    },
  };
}
