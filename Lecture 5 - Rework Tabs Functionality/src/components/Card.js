import React from "react";
import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";

const  Card = (props) => {
    let course = props.course;
    console.log("Single Card", course);
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    function clickHandler() {
        //logic
        if (likedCourses.includes(course.id)) {
            // pehle se like kiya hua hai
            setLikedCourses((prev) => prev.filter((cid)=> (cid !== course.id)));
            toast.warning("Course Unliked");
        }
        else{
            // pehle se like nahi kiya hua hai
            if(likedCourses.length === 0) {
                setLikedCourses([course.id])
            }
            else {
                setLikedCourses((prev) => [...prev, course.id])
            }
            toast.success("Course Liked");
        }
    }
    return(
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">

            <div className="relative w-full"> 
                <img src={course.image.url} alt={course.title} />
            

            <div className="w-[40px] h-[40px] bg-white rounded-full absolute top-[9rem] right-2 flex justify-center items-center">
                <button onClick={clickHandler}>
                    <FcLike fontSize= "1.4rem" />
                </button>
            </div>
            </div>

            <div className="p-4 flex flex-col gap-2">
                    <p className="text-white font-semibold text-md leading-6">{course.title}</p>
                    <p className="text-white text-justify">{course.description}</p>
                </div>
            </div>
    )

}

export default Card;