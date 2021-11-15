import { Card, Col, Image, Row } from "react-bootstrap";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/stores/user";
import { Link } from "react-router-dom";
import { string_to_slug } from "../utils/helper";
const RandomImageProfile = ({ src }) => <Image src={src.length ? src : 'https://source.boringavatars.com/marble/100?t=' + (+new Date())} width="50" roundedCircle />;

const UsersCard = ({ user }) =>
    <Card style={{height:'550px'}} className="user-cards justify-content-center single_advisor_profile">
        <Card.Body className="p-0">
            <div className="advisor_thumb"><img src={user.picture.large} alt="" width="400px" /></div>
            <Row className="single_advisor_details_info me-0 ms-0">
                <Col md="auto">
                    <RandomImageProfile key={user.id.name + '-' + user.id.value} src={user.picture.medium} />
                </Col>
                <Col>
                    <div class="ms-1">
                        <h6 class="mb-0">{user.name.title} {user.name.first} {user.name.last}</h6> <span>ID {user.id.value ? user.id.name + '-' + user.id.value : '-- N/A --'}</span>
                        <p><Link to={'/'+string_to_slug(user.name.title+' '+user.name.first+' '+user.name.last)} className="text-decoration-none"> More Deatils </Link></p>
                    </div>
                </Col>
            </Row>
        </Card.Body>
    </Card>;

export default function Users() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);
    const user = useSelector((state) => state.user.users);

    return (
        <Row className="g-0">
            {user && user.results.map((e, i) => <Col key={i} md="3"><UsersCard user={e}></UsersCard></Col>)}
        </Row>
    )
}