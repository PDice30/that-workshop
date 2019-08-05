import "bootstrap/dist/css/bootstrap.css";
import { ListGroup, ListGroupItem, Media } from "reactstrap";
import Layout from '../components/Layout';

const Speakers = () =>
  <Layout>
    <ListGroup>
        {speakers.map(speaker => {
            return (
                <ListGroupItem className="justify-content-between">
                    <Media>
                        <Media body>
                            <Media heading>                            
                                {`${speaker.firstname} ${speaker.lastname}`}
                            </Media>
                            {speaker.title}
                        </Media>
                    </Media>    
                </ListGroupItem>
            );
        })}
    </ListGroup>
  </Layout>

const speakers = [
    {
      id: "1",
      firstname: "Matt",
      lastname: "Reetz",
      fullname: "Matt Reetz",
      title: "Software Engineer",
      company: "Headway",
      avatar: "https://api.adorable.io/avatars/64/matt",
      biography: "Matt is a coding ninja.",
      email: "matt@headway.io"
    },
    {
        id: "2",
        firstname: "Tim",
        lastname: "Gremore",
        fullname: "Tim Gremore",
        title: "Software Engineer",
        company: "Headway",
        avatar: "https://api.adorable.io/avatars/64/tim",
        biography: "Tim is a coding wizard.",
        email: "tim@headway.io"
      },
  ]

export default Speakers;

