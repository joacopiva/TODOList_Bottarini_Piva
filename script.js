let ArrayTareas = []
let Tarea = 
{
    nuevaTarea: null,
    fechaHoraCreado: null,
    fechaHoraTachado: null,
};

const CrearTarea = () =>
{    
    let nuevatarea = document.getElementById("NewTask").value;

    principal(nuevatarea)
}  


const principal = (nuevatarea) =>
{   
    let tareas = document.getElementById("Tareas")

    Tarea = 
    {
        nuevaTarea: nuevatarea,
        fechaHoraCreado: new Date().toLocaleString(),
        fechaHoraTachado: new Date().toLocaleString()
    }

    ArrayTareas.push(Tarea)

    tareas.innerHTML = "";
    


    console.log(ArrayTareas)

    for(let i = 0; i < ArrayTareas.length; i++)
    {
        let task = document.createElement("p")
        let check = document.createElement("label")
        task.innerHTML = ArrayTareas[i].nuevaTarea;
        task.onclick(tachar(task));
        tareas.appendChild(task);
      
    }



}

function tachar(task)
{
    task.style.text-decoration = "line-through";
}









