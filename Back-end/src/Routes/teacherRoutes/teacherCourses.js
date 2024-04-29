const getTeacherCourses = require("../../Controllers/teacherControllers/getTeacherCourses")

const teacherCourses=async(req,res)=>{
try {
    const response=await getTeacherCourses(req.body)

  res.status(200).json(response)  
} catch (error) {
  res.status(400).json(error.message)  
}
}
module.exports=teacherCourses
