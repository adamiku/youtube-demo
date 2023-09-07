import { Suspense } from "react";
import TodosList from "./todos/TodosList";

const Home = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading the todos</p>}>
        <h1>loading todos</h1>
        <div className="flex space-x-2">
          <TodosList />
        </div>
      </Suspense>

      <Suspense fallback={<p>Loading the trolley</p>}>
        <h1>loading shopping trolley</h1>
        <div className="flex space-x-2">
          <TodosList />
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
