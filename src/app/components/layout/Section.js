import React from 'react';
import Row from '../layout/Row';
import Content from '../layout/Content';

const Section = props =>
    <section className="section">
        <div className="section-content">
            <div className="grid">
                <div id={ props.id }>
                     <Row colSize={'column'}>
                         <Content colSize={'column'}>
                             <h1 className={ props.titleClass }>{ props.title }</h1>
                         </Content>
                     </Row>

                    { props.children }
                </div>
            </div>
        </div>
    </section>
;

export default Section;
