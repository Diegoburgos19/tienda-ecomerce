class Carrito{
    comprarProducto(e){
        e.preventDefault();
        if(e.target.classList.contains('agregar-carrito')){
            const Producto = e.target.parentElement.parentElement;
            this.leerDatosProducto(producto);
        }
    }
}