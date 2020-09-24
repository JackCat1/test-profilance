import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AddNewsButton from '../components/AddNewsButton'
import NewsList from '../components/NewsList'
import NewsSearch from '../components/NewsSearch'
export const NewsPage = ()=>{
    return (
        <main className="pt-3">
            <Container>
                <Row>
                    <Col>
                        <h1>Новости</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AddNewsButton/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <NewsSearch/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <NewsList/>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}