import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    
    return (
        <header className='header'>
        <h1>{title}</h1>
        <Button 
            color={showAdd ? 'darkblue' : 'green'}
            text={showAdd ? 'Close' : 'Add'}
            onClick={onAdd} 
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}

// CSS in js
// const headingStyle = {
//     color:'blue', 
//     backgroundColor: 'black'
// }

export default Header
