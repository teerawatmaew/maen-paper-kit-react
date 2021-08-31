import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import Homepage from "views/Homepage";
import Login from "views/main/Login";
import CheckResult from "views/main/CheckResult";
import Creature from "views/main/Creature";
import Report from "views/main/Report";
import Member from "views/main/Member";

import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";

import StudentHomepage from "./views/student/StudentHomepage";
import SelectLesson from "./views/student/SelectLesson";
import Pretest from "./views/student/lesson/Pretest";
import Posttest from "./views/student/lesson/Posttest";
import Assessment from "./views/student/lesson/Assessment";
import LessonFirstTest from "./views/student/lesson/LessonFirstTest";
import LessonDetail from "./views/student/lesson/LessonDetail";
import LessonFirstWork from "./views/student/lesson/LessonFirstWork";
import LessonFirstBoard from "./views/student/lesson/LessonFirstBoard";
import LessonSecondWork from "./views/student/lesson/LessonSecondWork";
import LessonSecondBoard from "./views/student/lesson/LessonSecondBoard";
import LessonWaiting from "./views/student/lesson/LessonWaiting";
import LessonThirdWork from "./views/student/lesson/LessonThirdWork";
import LessonThirdBoard from "./views/student/lesson/LessonThirdBoard";
import LessonFourthWork from "./views/student/lesson/LessonFourthWork";
import LessonFourthBoard from "./views/student/lesson/LessonFourthBoard";
import LessonLastTest from "./views/student/lesson/LessonLastTest";


// others
//<Redirect to="/" />
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/home" render={(props) => <Homepage {...props} />} />
            <Route path="/login" render={(props) => <Login {...props} />} />
            <Route path="/creature" render={(props) => <Creature {...props} />} />
            <Route path="/checkresult" render={(props) => <CheckResult {...props} />} />
            <Route path="/report" render={(props) => <Report {...props} />} />
            <Route path="/member" render={(props) => <Member {...props} />} />

            <Route path="/student-homepage" render={(props) => <StudentHomepage {...props} />} />
            <Route path="/select-lesson" render={(props) => <SelectLesson {...props} />} />

            <Route path="/student/pretest" render={(props) => <Pretest {...props} />} />
            <Route path="/student/posttest" render={(props) => <Posttest {...props} />} />
            <Route path="/student/assessment" render={(props) => <Assessment {...props} />} />

            <Route path="/study/firsttest/:lesson" render={(props) => <LessonFirstTest {...props} />} />
            <Route path="/study/detail/:lesson" render={(props) => <LessonDetail {...props} />} />
            <Route path="/study/firstwork/:lesson" render={(props) => <LessonFirstWork {...props} />} />
            <Route path="/study/firstboard/:lesson" render={(props) => <LessonFirstBoard {...props} />} />
            <Route path="/study/secondwork/:lesson" render={(props) => <LessonSecondWork {...props} />} />
            <Route path="/study/secondboard/:lesson" render={(props) => <LessonSecondBoard {...props} />} />
            <Route path="/study/waiting/:lesson" render={(props) => <LessonWaiting {...props} />} />
            <Route path="/study/thirdwork/:lesson" render={(props) => <LessonThirdWork {...props} />} />
            <Route path="/study/thirdboard/:lesson" render={(props) => <LessonThirdBoard {...props} />} />
            <Route path="/study/fourthwork/:lesson" render={(props) => <LessonFourthWork {...props} />} />
            <Route path="/study/fourthboard/:lesson" render={(props) => <LessonFourthBoard {...props} />} />
            <Route path="/study/lasttest/:lesson" render={(props) => <LessonLastTest {...props} />} />

            <Route path="/index" render={(props) => <Index {...props} />} />
            <Route
                path="/nucleo-icons"
                render={(props) => <NucleoIcons {...props} />}
            />
            <Route
                path="/landing-page"
                render={(props) => <LandingPage {...props} />}
            />
            <Route
                path="/profile-page"
                render={(props) => <ProfilePage {...props} />}
            />
            <Route
                path="/register-page"
                render={(props) => <RegisterPage {...props} />}
            />
            <Redirect to="/home" />
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
