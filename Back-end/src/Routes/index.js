const { Router } = require("express");
const login = require("../Routes/login");
const createDomain = require("./dbRoutes/createDomain");
const createUser = require("./dbRoutes/createUser");
const getCourses = require("./getCourses");
const putUser = require("./putUser");
const getUser = require("./getUser");
const postMail = require("./dbRoutes/postMail");
const getAllUsers = require("./getAllUsers");
const getGrades = require("./getGrades");
const postCourse = require("./postCourse");
const postUserMoodle = require("./postUserMoodle");
const putUserMoodle = require("./putUserMoodle");
const postEnrolUser = require("./postEnrolUser");
const getEnrolledCourses = require("./studentRoutes/getEnrolledCourses");
const studentGrades = require("./StundentGrades");
const getTeacherCourse = require("./studentRoutes/getTeacherCourse");
const postReloadUser = require("./postreloadUser");
const postChangeRol = require("./postChangeRol");
const teacherCourses = require("./teacherRoutes/teacherCourses");
const createSuperAdmin=require("./dbRoutes/createSuperAdmin")
const router = Router();

router.post("/postDomain", createDomain);
router.post("/postUser", createUser);
router.post("/login", login);
router.post("/getCourses", getCourses);
router.post("/getUser", getUser);
router.post("/postMail", postMail);
router.post("/getAllUsers", getAllUsers);
router.post("/getGrades", getGrades);
router.post("/postCourse", postCourse);
router.post("/postUserMoodle", postUserMoodle);
router.post("/enrolUser", postEnrolUser);
router.post("/getStudentCourses", getEnrolledCourses);
router.post("/getStudentGrades", studentGrades);
router.post("/getTeacher", getTeacherCourse);
router.post("/reloadUser", postReloadUser);
router.post("/changeRol", postChangeRol);
router.post("/teacherCourse", teacherCourses);
router.post("/createSuperAdmin", createSuperAdmin);
router.put("/putUser", putUser);
router.put("/putUserMoodle", putUserMoodle);
router.get("/", (req, res) => {
  const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Soy un web service</title>
</head>
<body>
    <h1>Soy un web service</h1>
    <!-- El contenido de tu página web puede ir aquí -->
</body>
</html>
`;
  res.status(200).send(html);
});
module.exports = router;
