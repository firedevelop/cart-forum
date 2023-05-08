function eliminarCurso(e){
    e.preventDefault()
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id')
        articulosCarrito = articulosCarrito.filter( x = => cursoId.id !== cursoId)
        carritoHTML()
    }
}