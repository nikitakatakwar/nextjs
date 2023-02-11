import Navbar from "../../components/Navbar";
import styles from '../../styles/Home.module.css';

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((curElem) => {
    return {
      params: {
        pageNo: curElem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const myData = ({ data }) => {
  const { id, title, body } = data;
  return (
    <>
      <Navbar />
      <div className={styles.ssr}>
        <h3>{id}</h3><br></br>
        <h2>{title}</h2><br></br>
        <p>{body}</p>
      </div>
    </>
  );
};

export default myData;

