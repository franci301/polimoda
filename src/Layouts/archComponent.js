function ArchComponent({img,title}) {
    return (
        <div className='col'>
            <img src={img} alt="" />
            <h5>{title}</h5>
        </div>
    );
}
export default ArchComponent;