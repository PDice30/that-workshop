import "bootstrap/dist/css/bootstrap.css";
import { ListGroup, ListGroupItem, Media } from "reactstrap";
import Layout from '../components/Layout';

const schedule = () =>
  <Layout>
    <ListGroup>
        {events.map(event => {
            return (
                <ListGroupItem className="justify-content-between">
                    <Media>
                        <Media body>
                            <Media heading>
                                {event.title}
                            </Media>
                            {event.description}
                        </Media>
                    </Media>    
                </ListGroupItem>
            );
        })}
    </ListGroup>
  </Layout>

export default schedule;

const events = [
    {
        id: "1",
        title: "Conference Kickoff",
        description:
          "Conference Welcoming Party. Drinks and Food will be served.",
        speakerIds: ["2", "1"],
        start: "2019-08-23T21:00:00.000Z",
        hours: 1
    },
    {
        id: "2",
        title: "Learn Some Cool Stuff",
        description:
          "The Cool Stuff",
        speakerIds: ["2", "1"],
        start: "2019-08-23T21:00:00.000Z",
        hours: 2
    }
  ]