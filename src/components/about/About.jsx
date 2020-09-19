import React from 'react';

const About = () => {
    return (
        <div className='about-container'>
            <h1 className='about-title'>John Conway's game of life</h1>
            <p className="description">The 'Game of Life' is not actually a game, but a 'cellular automation' invented by John Conway in 1970. Each cell in a grid represents a biological cell, and the cells will live or die based on a set of mathematical rules. A player interacts with the game at the beginning by setting an inital configuration of the grid and then observing the outcome.</p>

            <div className="rules">
                <h4 className="rules-title">The Rules!</h4>
            <ul>
                <li className="rule"> Any live cell with fewer than two live neighbors dies, as if by underpopulation</li>
                <li className="rule">Any live cell with two or three live neighbors lives on to the next generation.</li>
                <li className="rule">Any live cell with more than three live neighbors dies, as if by overpopulation.</li>
                <li className="rule">Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</li>
            </ul>
            </div>
            {/* RULES */}
            <p className="description">The first generation is created by applying the above rules to the initial configuration of the grid. Deaths and births occur simultaneously and the next generations are created applying the rules to the new configuration.</p>
        </div>
    );
}

export default About;
