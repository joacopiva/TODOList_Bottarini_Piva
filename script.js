let ArrayTareas = []

const principal = (nuevatarea) =>
{   
    let tareas = document.getElementById("Tareas")

    ArrayTareas.push(nuevatarea)

    tareas.innerHTML = "";
    


    console.log(ArrayTareas)

    for(let i = 0; i < ArrayTareas.length; i++)
    {
        let task = document.createElement("p")
        task.innerHTML = ArrayTareas[i]
        tareas.appendChild(task)
      
    }



}





const CrearTarea = () =>
{    
    let nuevatarea = document.getElementById("NewTask").value;

    principal(nuevatarea)
}  





