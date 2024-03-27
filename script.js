let ArrayTareas = []

const principal = (nuevatarea) =>
{   
    let tareas = document.getElementById("Tareas")

    ArrayTareas.push(nuevatarea)


    <input> </input>;
    tareas.innerHTML = ArrayTareas;

    console.log(ArrayTareas)



}





const CrearTarea = () =>
{    
    let nuevatarea = document.getElementById("NewTask").value;

    principal(nuevatarea)
}  





