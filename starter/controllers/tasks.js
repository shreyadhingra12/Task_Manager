const getAllTask =(req,res)=>{
    res.send('all items')
}
const createTask =(req,res)=>{
    res.send('create items')
}
const getTask=(req,res)=>{
    res.send('get single task')
}
const updateTask=(req,res)=>{
    res.send('update task')
}
const deleteTask=(req,res)=>{
    res.send('get single task')
}
module.exports={
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}