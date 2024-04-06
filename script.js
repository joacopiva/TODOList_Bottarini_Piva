let ArrayTareas = []
const CrearTarea = () =>
{    
    let nuevatarea = document.getElementById("NewTask").value;

    principal(nuevatarea)
}  


const principal = (nuevatarea) =>
{   
    var contenedor = document.querySelector(".Tareas");

    const Tarea = 
    {
        nuevaTarea: nuevatarea,
        fechaHoraCreado: Date.now(),
        fechaHoraTachado: null
    }

    
    ArrayTareas.push(Tarea)

    let check = document.createElement("input")
    let task = document.createElement("label")
    check.type = 'checkbox';
    let li = document.createElement("li")
    
    check.addEventListener('change', function()
    {
        if(check.checked)
        {
            task.style.textDecoration = "line-through";
            Tarea.fechaHoraTachado = Date.now()
        }
        else
        {
            task.style.textDecoration = "none";
        }
        
    })



    for(let i = 0; i < ArrayTareas.length; i++)
    {
        task.innerHTML = ArrayTareas[i].nuevaTarea;
        li.appendChild(check);
        li.appendChild(task);
        contenedor.appendChild(li);

    }
    console.log(ArrayTareas)
}

function ObtenerTareaMasRapida()
{
    let ArrayTareasTachadas = ArrayTareas.filter(function(i)
    {
        return i.fechaHoraTachado != null;
    })
    console.log(ArrayTareas)
    let tareaMostrarNombre = ArrayTareasTachadas[0].nuevaTarea;
    let tareaMasRapida = ArrayTareasTachadas[0].fechaHoraTachado;


    for(let i = 0; i < ArrayTareasTachadas.length; i++)
    {
        if(tareaMasRapida > ArrayTareasTachadas[i].fechaHoraTachado)
        {
            tareaMasRapida = ArrayTareasTachadas[i];
            tareaMostrarNombre = ArrayTareas[i].nuevaTarea;

        }
    }
    let contenedorRapido = document.querySelector(".TareaRapida");

    var label = document.createElement("label");

    label.innerHTML = "La tarea mas rapida en realizarse fue: " + tareaMostrarNombre
    contenedorRapido.appendChild(label);


}











