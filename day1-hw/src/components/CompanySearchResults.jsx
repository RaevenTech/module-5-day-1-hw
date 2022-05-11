import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Job from './Job'
//import uuid from 'react-uuid'
import { useParams } from 'react-router-dom'

const CompanySearchResults = () => {

    const [jobs, setJobs] = useState([])
    const params = useParams()

    useEffect(() => {
        getJobs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


   

    const getJobs = async () => {
        const response = await fetch('https://strive-jobs-api.herokuapp.com/jobs?company=' + params.companyName)
        const { data } = await response.json()

        setJobs(data)
    }

    return (
        <Container>
            <Row>
                <Col>
                    {jobs.map(jobData => <Job key={jobData.id{/*uuid()*/}} data={jobData} />)}
                </Col>
            </Row>
        </Container>
    )
}

export default CompanySearchResults