import React from 'react';
import _ from 'lodash';


export function LearnScreen() {
    return (
        <section className="content-box">
            <h1>About E-Waste</h1>

            <div className="text-box">
                <span className="question">
                    What It Is and Its Impacts
                </span>
                <p>
                    E-waste, or electronic waste, are electronic products that are no longer of value to their users and
                    are discarded. Improper disposal of e-waste poses significant environmental and health problems:
                </p>
                <ul>
                    <li>Poisonous chemicals spread to soil and water</li>
                    <li>Valuable materials used in producing electronic products become scarcer</li>
                    <li>Unsafe handling of e-waste can expose workers to toxic chemicals that harshly impact their
                        health
                        such as cancer
                    </li>
                </ul>
            </div>

            <div className="text-box">
                <span className="question">
                    Causes and How We Can Tackle It Together 
                </span>
                <p>
                    Irresponsible disposal of e-waste is an increasing problem because the consumption rate of
                    electronic devices is growing rapidly, but opportunities for properly recycling e-waste are not
                    easily accessible for many people. With Dawgs-e-Cycling, users can search for responsible recycling
                    services nearby and learn about frequently asked questions.
                </p>
            </div>

            <div className="text-box">
                <span className="question">
                    Sustainable Companies
                </span>
                <p>
                    Want to purchase electronics from companies that practice responsible electronic production? Here
                    are some companies where you can get started:
                </p>
                <ul>
                    <li><a href="https://www.fairphone.com/en/" target="_blank">Fairphone</a></li>
                    <li><a href="https://www.apple.com/environment/" target="_blank">Apple</a></li>
                    <li><a href="https://www.hp.com/us-en/hp-information/sustainable-impact.html" target="_blank">HP</a></li>
                    <li><a href="https://www.dell.com/en-us/dt/corporate/social-impact/advancing-sustainability.htm" target="_blank">Dell</a></li>
                </ul>
            </div>

            <footer>
                <p>Copyright &copy; 2022 INFO 442 Group D</p>
                <p>Contact Info: Dawgs-E-Cycling </p>
            </footer>
        </section>
    );
}