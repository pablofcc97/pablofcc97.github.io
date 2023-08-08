import React from "react"
import './skills.css'
import SkillCard from './SkillCard/SkillCard'
import Css3Icon from '../../assets/skills/css3.svg'
import HtmlIcon from '../../assets/skills/html5.svg'
import JavascriptIcon from '../../assets/skills/javascript.svg'
import NodejsIcon from '../../assets/skills/nodejs.svg'
import ReactIcon from '../../assets/skills/react.svg'
import PhpIcon from '../../assets/skills/php.svg'
import LaravelIcon from '../../assets/skills/laravel.svg'
import PhotoshopIcon from '../../assets/skills/photoshop.svg'
import IllustratorIcon from '../../assets/skills/illustrator.svg'
import FigmaIcon from '../../assets/skills/figma.svg'
import WordpressIcon from '../../assets/skills/wordpress.svg'
import ElementorIcon from '../../assets/skills/elementor.svg'
import DiviIcon from '../../assets/skills/divi.svg'

const Skills = () => {
    const webSkills = [
        {icon:HtmlIcon, name: 'HTML'},
        {icon:Css3Icon, name: 'CSS3'},
        {icon:JavascriptIcon, name: 'JavaScript'},
        {icon:NodejsIcon, name: 'Node JS'},
        {icon:ReactIcon, name: 'React'},
        {icon:PhpIcon, name: 'PHP'},
        {icon:LaravelIcon, name: 'Laravel'}
    ]
    const designSkills = [
        {icon:PhotoshopIcon, name: 'Photoshop'},
        {icon:IllustratorIcon, name: 'Illustrator'},
        {icon:FigmaIcon, name: 'Figma'}
    ]
    const wordpressSkills= [
        {icon:WordpressIcon, name: 'Wordpress'},
        {icon:ElementorIcon, name: 'Elementor'},
        {icon:DiviIcon, name: 'Divi'}
    ]
    return (
        <section className="skills section " id="habilidades">
            <div className="container">
                <h2 className="section__title">Tecnologías que manejo</h2>
                <div className="skills__grid grid">
                    <SkillCard skills={webSkills} className={'webSkills'} title={'Para Diseño y Desarrollo Web con código'}></SkillCard>
                    <SkillCard skills={designSkills} className={'designSkills before'} title={'Para Diseño Gráfico Digital'}></SkillCard>
                    <SkillCard skills={wordpressSkills} className={'wordpressSkills'} title={'Para desarrollo Wordpress'}></SkillCard>
                </div>
            </div>
        </section>
    )
}

export default Skills