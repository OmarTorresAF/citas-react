import { useEffect } from "react"
import { useState } from "react"
import Error from "./Error"


const Formulario = ({pacientes,setPacientes,paciente,setPaciente}) => {
  const [nombre,setNombre] = useState('')
  const [propietario,setPropietario] = useState('')
  const [email,setEmail] = useState('')
  const [fecha,setFecha] = useState('')
  const [sintomas,setSintomas] = useState('')

  const [error,setError] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
        setNombre(paciente.nombre)    
        setPropietario(paciente.propietario)    
        setEmail(paciente.email)    
        setFecha(paciente.fecha)    
        setSintomas(paciente.sintomas)    

    }
  }, [paciente])
  



  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // validacion del Formulario
    if([nombre,propietario,email,fecha,sintomas].includes('')) {
      console.log('hay almenos un campo vacio')


      setError(true)
      return
    }

    setError(false)

    //objeto de paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    }

    if(paciente.id ) {
      //editando el registro
      objetoPaciente.id = paciente.id
      const  pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
      setPacientes(pacientesActualizados)
      setPaciente({})
    }else{
      //nuevo registro
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente])
    }
  
     //reiniciar form

    setNombre('')
    setPropietario('')
    setEmail('')
    setError('')
    setFecha('')
    setSintomas('')
  }


  return (
    <div className='md:w-1/2 lg:w-2/5'>
        <h2 className='font-black text-3xl text-center'>
            Seguimiento de Pacientes
        </h2>
        <p className='text-lg mt-5 text-center mb-10'>añade pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administralos</span></p>
    <form 
    onSubmit={handleSubmit}
    className='bg-white shadow-md rounded-lg py-10 px-5'>
      {error && <Error> <p>'Todos los campos son obligatorios'</p></Error>}
      <div className='mb-5'>
        <label htmlFor='Propietario' className='block text-gray-700 uppercase font-bold'>Nombre del propietario</label>
          <input 
          id='Propietario'
          type="text"
          placeholder='Nombre del Propietario'
          className='border-2 w-full p-2 mt-2 placeholder-gray-500 focus:placeholder-red-500 rounded-md'
          value={[propietario]}
          onChange={ (e) => setPropietario(e.target.value)} />
      </div>
      <div className='mb-5'>
        <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre de la Mascota</label>
          <input 
          id='mascota'
          type="text"
          placeholder='Nombre de la Mascota'
          className='border-2 w-full p-2 mt-2 placeholder-gray-500 focus:placeholder-red-500 rounded-md'
          value={nombre}
          onChange={ (e) => setNombre(e.target.value)} />
      </div>
      <div className='mb-5'>
        <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email</label>
          <input 
          id='email'
          type="email"
          placeholder='Contacto del propietario'
          className='border-2 w-full p-2 mt-2 placeholder-gray-500 focus:placeholder-red-500 rounded-md'
          value={email}
          onChange={ (e) => setEmail(e.target.value)}  />
      </div>
      <div className='mb-5'>
        <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Fecha</label>
          <input 
          id='alta'
          type="date"
          className='border-2 w-full p-2 mt-2 placeholder-gray-500 focus:placeholder-red-500 rounded-md'
          value={fecha}
          onChange={ (e) => setFecha(e.target.value)} />
      </div>
      <div className='mb-5'>
        <label htmlFor='Sintomas' className='block text-gray-700 uppercase font-bold'>Sintomas</label>
          <input 
          id='Sintomas'
          type="text"
          placeholder='Describe los Sintomas'
          className='border-2 w-full p-2 mt-2 placeholder-gray-500 focus:placeholder-red-500 rounded-md'
          value={sintomas}
          onChange={ (e) => setSintomas(e.target.value)} />
      </div>

      <input 
      type="submit"
      value={paciente.id ? 'Editar Paciente':'Agregar Paciente'}
      className='bg-indigo-600 w-full p-3 text-white uppercase font-bold transition-all hover:bg-indigo-800 cursor-pointer rounded-md mb-10 shadow-md' />
    </form>
    </div>
  )
}

export default Formulario