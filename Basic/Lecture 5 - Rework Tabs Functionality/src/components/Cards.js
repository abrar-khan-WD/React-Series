import React, { useState } from "react";
import Card from "./Card"
import { useState } from "react";

const Cards = (props) => {
    let courses = props.courses;
    console.log("Cards", courses);
<<<<<<< HEAD
    let category = props.category;

    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses() {
        if (category === "All") {

            let allCourses = [];
            Object.values(courses).forEach(array => {

                array.forEach(courseData => {
                    allCourses.push(courseData);
                });

            });
            return allCourses;
        }
        else {
            return courses[category];
        }

    }


    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4" >
            {
                getCourses().map((course) => (
                    <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
=======
    const [likedCourses, setLikedCourses] = useState([]); 

    let category = props.category;

    function getCourses() {
        if (category === "All"){
            let allCourses = [];
            Object.values(courses).forEach(array => {
               
                    array.forEach(courseData => {
                        allCourses.push(courseData);
                    });
                
            });
            return allCourses;
        }
        else{
            return courses[category]
        }
        }
    


    return (
        <div className="flex flex-wrap justify-center gap-4 mt-4">
            {
                getCourses().map((course) => (
                    <Card key={course.id} course={course} 
                    likedCourses={likedCourses}
                    setLikedCourses={setLikedCourses}
                    />
>>>>>>> d6b5168afabf08262cf07f2e6ca0151138bdc223
                ))
            }
        </div>
    )

}

export default Cards;