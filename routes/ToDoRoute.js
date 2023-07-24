const { Router } = require("express");
//Route to Servee just to make code clean
const { getToDo, saveToDo, deleteToDo, updateToDo } = require("../controllers/ToDoController");

const router = Router();

//get from db
router.get("/", getToDo);


//put to db using postman
router.post("/save", saveToDo);

router.post("/update", updateToDo);

 router.post("/delete", deleteToDo);

module.exports = router;