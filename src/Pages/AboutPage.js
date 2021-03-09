import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Rafiul. Right now im learning Node JS, React.</p>

            <p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p>

            <p>I'm constantly learning new things. currently those things include gaining more experience with  React, and Node JS</p>

            <p>My have some project, . You can check it out. here is my github <a href="https://github.com/RafiulFerdous" target="_blank" rel="noopener noreferrer">here</a></p>

            
            </Content>
        </div>
    );

}

export default AboutPage;