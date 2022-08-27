import axios from "../CustomAxios/axios";

const CoursesService = {
    fetchCourses: () => {
        return axios.get("/courses");
    },
    fetchCourse: (id) => {
        return axios.get(`/courses/${id}`);
    },
    fetchUser: () => {
        return axios.get("/courses/user")
    }
}
export default CoursesService;