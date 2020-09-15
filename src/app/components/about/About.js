import React, { Component } from 'react';

export class About extends Component {
    render() {
        return (
            <div id="about">
                <div className="column">
                    <div className="content">
                        <h1>About Kotoba</h1>
                    </div>
                </div>
                <div className="column">
                    <div className="column two">
                        <div className="content">
                            <fieldset>
                                <legend>
                                    <h2>Who is it for?</h2>
                                </legend>
                                <p>
                                    Kotoba is intended for anyone who is in the process of learning kana and kanji.
                                </p>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="column two">
                        <div className="content">
                            <fieldset>
                                <legend>
                                    <h2>What is it for?</h2>
                                </legend>
                                <p>
                                    Kotoba is intended to be used as an addition to your regular studies of the
                                    language. To put it simply,
                                    it is a tool to test how well you have memorized kanji and to help you cram ( the
                                    reading of ) kanji and
                                    vocabulary ( Japanese and English ) by repetition.
                                </p>

                                <h3>What it isn't for...</h3>
                                <p>
                                    It does not have any flashcards and is not intended to teach you new words or kanji.
                                </p>
                                <p>
                                    Kotoba does not contain any instructions on stroke order or stroke directions. If
                                    you want to learn
                                    the proper way to physically write kanji, my advice would be to drop any digital
                                    tools and use pen and paper to
                                    get that muscle memory working.
                                </p>
                            </fieldset>
                        </div>
                    </div>
                    <div className="column two">
                        <div className="content">
                            <fieldset>
                                <legend>
                                    <h2>Features</h2>
                                </legend>
                                <h3>Exams</h3>
                                <p>
                                    Kotoba comes with a few standard exams ( hiragana, katakana and Kanji N5 to N1 )
                                    that you can use to test
                                    yourself.
                                </p>
                                <h3>Custom exams</h3>
                                <p>
                                    You can create custom exam manually or generate personalized lists based on
                                    questions you answer incorrectly.
                                </p>

                                <h3>Keep a record</h3>
                                <p>
                                    After an exam you will see an overview of all your answers in a score sheet with
                                    some stats.
                                    If you have enabled keeping a local record of your <a className="highlight">score
                                    history</a>,
                                    you can review all your previous exams again at any later time.
                                </p>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
