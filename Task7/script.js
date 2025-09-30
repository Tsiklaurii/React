// GET Todos. Fetch the first 5 todos from the API. Print only their id and title.
const API_URL = "https://jsonplaceholder.typicode.com/todos";

async function getToDos() {
    try {
        const res = await axios.get(API_URL);
        todos = res.data;
        for (let i = 0; i < 5; i++) {
            console.log(`Id: ${todos[i].id}, Title: ${todos[i].title}`);
        }
    } catch (error) {
        console.log(error);
    }
}
getToDos();


//POST Todo. Create a new todo with: { title: "Learn Axios", completed: false, userId: 1 } Print the response (should return the new todo with an id).
async function postToDo() {
    try {
        const res = await axios.post(API_URL, { title: "Learn Axios", completed: false, userId: 1 });
        console.log("New To Do:", res.data)
    } catch (error) {
        console.log(error)
    }
}
postToDo();


// PUT Todo. Update an existing todo (e.g., id 1) and set completed: true. Print the updated response.
async function putToDo() {
    try {
        const res = await axios.put(API_URL + "/1", { title: "Learn Axios", completed: true, userId: 1 });
        console.log("Updated:", res.data)
    } catch (error) {
        console.log(error)
    }
}
putToDo();


// DELETE Todo. Delete a todo by id (e.g., id 1). Print the response status (should be 200).
async function deleteToDo() {
    try {
        const res = await axios.delete(API_URL + "/1");
        console.log("Delete:", res.status)
    } catch (error) {
        console.log(error)
    }
}
deleteToDo();