import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Naviagte, Navigate } from "react-router-dom";
import Header from './Header/header';
import Courses from './Courses/Courses';
import Footer from './Footer/footer';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Lesson from './Lesson/Lesson';
import CoursesService from './Service/coursesService';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            selectedCourse: {},
            currentUser: {},
            lesson:{}
        }
    }
    componentDidMount() {
        this.loadCourses();
        this.getCourse();
    }
    loadCourses = () => {
        CoursesService.fetchCourses()
            .then((response) => {
                this.setState({
                    courses: response.data
                })
                console.log(response.data);
            });
    }
    getCourse = () => {
      CoursesService.fetchCourse("1")
        .then((response) => {
          this.setState({
            selectedCourse: response.data,
            lesson: response.data.lessons[0]
           
          })
          console.log(response.data.lessons[0])
        });
    }
    getUser = () => {
        CoursesService.fetchUser()
        .then((response) => {
          this.setState({
            currentUser: response.data
          })
        });
    }
    openLesson = {

    }
    render() {

        return (

            <Router>
                <Header />
                <div className="container-sm pt-4 pb-4 darker">
                    <Routes>
                        {/* <Route path={"/books/add"}
                        element={<AddBook
                            authors={this.state.authors}
                            categories={this.state.categories}
                            onAddBook={this.addBook}
                            book={this.state.selectedBook}
                        />}
                    />
                    <Route path={"/books/edit/:id"}
                        element={<EditBook
                            authors={this.state.authors}
                            categories={this.state.categories}
                            book={this.state.selectedBook}
                            onEditBook={this.editBook}
                        />}
                    /> */}
                        <Route path={"/courses"}
                            element={
                                <Courses courses={this.state.courses} />
                            }
                        />
                        {/* <Route path={"/books"}
                        element={<Books
                            books={this.state.books}
                            authors={this.state.authors}
                            categories={this.state.categories}
                            onEdit={this.getBook}
                            onDelete={this.deleteBook}
                            onMarkAsTaken={this.markAsTaken}
                        />}
                    />*/}
                    <Route path={"/home"}
                        element={
                           <Home selectedCourse = {this.state.selectedCourse}/>
                        }
                    /> 
                    <Route path={"/profile"}
                        element={
                           <Profile user = {this.state.currentUser}/>
                        }
                    /> 
                     <Route path={"/lesson"}
                        element={
                           <Lesson lesson={this.state.lesson} />
                        }
                    /> 
                    <Route path={"/"}
                        element={
                            <Navigate to={"/home"}/>
                        }
                    /> 
                    </Routes>

                </div>
                <Footer />
            </Router>

        );
    }

}

export default App;
