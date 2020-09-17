import React, { Component } from 'react';
import './lobby.css';

import ButtonList from '../atomic/organisms/ButtonList';
import Select from "../atomic/atoms/Select";
import Fieldset from '../atomic/organisms/Fieldset';

const kanaExams = [
    { id: 'hiragana', class: 'btn-secondary active', title: 'Hiragana' },
    { id: 'katakana', class: 'btn-secondary', title: 'Katakana' },
    { id: 'mixed-kana', class: 'btn-secondary', title: 'All kana' },
];
const kanjiExams = [
    { id: 'kanjin5', class: 'btn-secondary', title: 'Kanji N5' },
    { id: 'kanjin4', class: 'btn-secondary', title: 'Kanji N4' },
    { id: 'kanjin3', class: 'btn-secondary', title: 'Kanji N3' },
    { id: 'kanjin2', class: 'btn-secondary', title: 'Kanji N2' },
    { id: 'kanjin1', class: 'btn-secondary', title: 'Kanji N1' },
    { id: 'mixed-kanji', class: 'btn-secondary', title: 'All kanji' },
];
const retrySelectOptions = [
    { id: '1', title: 'None' },
    { id: '2', title: 'Once' },
    { id: '3', title: 'Twice' },
    { id: '4', title: 'Infinite' }
];
const repeatSelectOptions = [
    { id: '1', title: 'Repeat until answered correctly' },
    { id: '2', title: 'Never repeat' },
];

export default class Lobby extends Component {
    render() {
        return (
            <div id="lobby">
                <div className="column">
                    <div className="column">
                        <div className="content">
                            <h1>Lobby</h1>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="column two">
                        <div className="column">
                            <div className="content">
                                <Fieldset class={'reduce-fs-padding'} title={ 'Kana' }>
                                    <ButtonList class={ 'vertical' }
                                                children={ kanaExams }/>
                                </Fieldset>
                            </div>
                            <div className="column">
                                <div className="content">
                                    <Fieldset class={'reduce-fs-padding'} title={ 'Kanji' }>
                                        <ButtonList class={ 'vertical' }
                                                    children={ kanjiExams }/>
                                    </Fieldset>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column two">
                        <div className="content">
                            <div className="selected-exam">
                                <form>
                                    <fieldset>
                                        <legend>
                                            <h2>
                                                {/*selected exam title*/}
                                            </h2>
                                        </legend>
                                        <small className="highlight">
                                         {/* selected exam description*/}
                                        </small>
                                        <p>
                                            The settings below only affect the current exam.
                                            To change your default global settings,  <a className="bold highlight" title="settings">click here</a>.
                                        </p>
                                        <h4>Exam settings</h4>
                                        <div className="form-group">
                                            <Select name={ 'retry-setting' }
                                                    title={ 'Allowed retries per question' }
                                                    id={ 'retry-select' }
                                                    children={ retrySelectOptions }/>

                                            {/*<label htmlFor="retry-select">Allowed retries per question</label>*/}
                                            {/*<select id="retry-select"*/}
                                                    {/*name="retry-setting">*/}
                                                {/*/!*options*!/*/}
                                            {/*</select>*/}
                                        </div>

                                        <div className="form-group">
                                            {/*TODO: the small below must be moved inside the Select, between Label and Select elmn*/}
                                            <small>
                                                By default, questions you answered incorrectly will be repeated again at the end of your exam
                                                until you answer them correctly. You may also choose to disable this.
                                            </small>
                                            <Select name={ 'repeat-setting' }
                                                    title={ 'Repeat incorrectly answered questions' }
                                                    id={ 'repeat-select' }
                                                    children={ repeatSelectOptions }/>
                                        </div>

                                        <div className="form-group">
                                            <Select name={ 'method-setting' }
                                                    title={ 'Method' }
                                                    id={ 'method-select' }
                                                    children={ repeatSelectOptions }/>
                                                    {/*TODO: obv replace the children here and all these select options must be inherited from /settings anyway*/}
                                        </div>
                                        <button type="submit"
                                                title="Start exam"
                                                className="btn btn-primary btn-main">Start Exam</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

