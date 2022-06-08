import arrow from '../Assets/Images/arrow.png';

function animatedArrow({active}) {
    let out = "arrow"
    if (active) {
        out = "arrow-down"
    } else {
        out = "arrow-side"
    }
    return (
        <img class={out} src={arrow} alt="" />
    );
}
export default animatedArrow;