const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre,propietario,email,fecha,sintomas, id } = paciente
 
 
  const handleEliminar = () => {
   const respuesta = confirm('Deseas eliminar este paciente?')
   if(respuesta) {
    eliminarPaciente(id)
   }
  }

  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
    <p className='font-bold mb-3 text-gray-700 normal-case'>Nombre: {''}
      <span>{nombre}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 normal-case'>Propietario: {''}
      <span>{propietario}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 normal-case'>Email: {''}
      <span>{email}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 normal-case'>Fecha Alta: {''}
      <span>{fecha}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 normal-case'>Sintomas: {''}
      <span>{sintomas}</span>
    </p>
    <div className="flex justify-between mt-10">
      <button 
      type="button"
      className="py-2 px-10 bg-indigo-600 uppercase font-bold text-white rounded-lg" 
      onClick={() => setPaciente(paciente)}
      >
        Editar
      </button>

      <button className="py-2 px-10 bg-red-600 uppercase font-bold text-white rounded-lg" type="button" 
        onClick={handleEliminar}>
        eliminar
      </button>
    </div>
  </div>

  )
}

export default Paciente