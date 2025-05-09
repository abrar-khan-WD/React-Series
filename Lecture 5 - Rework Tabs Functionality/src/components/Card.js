import { click } from "@testing-library/user-event/dist/click";
import React from "react";
<<<<<<< HEAD
import { use } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
=======
import { FcLike } from "react-icons/fc";
>>>>>>> d6b5168afabf08262cf07f2e6ca0151138bdc223
import { toast } from "react-toastify";

const Card = (props) => {
    let course = props.course;
    console.log("Single Card", course);
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
<<<<<<< HEAD
    
    function clickHandler() {
        if(likedCourses.includes(course.id)) {
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id))) // 101,102,103 => 101,103 -> Unlike Data Hai wo yaha show ho raha hai
            toast.warning("Like Removed");
        }
        else{
            // Empty list hai likedCourses ki
            if (likedCourses.length === 0){
                setLikedCourses([course.id]);
            }
            else{
                // Non empty list hai likedCourses ki
                // 101,102,103 => 101,102,103 -> Like Data Hai wo yaha show ho raha hai
                setLikedCourses((prev) => [...prev, course.id]); // 101,102,103 => 101,102,103 -> Like Data Hai wo yaha show ho raha hai
               
            }
            toast.success("Like Added");
        }
      }
      
    
    return (
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">

            <div className="relative">
                <img src={course.image.url} alt={course.title} />

                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ? <FcLike fontSize="1.75rem" /> : <FcLikePlaceholder fontSize="1.75rem" />
                        }
                    </button>
                </div>  


            </div>

            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="text-white mt-2">
                    {
                        course.description.length > 100 ? course.description.slice(0, 100) + "..." : course.description
                    }
                </p>
                
=======
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
                   {
                        likedCourses.includes(course.id) ? (
                            <FcLike className="text-2xl" />
                        ) : (
                            <FcLike className="text-2xl opacity-50" />
                        )
                   }
                </button>
            </div>
            </div>

            <div className="p-4 flex flex-col gap-2">
                    <p className="text-white font-semibold text-md leading-6">{course.title}</p>
                    <p className="text-white text-justify">{course.description}</p>
                </div>
>>>>>>> d6b5168afabf08262cf07f2e6ca0151138bdc223
            </div>
        </div>
    )

}

export default Card;