import {useNavigate} from 'react-router-dom';

function ArchComponent({img,title}) {
    const navigate = useNavigate();

    function route(obj){
        navigate('/ArchetypePage/*',{state:{data:obj}})
    }
    return (
        <div className='col'>
            <img src={img} alt="" onClick={()=> route({img,title})}/>
            <h5>{title}</h5>
        </div>
    );
}
export default ArchComponent;