import React, { Component } from 'react';

class Editar extends Component {
    tituloRefs = React.createRef();
    entradaRefs = React.createRef();
    editarPost = (e) => {

        e.preventDefault();    
        //leer los refs
        

        const post = {
            title: this.tituloRefs.current.value,
            body: this.entradaRefs.current.value,
            userId: 1,
            id : this.props.post.id
        }


        //enviar por props a peticion de axios

       this.props.editarPost(post)
    }

    cargarFormulario = () => {

        if (!this.props.post) return null;

        const {title,body} = this.props.post;

        return (
            <form className="col-8" onSubmit={this.editarPost}>
            <legend className="text-center">Editar Post</legend>
            <div className="form-group">
                <label >Titulo del Post: </label>
                <input type="text" ref={this.tituloRefs} className="form-control" defaultValue={title}></input>
            </div>
            <div className="form-group">
                <label >Contenido: </label>
                <textarea ref={this.entradaRefs} className="form-control" defaultValue={body}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Guardar Cambios</button>
            
        </form>
        )
    }

    render() { 

        

        return ( 
            <React.Fragment>
                {this.cargarFormulario ()}
            </React.Fragment>
         );
    }
}
 
export default Editar;