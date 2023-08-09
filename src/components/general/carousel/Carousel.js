import React, {useContext} from "react";
import PositionContext from "../../../positionContext";
import './carousel.css'
import ChevronLeft from '../../../assets/chevron--left.svg'
import ChevronRight from '../../../assets/chevron--right.svg'

const Carousel = ({items}) => {
    /*const [position, setPosition] = useState(0)
    const itemsNumber = (items.length-1)
    
    const moveRight = () => setPosition(position===itemsNumber ? 0 : position+1)
    const moveLeft = () => setPosition(position===0 ? itemsNumber : position-1)*/


    const [position, dispatch, itemsNumber] = useContext(PositionContext)

    const moveLeft = () => dispatch({ type: "LEFT", itemsNumber: itemsNumber})
    const moveRight = () => dispatch({ type: "RIGHT", itemsNumber: itemsNumber})

    const styles={ transform: `translateX(-${position}00%)` }
    return(
        <div className="carousel flex">
            <img src={ChevronLeft} alt="" className="button--left carousel__nav__button"  onClick={()=>moveLeft()}/>
            <div className="carousel__body">
                <div className="carousel__body__container flex" style={styles} >
                    {items.map((e, i)=><div key={i}>{e}</div>)}
                </div>
            </div>
            <img src={ChevronRight} alt="" className="button--right carousel__nav__button" onClick={()=>moveRight()}/>
        </div>
    )
} 
export default Carousel