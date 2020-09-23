import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {Hellow} from '../components/Hellow'
export const MainPage = ()=>{
    return (
        <main className="pt-3">
            <Container>
                <Row>
                    <Col>
                        <Hellow/>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}