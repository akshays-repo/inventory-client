import type { NextPage } from "next";

import { decrement, increment } from "../store/example.slice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const count = useAppSelector((state) => state.example.value);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      {count}
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement -
      </button>
    </div>
  );
};

export default Home;
