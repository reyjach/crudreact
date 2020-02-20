import React, { Component } from 'react';

class Formulario extends Component {

    //crear refs
    tituloRefs = React.createRef();
    entradaRefs = React.createRef();
    crearPost = (e) => {

        e.preventDefault();    
        //leer los refs
        

        const post = {
            title: this.tituloRefs.current.value,
            body: this.entradaRefs.current.value,
            userId: 1
        }
        

        //enviar por props a peticion de axios

        this.props.crearPost(post)
    }

    render() { 
        return ( 
            <form className="col-8" onSubmit={this.crearPost}>
                <legend className="text-center">Crear Nuevo Post</legend>
                <div className="form-group">
                    <label >Titulo del Post: </label>
                    <input type="text" ref={this.tituloRefs} className="form-control" placeholder="Titulo del Post"></input>
                </div>
                <div className="form-group">
                    <label >Contenido: </label>
                    <textarea ref={this.entradaRefs} className="form-control" placeholder="Contenido..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Crear</button>
                
            </form>
         );
    }
}
 
export default Formulario;