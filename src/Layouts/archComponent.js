import { useNavigate } from 'react-router-dom';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
function ArchComponent({ img, title }) {
    const navigate = useNavigate();

    function route(obj) {
        navigate('/ArchetypePage/*', { state: { data: obj } })
    }
    return (
        <div className='col'>
            <LazyLoadComponent>
                <img src={img} alt="" onClick={() => route({ img, title })} />
            </LazyLoadComponent>
            <h5>{title}</h5>
        </div>
    );
}
export default ArchComponent;