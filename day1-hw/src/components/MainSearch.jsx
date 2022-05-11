import { Component } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Job from './Job'
//import uuid from 'react-uuid'


class MainSearch extends Component {

    state = {
        query: '',
        jobs: []
    }



    handleChange = (e) => {
        this.setState({ query: e.target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch('https://strive-jobs-api.herokuapp.com/jobs?search=' + this.state.query + '&limit=20')

        if (!response.ok) {
            alert('Error fetching results')
            return
        }

        const { data } = await response.json()

        this.setState({ jobs: data })

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={10} className='mx-auto my-3'>
                        <h1>Remote Jobs Search</h1>
                    </Col>
                    <Col xs={10} className='mx-auto'>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Control type="search" value={this.state.query} onChange={this.handleChange} placeholder="type and press Enter" />
                        </Form>
                    </Col>
                    <Col xs={10} className='mx-auto mb-5'>
                        {
                            this.state.jobs.map(jobData => <Job key={jobData.id{/*uuid()*/}} data={jobData} />)
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MainSearch