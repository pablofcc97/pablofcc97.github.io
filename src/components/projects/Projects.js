import React, {useReducer} from "react";
import './projects.css'
import PositionContext from "../../positionContext.js";
import Carousel from "../general/carousel/Carousel";
import CarouselItems from './CarouselItems/CarouselItems'
import ProjectContents from "./ProjectContents/ProjectContents";

const positionReducer = (state, action) => {
    switch(action.type){
        case 'LEFT':
            return state===0 ? action.itemsNumber : state-1
        case 'RIGHT':
            return state===action.itemsNumber ? 0 : state+1
        default: return state
    }
}

const Projects = () => {
    const [position, positionDispatch] = useReducer(positionReducer, 0)
    const itemsNumber = CarouselItems.length-1

    return(
        <section className="projects section " id="proyectos">
            <div className="container">
                <h2 className="section__title">Algunos proyectos realizados</h2>
                <PositionContext.Provider value={[position, positionDispatch, itemsNumber]}>
                    <Carousel items={CarouselItems} />
                    <div className="project__content">
                        {ProjectContents[position]}
                    </div>
                </PositionContext.Provider>
            </div>
        </section>
    )
}
export default Projects