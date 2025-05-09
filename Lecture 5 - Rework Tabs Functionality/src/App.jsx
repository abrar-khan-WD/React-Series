import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
<<<<<<< HEAD
import { apiUrl, filterData } from "./data"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "./components/Spinner";

const App = () => {

=======
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./components/Spinner";

const App = () => {
>>>>>>> d6b5168afabf08262cf07f2e6ca0151138bdc223
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
<<<<<<< HEAD
    }
    catch (error) {
=======
    } catch (error) {
>>>>>>> d6b5168afabf08262cf07f2e6ca0151138bdc223
      toast.error("Error fetching data: " + error.message);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
<<<<<<< HEAD

    <div className="min-h-screen flex flex-col">

=======
    <div className="min-h-screen flex flex-col">
>>>>>>> d6b5168afabf08262cf07f2e6ca0151138bdc223
      <div>
        <Navbar />
      </div>

<<<<<<< HEAD

    <div className="bg-bgDark2">
      
    <div>
        <Filter filterData={filterData} 
          category={category} 
          setCategory={setCategory}
        />
      </div>

      <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh] flex-wrap">
        {
          loading ? (<Spinner />) : (<Cards courses={courses}
            category = {category} 
            />)
        }
    </div>

      </div>

    </div>


  )
}

export default App;
=======
      <div className="bg bg-bgDark2 height-[100vh] bg-cover bg-no-repeat bg-center">
        <div>
          <Filter filterData={filterData}
          category = {category}
          setCategory = {setCategory}
          />
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? <Spinner /> : <Cards courses={courses}
          category={category}
          />}
        </div>
      </div>
    </div>
  );
};

export default App;
>>>>>>> d6b5168afabf08262cf07f2e6ca0151138bdc223
