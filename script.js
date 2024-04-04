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
        let check = document.createElement("input")
        let li = document.createElement("li")
        check.type = 'checkbox';
        task.innerHTML = ArrayTareas[i].nuevaTarea;
        
        li.appendChild(check);
        li.appendChild(task);
        tareas.appendChild(li);
        
      
    }



}











