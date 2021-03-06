import React from "react";
import { Container, Row } from "reactstrap";

import Title from "../title";
import CharacterSlider from "./character-slider";
import Styles from "./heros.module.css";

const data = [
    {
        name: 'Dakota Fray',
        description:
            'A western cowboy lady who can knock down all the obstacles with her two guns. Be careful! She is not as friendly as you think',
        maxim: [`"Wanna kill me? Ask my guns."`, `"We all know that I am the best."`],
        star: 3,
        image: require('public/images/heroes/thanlan.gif'),
        avatar: require('public/images/character/thanlan.png'),
        type: 'Lizard',
    },
    {
        name: 'Ace Wyatt',
        description:
            'He has all the qualities of a leader. He is a brave and talented warrior who fights for the sake of defeating all enemies and winning.',
        maxim: [
            `"The last one standing is the winner, and that's me."`,
            `"Life is short. I mean...your life, 'cause now it's over for you."`,
        ],
        star: 5,
        image: require('public/images/heroes/soc.gif'),
        avatar: require('public/images/character/soc.png'),
        type: 'Wolf',
    },
    {
        name: 'Gary Dan Maverick',
        description:
            "He can be ponderous, but he is the strongest. He destroys all enemies like the way he eats: there's nothing left in the end.",
        maxim: [
            `"Can we finish them soon? I'm starving..."`,
            `"The man who goes farthest is generally the one who is willing to do and dare."`,
        ],
        star: 4,
        image: require('public/images/heroes/heo.gif'),
        avatar: require('public/images/character/heo.png'),
        type: 'Pig',
    },
    {
        name: 'Emyrs Quinn',
        description: 'A lovely girl has her eyes well in at shooting. Even though she is adorable, you better not tangle with her.',
        maxim: [`"I can see everything even your death."`, `"Ladies do not start fights, but they can finish them."`],
        star: 4,
        image: require('public/images/heroes/soi.gif'),
        avatar: require('public/images/character/soi.png'),
        type: 'Squirrel',
    },
];

export default function Heros() {
    return (
        <section id="characters" className={Styles.characters}>
            <Container>
                <Row>
                    <Title text="characters" />
                </Row>
                <CharacterSlider data={data} />
            </Container>
        </section>
    );
}
