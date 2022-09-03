import axios from "../CustomAxios/axios";

const CoursesService = {
    fetchCourses: () => {
        return axios.get("/courses");
    },
    fetchCourse: (id) => {
        return axios.get(`/courses/${id}`);
    },
    fetchUser: () => {
        return axios.get("/user")
    },
    saveUser: (username, name, surname, city, country, email) =>{
        return axios.put('/user/edit',{
            "username" : username,
            "name" : name,
            "surname" : surname,
            "city" : city,
            "country" : country,
            "email" : email
        })
    }
}
export default CoursesService;