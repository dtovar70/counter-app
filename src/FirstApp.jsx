import PropTypes from 'prop-types'


export const FirstApp = ( {title, subtitle, name} ) => {
   
    return(
    <>
        <h1>{ title }</h1>
        <p>{subtitle}</p>
        <p>{name}</p>
    </>
   ) 
        
  }

  FirstApp.propTypes = {
    title: PropTypes.string.isRequired
  }

  FirstApp.defaultProps = {
    name: 'dario',
    subtitle: 'No hay subtitulo',
    title: 'No hay titulo'
  } 